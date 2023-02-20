//Your JavaScript goes in here
function rshift(){
    document.getElementById("capacitor").style.transitionDuration = "2s";
    document.getElementById("capacitor").style.transform="translate(77px, 7px)";
    // document.getElementById("capacitor").style.transform="translateY(7px)";
    document.getElementById("line").style.display = "none";
}
function lshift(){
    document.getElementById("capacitor").style.transitionDuration = "2s";
    document.getElementById("capacitor").style.transform="translateX(-1px)";
    // document.getElementById("capacitor").style.transform="translateY(7px)";
    document.getElementById("line").style.display = "block";
}

const image = document.querySelector("#switch1");
const rotateBtn = document.querySelector("#switch1btn");
const textBtn = document.querySelector("#switch1text");

let rotation = 0;
let on = 0;


 function switchonoff() {
  if(on==0){
   rotation = 35;
   //   image.style.transform=`translate(0,10)`;


   image.style.transform = `rotate(${rotation}deg)`;
   image.style.transformOrigin = "221.8px 125.2px";

  
   document.getElementById("switch1btn").style.fill = "green";
   document.getElementById("switch1text").innerHTML =  "Off";
   
  on =1;


  }
  else if(on==1){
    rotateBtn.style.fill="red";
    image.style.transform = `rotate(${-rotation}deg)`;
   document.getElementById("switch1text").innerHTML =  "On";
   on =0;
  }
 

}
