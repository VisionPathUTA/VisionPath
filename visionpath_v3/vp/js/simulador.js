/* VISIONPATH — simulador.js con gráfico historial */
document.addEventListener('DOMContentLoaded', ()=>{
  const slider=document.getElementById('distanceSlider'),
        distVal=document.getElementById('distanceValue'),
        statusBox=document.getElementById('statusBox'),
        vibLevel=document.getElementById('vibrationLevel'),
        sensorMsg=document.getElementById('sensorMessage'),
        stick=document.querySelector('.stick-icon'),
        obs=document.querySelector('.obstacle'),
        vDots=document.querySelectorAll('.vdot'),
        distLine=document.querySelector('.distance-line'),
        distLabel=document.querySelector('.distance-label-scene'),
        waves=document.querySelectorAll('.wave');
  if(!slider)return;

  const Z={
    safe:{label:'🟢 Zona Segura',msg:'El usuario puede desplazarse con normalidad.',c:'safe'},
    warning:{label:'🟡 Precaución — Obstáculo Cercano',msg:'Vibración moderada. Reduzca la velocidad.',c:'warning'},
    danger:{label:'🔴 Peligro — ¡Obstáculo Inmediato!',msg:'Vibración intensa. Deténgase de inmediato.',c:'danger'}
  };

  /* historial */
  const canvas=document.getElementById('historyCanvas');
  const hist=[]; const MAX=80;
  function resizeC(){ if(!canvas)return; const dpr=devicePixelRatio||1; canvas.width=canvas.offsetWidth*dpr; canvas.height=canvas.offsetHeight*dpr; }
  resizeC(); window.addEventListener('resize',()=>{ resizeC(); update(slider.value); },{passive:true});

  function drawHist(){
    if(!canvas||hist.length<2)return;
    const ctx=canvas.getContext('2d'),W=canvas.width,H=canvas.height,dpr=devicePixelRatio||1;
    ctx.clearRect(0,0,W,H);
    const zy=v=>H-((v-5)/95)*H;
    ctx.strokeStyle='rgba(56,189,248,.05)'; ctx.lineWidth=1;
    [.25,.5,.75].forEach(y=>{ ctx.beginPath();ctx.moveTo(0,y*H);ctx.lineTo(W,y*H);ctx.stroke(); });
    [[60,'rgba(34,197,94,.35)','60'],[30,'rgba(245,158,11,.35)','30']].forEach(([v,c,l])=>{
      const y=zy(v); ctx.strokeStyle=c; ctx.lineWidth=.8; ctx.setLineDash([4,4]);
      ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle=c; ctx.font=`${10*dpr}px Poppins,sans-serif`; ctx.fillText(l+' cm',6,y-4);
    });
    const g=ctx.createLinearGradient(0,0,0,H);
    g.addColorStop(0,'rgba(56,189,248,.2)'); g.addColorStop(1,'rgba(56,189,248,0)');
    const step=W/(MAX-1);
    ctx.beginPath();
    hist.forEach((v,i)=>{ i===0?ctx.moveTo(0,zy(v)):ctx.lineTo(i*step,zy(v)); });
    ctx.lineTo((hist.length-1)*step,H);ctx.lineTo(0,H);ctx.closePath();ctx.fillStyle=g;ctx.fill();
    ctx.beginPath();
    hist.forEach((v,i)=>{
      const x=i*step,y=zy(v);
      if(i===0){ctx.moveTo(x,y);return;}
      const px=(i-1)*step,py=zy(hist[i-1]);
      ctx.bezierCurveTo(px+step*.5,py,x-step*.5,y,x,y);
    });
    const last=hist[hist.length-1];
    ctx.strokeStyle=last>=60?'#22c55e':last>=30?'#f59e0b':'#ef4444';
    ctx.lineWidth=2*dpr;ctx.lineJoin='round';ctx.lineCap='round';ctx.stroke();
    const lx=(hist.length-1)*step,ly=zy(last);
    ctx.beginPath();ctx.arc(lx,ly,4*dpr,0,Math.PI*2);
    ctx.fillStyle=last>=60?'#22c55e':last>=30?'#f59e0b':'#ef4444';ctx.fill();
    ctx.strokeStyle='rgba(255,255,255,.6)';ctx.lineWidth=1.5*dpr;ctx.stroke();
  }

  function update(raw){
    const d=parseInt(raw,10), pct=((d-5)/95)*100;
    const z=d>=60?Z.safe:d>=30?Z.warning:Z.danger;
    distVal.textContent=d; distVal.className='value '+z.c;
    statusBox.textContent=z.label; statusBox.className='status-box '+z.c;
    sensorMsg.textContent=z.msg;
    const vp=Math.max(0,Math.min(100,100-pct));
    vibLevel.style.width=vp+'%';
    vibLevel.style.background=z.c==='safe'?'linear-gradient(90deg,#22c55e,#38bdf8)':z.c==='warning'?'linear-gradient(90deg,#f59e0b,#ef4444)':'linear-gradient(90deg,#ef4444,#dc2626)';
    const active=Math.round((vp/100)*vDots.length);
    vDots.forEach((dd,i)=>{ dd.className='vdot'; if(i<active) dd.classList.add('active-'+z.c); });
    if(stick){ stick.className='stick-icon'; if(z.c==='warning')stick.classList.add('vibrating'); if(z.c==='danger')stick.classList.add('vibrating-strong'); }
    if(obs){ obs.style.right=(10-(pct/100)*50)+'%'; obs.style.filter=z.c==='danger'?'drop-shadow(0 0 14px rgba(239,68,68,.9))':z.c==='warning'?'drop-shadow(0 0 10px rgba(245,158,11,.7))':'drop-shadow(0 0 4px rgba(56,189,248,.2))'; }
    if(distLine&&distLabel){
      const sc=document.querySelector('.simulation-scene');
      if(sc){ const W=sc.offsetWidth,sl=W*.12+50,ol=W-(W*(10+(pct/100)*50)/100)-20,lw=Math.max(0,ol-sl);
        distLine.style.left=sl+'px';distLine.style.width=lw+'px';
        distLine.style.borderColor=z.c==='safe'?'rgba(34,197,94,.3)':z.c==='warning'?'rgba(245,158,11,.3)':'rgba(239,68,68,.4)';
        distLabel.style.left=(sl+lw/2)+'px';distLabel.style.transform='translateX(-50%)';distLabel.textContent=d+' cm'; }
    }
    const dur=z.c==='safe'?'2s':z.c==='warning'?'1.1s':'0.55s';
    waves.forEach(w=>w.style.animationDuration=dur);
    hist.push(d); if(hist.length>MAX)hist.shift(); drawHist();
  }

  slider.addEventListener('input',()=>update(slider.value));

  let autoMode=false,autoDir=-1,autoVal=100,autoTimer=null;
  function runDemo(){ autoVal+=autoDir*.8; if(autoVal<=5){autoVal=5;autoDir=1;} if(autoVal>=100){autoVal=100;autoDir=-1;} slider.value=autoVal;update(autoVal); }

  const autoBtn=document.getElementById('autoBtn');
  if(autoBtn) autoBtn.addEventListener('click',()=>{
    autoMode=!autoMode;
    if(autoMode){ autoBtn.textContent='⏹ Detener demo'; autoBtn.classList.replace('btn-primary','btn-secondary'); autoTimer=setInterval(runDemo,30); }
    else{ clearInterval(autoTimer); autoBtn.textContent='▶ Demo automática'; autoBtn.classList.replace('btn-secondary','btn-primary'); }
  });

  const resetBtn=document.getElementById('resetBtn');
  if(resetBtn) resetBtn.addEventListener('click',()=>{
    if(autoMode){ clearInterval(autoTimer);autoMode=false; if(autoBtn){autoBtn.textContent='▶ Demo automática';autoBtn.classList.replace('btn-secondary','btn-primary');} }
    slider.value=100;update(100);
  });

  update(slider.value);
});
