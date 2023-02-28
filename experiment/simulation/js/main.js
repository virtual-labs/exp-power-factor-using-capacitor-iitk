let voltage1 = 0;
let capa = 0;
let capais = false;
let r1 = 0;
// let r2 = 0;
let flow = 0;
let ig = 0;
let curr = 0;
let rotation = 0;
let on = 0;
let power = 0;
function getVoltage() {

    voltage1 = document.getElementById("voltage1").value;
    document.getElementById("voltage-1-display").innerText = voltage1;
    document.getElementById("volt").innerHTML = voltage1 + " V";
    
    if(on == 1  && r1!=0 && capais==false)
  {    answer();
       flow = 1;
  }
   else if(on == 1 && r1!=0 && capais == true && capa!=0)
    {
        answerwithcapa();
    }
    else if(r1 == 0)
    alert("Kindly choose the value of Resistance");
    
    else if( on ==0 && r1!=0)
    alert("Kindly On the switch");


}
function Capacitor() {

    capa = document.getElementById("capacitors").value;
    document.getElementById("voltage-2-display").innerText = capa;
    document.getElementById("capacitor-val").innerHTML = capa + "μF";

}
function getResistance(id) {


    r1 = document.getElementById(id).value;
    document.getElementById("r-1-display").innerText = r1;

    document.getElementById("r1-svg-display").innerHTML = r1 + " Ω";
    // document.getElementById("r1-svg-display").innerHTML = r1;
    getVoltage();
}
let table1 = document.getElementById("table")
let count1 = 0;
const procedure = () => {

    if(voltage1 != 0 && r1 !=0  && curr!=0 && power!=0 && capais == false && capa!=0)

   { table1.innerHTML += `<tr>
                <td id='r${count1}c0' width=100px></td>
                <td id='r${count1}c1' width=100px></td>
                <td id='r${count1}c2' width=100px></td>
                <td id='r${count1}c3' width=100px></td>
                <td id='r${count1}c4' width=100px></td>


  </tr>`
    var data = new Array();
    data.push(voltage1);
    data.push(r1);
    data.push("NULL");
    data.push(curr);
    data.push(power);
    for (i = 0; i < data.length; i++) {
        document.getElementById("r" + count1 + "c" + i).innerHTML = data[i];
    }
    count1++;
}
else if(voltage1 != 0 && r1 !=0  && curr!=0 && power!=0 && capais == true && capa!=0){
       
    table1.innerHTML += `<tr>
    <td id='r${count1}c0' width=100px></td>
    <td id='r${count1}c1' width=100px></td>
    <td id='r${count1}c2' width=100px></td>
    <td id='r${count1}c3' width=100px></td>
    <td id='r${count1}c4' width=100px></td>

</tr>`
var data = new Array();
data.push(voltage1);
data.push(r1);
data.push(capa);
data.push(curr);
data.push(power);
for (i = 0; i < data.length; i++) {
document.getElementById("r" + count1 + "c" + i).innerHTML = data[i];
}
count1++;

}
else
 alert("Please complete the prerequisite");
}


function rshift() {
    document.getElementById("capacitor").style.transitionDuration = "2s";
    document.getElementById("capacitor").style.transform = "translate(148px, 11px)";
    // document.getElementById("capacitor").style.transform="translateY(7px)";
    document.getElementById("line").style.display = "none";
    capais = true;
    answerwithcapa();

}
function lshift() {
    document.getElementById("capacitor").style.transitionDuration = "2s";
    document.getElementById("capacitor").style.transform = "translateX(-1px)";
    // document.getElementById("capacitor").style.transform="translateY(7px)";
    document.getElementById("line").style.display = "block";
    capais = false;
}

const image = document.querySelector("#switch1");
const rotateBtn = document.querySelector("#switch1btn");
const textBtn = document.querySelector("#switch1text");

function switchonoff() {
    if (on == 0) {
        rotation = 35;
        //   image.style.transform=`translate(0,10)`;


        image.style.transform = `rotate(${rotation}deg)`;
        image.style.transformOrigin = "221.8px 125.2px";


        document.getElementById("switch1btn").style.fill = "green";
        document.getElementById("switch1text").innerHTML = "Off";

        on = 1;
        getVoltage() ;


    }
    else if (on == 1) {
        rotateBtn.style.fill = "red";
        image.style.transform = `rotate(${-rotation}deg)`;
        document.getElementById("switch1text").innerHTML = "On";
        on = 0;
    }


}

function answer(){

         let Z  = 8873.64+(r1*r1);
         Z = Math.sqrt(Z);
         curr = voltage1/Z;
         curr = curr.toFixed(3);
         document.getElementById("current").innerHTML = curr;
         let pf = r1/Z;
         power = pf * voltage1 * curr;
         power = power.toFixed(3);
         document.getElementById("power").innerHTML = power;

}

function answerwithcapa(){

    let cz = 0;
    let w = 2*3.14*50;
    let wlc = (w*0.3)-(1/(w*capa));
    wlc = wlc*wlc; 
    cz  = Math.sqrt((r1*r1)+wlc);
    curr = voltage1/cz;
    power = voltage1 * curr * (r1/cz);
    power = power.toFixed(3);
    document.getElementById("current").innerHTML = curr;
    document.getElementById("power").innerHTML = power;
}
