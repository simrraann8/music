window.addEventListener("load",() => {
  const sounds= document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#FFCFDF",
    "#F9ED69",
    "#7895B2",
    "#9E7676",
    "#91C788"
  ];

  pads.forEach((pad,index) => {
    pad.addEventListener('click',function(){
        sounds[index].currentTime = 0;
        sounds[index].play();
        createBubbles(index);
        setTimeout(()=>{
            sounds[index].pause();
            sounds[index].currentTime = 0;
        },4000);
    });
  });
  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener('animationend',function(){
        visual.removeChild(this);
    });
   };

});

