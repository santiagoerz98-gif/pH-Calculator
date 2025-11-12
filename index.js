const kaInput = document.getElementById("kaInput");
const concentrationInput = document.getElementById("concentrationInput");
const calculateButton = document.getElementById("myButton");
const resultTextbox = document.getElementById("resultTextbox");
const calculateFrom = document.getElementById("calculateFromInput");
const kaLabel = document.getElementById("kaLabel");
const concentrationLabel = document.getElementById("concentrationLabel");

calculateFrom.addEventListener("change",()=>{

    kaInput.classList.add("hidden");
    kaLabel.classList.add("hidden");
    concentrationInput.classList.add('hidden');
    concentrationLabel.classList.add('hidden');

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
    let pH = 0;
    let ka =0;
    let conc = 0 
    if (calculateFrom.value === "weakAcid"){
        ka = Number(kaInput.value);
        conc = Number(concentrationInput.value);
        pH = waekAcidpH(ka,conc);
    }
    else if (calculateFrom.value === "strongAcid"){
        conc = Number(concentrationInput.value);
        pH = strongAcidpH(conc);
    } 
    else if(calculateFrom.value === "strongBase"){
        conc = Number(concentrationInput.value);
        pH = strongBasepH(conc);
    }
    resultTextbox.value=pH
}



function waekAcidpH(ka,conc){
    x = (Math.sqrt(ka*conc))
    pH = (-Math.log10(x)).toFixed(2);
    return pH;
}

function strongAcidpH(conc){
    pH = -Math.log10(conc).toFixed(2);
    return pH
}

function strongBasepH(conc){
    pOH = -Math.log10(conc);
    pH = (14 - pOH).toFixed(2);
    return pH
}
console.log(strongAcidpH(1));

