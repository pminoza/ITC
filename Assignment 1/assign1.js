document.addEventListener("DOMContentLoaded", () => {
    const fahrToCels = document.getElementById("fartocel");
    const celsToFar = document.getElementById("celtofar");
    const meterToFeet = document.getElementById("metertofeet");
    const feetToMeter = document.getElementById("feettometer");


    fahrToCels.addEventListener("keyup", (event) => {
        let fartocel = document.getElementById("fartocel").value;
        let feedback = document.getElementById("feedback1");
        let celoutput = document.getElementById("celresult");

        if(fartocel==="")
        {
            feedback.innerText= "";
            celoutput.value= "";
        }else{
            let celresult = (parseFloat(fartocel)- 32) * 5 / 9;
            feedback.innerText = `The celsius value is ${celresult.toFixed(2)} °C`;
            celoutput.value = celresult.toFixed(2);
        }
    })

    celsToFar.addEventListener("keyup", (event) => {
        let celtofar = document.getElementById("celtofar").value;
        let feedback = document.getElementById("feedback2");
        let faroutput = document.getElementById("farresult");

        if(celtofar==="")
            {
                feedback.innerText= "";
                faroutput.value= "";
            }else{
                let farresult = (parseFloat(celtofar) - 9 / 5) + 32;
                feedback.innerText = `The fahrenheit vaue is ${farresult.toFixed(2)} °F`;
                faroutput.value = farresult.toFixed(2);
            }
    })

    meterToFeet.addEventListener("keyup", (event) => {
        let metertofeet = document.getElementById("metertofeet").value;
        let feedback = document.getElementById("feedback3");
        let feetoutput= document.getElementById("feetresult");

        if(metertofeet==="")
            {
                feedback.innerText= "";
                feetoutput.value= "";
            }else{
                let feetresult = metertofeet * 3.28084;
                feedback.innerText = `The value in feet is ${feetresult.toFixed(2)} ft`;
                feetoutput.value = feetresult.toFixed(2);
            }
         
    })

    feetToMeter.addEventListener("keyup", (event) => {
        let feettometer = document.getElementById("feettometer").value;
        let feedback = document.getElementById("feedback4");
        let meteroutput = document.getElementById("meterresult");

        if( feettometer==="")
            {
                feedback.innerText= "";
                meteroutput.value= "";
            }else{
                let meterresult = feettometer * 0.3048;
                feedback.innerText = `The value in meter is ${meterresult.toFixed(2)} meters`;
                meteroutput.value = meterresult.toFixed(2);
            }

    })


})