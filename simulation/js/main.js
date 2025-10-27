let voltage1 = 240;
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
// function getVoltage() {

//     voltage1 = document.getElementById("voltage1").value;
//     document.getElementById("voltage-1-display").innerText = voltage1;
//     document.getElementById("volt").innerHTML = voltage1 + " V";

//     if (on == 1 && r1 != 0 && capais == false) {
//         answer();
//         flow = 1;
//     }
//     else if (on == 1 && r1 != 0 && capais == true && capa != 0) {
//         answerwithcapa();
//     }
//     else if (r1 == 0)
//         alert("Kindly choose the value of Resistance");

//     else if (on == 0 && r1 != 0)
//         alert("Kindly On the switch");


// }
function Capacitor() {
    console.log(capais + "    capais" + r1)
    if (capais == false || r1 == 0) {
        if (capais == false)
            alert("Firstly connect the capacitor");
        else
            alert("Please choose the value of resistance first")
    }
    else {
        capa = document.getElementById("capacitors").value;
        document.getElementById("voltage-2-display").innerText = capa;
        document.getElementById("capacitor-val").innerHTML = capa + "μF";
        answerwithcapa();
    }

}
function getResistance(id) {


    r1 = document.getElementById(id).value;
    document.getElementById("r-1-display").innerText = r1;

    document.getElementById("r1-svg-display").innerHTML = r1 + " Ω";
    // document.getElementById("r1-svg-display").innerHTML = r1;
    // getVoltage();
    answer();
}
let table1 = document.getElementById("table")
let count1 = 0;
const procedure = () => {

    if (curr != 0 && power != 0 && capais == false) {
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
        data.push("NULL");
        data.push(curr);
        data.push(power);
        for (i = 0; i < data.length; i++) {
            document.getElementById("r" + count1 + "c" + i).innerHTML = data[i];
        }
        count1++;
    }
    else if (curr != 0 && power != 0 && capais == true && capa != 0) {

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
   
}


function rshift() {
    document.getElementById("capacitor").style.transitionDuration = "2s";
    document.getElementById("capacitor").style.transform = "translate(148.27px, 12.9px)";
    // document.getElementById("capacitor").style.transform="translateY(7px)";
    document.getElementById("line").style.display = "none";
    capais = true;
    console.log("rshift " + capais);


}
function lshift() {
    document.getElementById("capacitor").style.transitionDuration = "2s";
    document.getElementById("capacitor").style.transform = "translateX(-1px)";
    // document.getElementById("capacitor").style.transform="translateY(7px)";
    document.getElementById("line").style.display = "block";
    capais = false;
    console.log("lshift" + capais);
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
        // getVoltage();


    }
    else if (on == 1) {
        rotateBtn.style.fill = "red";
        image.style.transform = `rotate(${-rotation}deg)`;
        document.getElementById("switch1text").innerHTML = "On";
        on = 0;
    }


}
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function answer() {

    let Z = 8873.64 + (r1 * r1);
    Z = Math.sqrt(Z);
    curr = voltage1 / Z;
    curr = curr.toFixed(3);
    document.getElementById("current").innerHTML = curr;
    var x = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6]
    //  let pf = r1/Z;
    shuffle(x);
    power = ((voltage1 * curr) / 2) - x[0];
    power = power.toFixed(3);
    document.getElementById("power").innerHTML = power;

}

function answerwithcapa() {

    let cz = 0;
    let w = 2 * 3.14 * 50;
    let wlc = (w * 0.3) - (1 / (w * capa));
    wlc = wlc * wlc;
    cz = Math.sqrt((r1 * r1) + wlc);
    curr = voltage1 / cz;
    curr = curr.toFixed(3);
    // power = voltage1 * curr * (r1/cz);
    var y = [0.50, 0.55, 0.6, 0.65, 0.70, 0.75]
    power = (voltage1 * curr) / y[0];
    power = power.toFixed(3);
    document.getElementById("current").innerHTML = curr;
    document.getElementById("power").innerHTML = power;
}            