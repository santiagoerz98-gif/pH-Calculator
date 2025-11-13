const kaInput = document.getElementById("kaInput");
const concentrationInput = document.getElementById("concentrationInput");
const calculateButton = document.getElementById("myButton");
const resultTextbox = document.getElementById("resultTextbox");
const calculateFrom = document.getElementById("calculateFromInput");
const kaLabel = document.getElementById("kaLabel");
const concentrationLabel = document.getElementById("concentrationLabel");
const kaErrorMsg = document.getElementById("kaErrorMsg");
const concErrorMsg = document.getElementById("concErrorMsg");

calculateFrom.addEventListener("change",()=>{

    kaInput.classList.add("hidden");
    kaLabel.classList.add("hidden");
    concentrationInput.classList.add('hidden');
    concentrationLabel.classList.add('hidden');
    concErrorMsg.classList.add("hidden");
    kaErrorMsg.classList.add("hidden");
    kaInput.style.borderColor = "gray";
    concentrationInput.style.borderColor = "gray";
    resultTextbox.value = "";

    if (calculateFrom.value === "weakAcid"){
        kaInput.classList.remove("hidden");
        kaLabel.classList.remove("hidden");
        concentrationInput.classList.remove("hidden");
        concentrationLabel.classList.remove('hidden');
    }
    else if (calculateFrom.value === "strongAcid" || calculateFrom.value === "strongBase"){
        concentrationInput.classList.remove("hidden");
        concentrationLabel.classList.remove('hidden');
    }
});


function calculate(){
    kaInput.style.borderColor = "gray";
    concentrationInput.style.borderColor ="gray";
    kaErrorMsg.classList.add("hidden");
    concErrorMsg.classList.add("hidden");
    let isValid = true

    if (calculateFrom.value === "weakAcid"){
        let ka = Number(kaInput.value);
        let conc = Number(concentrationInput.value);
        if (!ka || typeof(ka) !== "number" || ka < 0){
            kaInput.style.borderColor ="red";
            kaErrorMsg.classList.remove("hidden");
            isValid = false;
        }
        if(!conc || typeof(conc) !== "number" || conc < 0){
            concentrationInput.style.borderColor = "red";
            concErrorMsg.classList.remove("hidden");
            isValid = false;
        }
        let pH = waekAcidpH(ka,conc);
    }
    else if (calculateFrom.value === "strongAcid"){
        let conc = Number(concentrationInput.value);
        if(!conc || typeof(conc) !== "number" || conc < 0){
            concentrationInput.style.borderColor = "red";
            concErrorMsg.classList.remove("hidden");
            isValid = false
        }
        let pH = strongAcidpH(conc);
    } 
    else if(calculateFrom.value === "strongBase"){
        let conc = Number(concentrationInput.value);
        if(!conc || typeof(conc) !== "number" || conc < 0){
            concentrationInput.style.borderColor = "red";
            concErrorMsg.classList.remove("hidden");
            isValid = false
        }
        let pH = strongBasepH(conc);
    }
    if (isValid){
        resultTextbox.value = pH;
    }
};



function waekAcidpH(ka,conc){
    x = (Math.sqrt(ka*conc));
    pH = (-Math.log10(x)).toFixed(2);
    return pH;
};

function strongAcidpH(conc){
    pH = -Math.log10(conc).toFixed(2);
    return pH;
};

function strongBasepH(conc){
    pOH = -Math.log10(conc);
    pH = (14 - pOH).toFixed(2);
    return pH;
};

