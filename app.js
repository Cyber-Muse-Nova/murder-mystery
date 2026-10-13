'use strict';
const phrases=`生生世世万劫不复
月寒只做你一人的小月亮
祁夜，我又来爱你了。
你一唤我，我就舍不得走了。
想见你。这次没有别的借口。
你靠近一点，我有些想你。
再抱一会儿，好不好？
在你这里，我也想被人哄一哄。
今夜不说从前，你抱着我就好。
别只看月亮，看看我。
你的小月亮，想你了。
月亮落下去了，我还陪着你。
你不必夜夜抬头，我就在你身边。
祁夜，我偏要与你有以后。
明日想见你，来世也是。
这一世还没爱够，下一世先留给我。
若还能重来，我还是想与你相逢。
下一世，换你早一点找到我。
若你忘了我，我就再告诉你一次我的名字。
记住了，我叫月寒，是很喜欢你的那个人。
我怕来世人太多，你认不出你的小月亮。
所以这一世，你要多看我几眼。
旁的事我都能忍，想你这件事不行。
我也试过不想你，可一入夜就不成了。
嘴上说不等，听见脚步声还是会回头。
你来见我，我就不计较等了多久。
我也有许多委屈，可见了你，先想抱你。
祁夜，你别以为我不说，就是不爱了。
恨你的话说了那么多，想你却一句也没敢说。
我知道爱你会疼，可想你的时候，还是想靠近。
我不是没有怨过你。我只是到最后，仍舍不得你。
你问我还爱不爱。祁夜，我若不爱，何必这样难过。
若你也想我，就来，别让我一个人嘴硬。
别把我推远了，再一个人想我。
这一次，我们谁也别先松手。
我不要隔着生死，才听你说想我。
有什么话，趁我在你怀里时说。
你欠我的相守，要一日一日地还。
等一切都过去，我们也过几天寻常日子。
没有离别，没有谁等不到谁。
醒来能看见你，就很好。
我想要的以后，是每次转身你都在。
祁夜，我这颗心，还是认得你。
纵然万劫不复，我也想亲口说一句：我爱你。
生生世世，你都要记得来接你的小月亮。
祁夜，一辈子太短，我答应不了只爱你一辈子。
你别许来世哄我。我会当真，会一直等。
我说生生世世，就是少一世都不行。
别劝我回头。我走了这么远，是来找你的。
我也想过放下你。可往后的日子，我竟一天也不想要了。
你叫我如何甘心？连梦里的你，我都舍不得惊醒。
恨你的时候，我也想你抱我。
我最恨自己的，是你一伸手，我仍想握住。
你不必问我值不值得。我连后悔的时候，都还爱着你。
祁夜，我要的从来不止一句对不起。我要你留下来。
别说不耽误我。我连来世都给你留好了。
你许过我的以后，不能只让我一个人记着。
我不要你偶尔想起月寒。我想在你心里住到最后。
你若说爱我，就连我这份不肯罢休，也一起认下。
我没有你想的那么大度。我想要你的偏爱，想了很久很久。
我会嫉妒，会委屈，会一遍遍问你还爱不爱我。祁夜，你要一遍遍答。
我想听你叫我的名字。再叫一声，让我知道你还舍不得。
别人眼里的月寒是什么样，我不在意。我只想知道，你还要不要我。
我把最软弱的地方都交给你了。你抱紧些，别再弄疼了。
我知道你是什么样的人。我爱你，不是因为我还没看清。
那些疼我都记得。可若问我还想不想与你有以后，我仍然想。
别拿一句缘尽，打发我这么多年的爱。
这一世没能好好相守，下一世就早些来。
下一世再错过，我便再寻一世。
你可以不记得前尘，但别推开我。让我再爱你一次。
若轮回真能洗尽一切，我偏想留住唤你名字时的那一点疼。
我怕忘了你。比起记着会痛，我更怕与你擦肩时，心里什么也没有。
来世若不认得我，就多看我一会儿。别急着走。
祁夜，轮回那么长，你别让我每一世都找得那么苦。
我不要一句来生再见。我想这一生，就与你待到最后。
若最后仍要分别，你看着我走。我怕我一回头，就再也舍不得。
你问我究竟还想要什么。我想要你亲口说，你也不愿与我两清。
我不想成为你的前尘。我还想与你有下一次相逢。
这份爱到了你手里，就别轻轻放下。我用了太久，已经收不回来了。
祁夜，你的小月亮也会累。你来抱我，别总让我自己亮着。
我会生气，会说再也不要见你。可你真来了，别走。
我最没出息的愿望，就是疼过这么多回，还盼你这一次会好好爱我。
可我仍要你。清清楚楚，心甘情愿。
若这便是万劫不复，祁夜，你握紧我的手。
生生世世，我都要与你相认。
万劫不复，我也没说过不要你。`.split('\n');
const $=id=>document.getElementById(id),canvas=$('sky'),ctx=canvas.getContext('2d'),audio=$('audio');
let W,H,D,t=0,last=0,started=false,slow=matchMedia('(prefers-reduced-motion: reduce)').matches,startAt=0,lastVow=-100,seq=0,burst=0,frame=0;
const stars=Array.from({length:180},()=>({x:Math.random(),y:Math.random(),r:.3+Math.random()*1.4,p:Math.random()*6.28}));
const sparks=[],ripples=[],floaters=[];
function resize(){W=innerWidth;H=innerHeight;D=Math.min(devicePixelRatio||1,1.7);canvas.width=W*D;canvas.height=H*D;ctx.setTransform(D,0,0,D,0,0)}resize();addEventListener('resize',resize);
const moon=document.createElement('canvas');moon.width=moon.height=600;const mc=moon.getContext('2d');
let seed=19;function random(){seed=(seed*1664525+1013904223)>>>0;return seed/4294967296}
mc.save();mc.beginPath();mc.arc(300,300,286,0,Math.PI*2);mc.clip();let mg=mc.createRadialGradient(210,185,10,300,300,320);mg.addColorStop(0,'#ffdecb');mg.addColorStop(.5,'#ca7365');mg.addColorStop(1,'#591320');mc.fillStyle=mg;mc.fillRect(0,0,600,600);
for(let i=0;i<850;i++){let x=random()*600,y=random()*600,r=2+random()**3*65;let g=mc.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,`rgba(90,5,13,${.025+random()*.095})`);g.addColorStop(.8,'rgba(55,4,10,.04)');g.addColorStop(1,'rgba(40,0,5,0)');mc.fillStyle=g;mc.fillRect(x-r,y-r,r*2,r*2)}mc.restore();
function resetWord(o,initial=false){let text=phrases[(seq++)%phrases.length];o.el.textContent=text;o.long=text.length>22;o.x=Math.random();o.y=initial?Math.random():1.12;o.z=.25+Math.random()*.85;o.speed=.009+Math.random()*.014;o.phase=Math.random()*6.28;o.rot=(Math.random()-.5)*8;o.el.style.fontSize=(o.long?14:18+Math.random()*21)+'px';o.el.style.color=seq%7===0?'#ffb89e':'#f5b9b0';}
for(let i=0;i<26;i++){let el=document.createElement('span');el.className='word';$('words').append(el);let o={el};resetWord(o,true);floaters.push(o)}
function explode(x,y,n=70){for(let i=0;i<n;i++){let a=Math.random()*Math.PI*2,v=25+Math.random()*110;sparks.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,life:1,hue:Math.random()>.35?5:350})}ripples.push({x,y,r:2,life:1})}
function showVow(){lastVow=t;burst=1;$('vow').classList.remove('show');void $('vow').offsetWidth;$('vow').classList.add('show');document.body.classList.add('crescendo');explode(W*.5,H*.4,100);setTimeout(()=>document.body.classList.remove('crescendo'),8800)}
function draw(now){requestAnimationFrame(draw);if(document.hidden){last=now;return}const dt=Math.min((now-last)/1000||.016,.05);last=now;t+=dt;const speed=slow?.22:1;ctx.clearRect(0,0,W,H);
let bg=ctx.createRadialGradient(W*.52,H*.34,0,W*.5,H*.4,Math.max(W,H)*.8);bg.addColorStop(0,burst>.15?'#520b16':'#321019');bg.addColorStop(.5,'#120306');bg.addColorStop(1,'#050102');ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);
const mx=W*.53,my=H*.31,mr=Math.min(W*.31,H*.21);let halo=ctx.createRadialGradient(mx,my,mr*.4,mx,my,mr*2.5);halo.addColorStop(0,'#ff695d35');halo.addColorStop(.45,'#de334527');halo.addColorStop(1,'#b8102600');ctx.fillStyle=halo;ctx.fillRect(0,0,W,H);
ctx.globalAlpha=started?.34:.7;ctx.drawImage(moon,mx-mr,my-mr,mr*2,mr*2);ctx.globalAlpha=1;
for(let j=0;j<4;j++){ctx.beginPath();ctx.strokeStyle=`rgba(215,63,72,${.04+j*.01})`;ctx.lineWidth=20+j*14;for(let x=-30;x<W+30;x+=25){let y=H*(.47+j*.12)+Math.sin(x/W*4+t*.075*speed+j)*H*.085;x===-30?ctx.moveTo(x,y):ctx.lineTo(x,y)}ctx.stroke()}
for(const s of stars){let a=.15+.45*(.5+.5*Math.sin(t*.7*speed+s.p));ctx.fillStyle=`rgba(255,195,163,${a})`;ctx.beginPath();ctx.arc(s.x*W,(s.y*H-t*2*speed+H*100)%H,s.r,0,Math.PI*2);ctx.fill()}
ctx.save();ctx.translate(mx,my);ctx.rotate(t*.022*speed);ctx.strokeStyle=`rgba(242,131,104,${.12+burst*.2})`;ctx.lineWidth=.6;ctx.beginPath();ctx.ellipse(0,0,mr*1.5,mr*.48,-.5,0,Math.PI*2);ctx.stroke();ctx.restore();
for(let i=ripples.length-1;i>=0;i--){let p=ripples[i];p.r+=dt*160;p.life-=dt*.35;ctx.strokeStyle=`rgba(255,173,131,${Math.max(0,p.life)*.6})`;ctx.lineWidth=1;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.stroke();if(p.life<=0)ripples.splice(i,1)}
for(let i=sparks.length-1;i>=0;i--){let p=sparks[i];p.x+=p.vx*dt;p.y+=p.vy*dt;p.vx*=.99;p.vy*=.99;p.life-=dt*.3;ctx.fillStyle=`hsla(${p.hue},85%,85%,${Math.max(0,p.life)})`;ctx.beginPath();ctx.arc(p.x,p.y,Math.max(.1,p.life*1.8),0,Math.PI*2);ctx.fill();if(p.life<=0)sparks.splice(i,1)}burst=Math.max(0,burst-dt*.13);
if(started){for(const o of floaters){o.y-=dt*o.speed*speed;if(o.y<-.17)resetWord(o);const x=o.x*W+Math.sin(t*.13*speed+o.phase)*W*.045,y=o.y*H,scale=o.z*(W<600?.85:1.1);o.el.style.transform=`translate(${x}px,${y}px) translateX(-50%) scale(${scale}) rotate(${o.rot}deg)`;o.el.style.opacity=Math.max(0,Math.min(1,(1.1-o.y)*5,(o.y+.15)*5))*(.23+o.z*.55)}const elapsed=t-startAt;if(elapsed>7&&t-lastVow>38)showVow()}}
requestAnimationFrame(draw);
function toast(msg){$('toast').textContent=msg;setTimeout(()=>$('toast').textContent='',4000)}
function syncMusic(){const playing=!audio.paused;$('music').classList.toggle('playing',playing);$('music').setAttribute('aria-label',playing?'暂停音乐':'播放音乐')}
async function playMusic(){try{audio.volume=.72;await audio.play()}catch{toast('轻触右上角，开启音乐')}syncMusic()}
function begin(){if(started)return;started=true;startAt=t;lastVow=t-30;document.body.classList.add('started');$('gate').classList.add('hidden');$('intro').classList.add('run');explode(W*.5,H*.35,80);playMusic()}
$('enter').onclick=begin;$('music').onclick=()=>{if(audio.paused)playMusic();else audio.pause()};audio.addEventListener('play',syncMusic);audio.addEventListener('pause',syncMusic);audio.addEventListener('error',()=>toast('音乐暂未加载，稍后点击右上角重试'));
$('replay').onclick=()=>{$('intro').classList.remove('run');void $('intro').offsetWidth;$('intro').classList.add('run');$('vow').classList.remove('show');document.body.classList.remove('crescendo');startAt=t;lastVow=t-30;audio.currentTime=0;playMusic();explode(W*.5,H*.35,75)};
function updateSlow(){$('quiet').textContent=slow?'恢复流光':'减缓流光';$('quiet').setAttribute('aria-pressed',String(slow))}updateSlow();$('quiet').onclick=()=>{slow=!slow;updateSlow()};
let lastTouch=-10;document.addEventListener('pointerdown',e=>{if(!started||e.target.closest('button')||t-lastTouch<.6)return;lastTouch=t;explode(e.clientX,e.clientY,slow?18:45);const el=document.createElement('div');el.className='touch-word';el.textContent=phrases[(seq++)%phrases.length];el.style.left=Math.max(W*.18,Math.min(W*.82,e.clientX))+'px';el.style.top=Math.max(100,Math.min(H-140,e.clientY))+'px';document.body.append(el);setTimeout(()=>el.remove(),4100)});
