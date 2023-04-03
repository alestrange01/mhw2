/* TODO: inserite il codice JavaScript necessario a completare il MHW! */
const conteggio = {"egocentrico": 0, "empatico": 0, "aperto":0, "nostalgico":0,"creativo":0,
    "ambizioso":0, "malevolo":0, "bridgespammer":0, "ingenuo":0};

// const freeBoxes = [];
let taken = {};

function seleziona(event){
    const blocco = event.currentTarget;
    
    const blocchi = blocco.parentNode.querySelectorAll(".choice-grid div");
    for (const div of blocchi) {
        if(div !== blocco) uncheck(div);
        else check(div);
    }
    taken[blocco.dataset.questionId] = blocco.dataset.choiceId;
    console.log(taken);

    if(fine()){
        removeListenersAndDisplayResult();
    }
}

function uncheck(div){
    div.classList.add("uncheckedbackground");
    div.classList.remove("checkedbackground")
    const unchecked = div.querySelector(".checkbox");
    unchecked.src = 'images/unchecked.png';
}
function check(div){
    div.classList.remove("uncheckedbackground")
    div.classList.add("checkedbackground");
    const checked = div.querySelector(".checkbox");
    checked.src = 'images/checked.png';
}

function fine(){
    return Object.keys(taken).length === 3;
}

function removeListenersAndDisplayResult(){
    const blocchi = document.querySelectorAll("section div");
        for (const blocco of blocchi) {
            blocco.removeEventListener("click", seleziona);
        }
    const result = document.querySelector("#risultato");
    result.classList.remove("hidden");

    const winner = getWinner()
    console.log(winner);
    const titolo = document.querySelector("#risultato h1");
    titolo.textContent = RESULTS_MAP[winner].title;
    const testo = document.querySelector("#risultato p");
    testo.textContent = RESULTS_MAP[winner].contents;
}

function getWinner(){
    for (const key in taken) {
        if (Object.hasOwnProperty.call(taken, key)) {
            const scelta = taken[key];
            conteggio[scelta] = conteggio[scelta] + 1;
        }
    }

    // let maxKey = null;
    // let maxValue = -1;
    // for (let [key, value] of Object.entries(conteggio)) {
    //     if (value > maxValue) {
    //         maxKey = key;
    //         maxValue = value;
    //     }
    // }

    let maxKey = null;
    let maxValue = -1; 
    for (const key in conteggio) {
            if(conteggio[key] > maxValue){
                maxKey = key;
                maxValue = conteggio[key];
            }
    }
    if(maxValue ===1) return taken["one"];
    else return maxKey;
}

function restore(){
    //resetto il conteggio
    taken = {};
    for (const key in conteggio) {
        if (Object.hasOwnProperty.call(conteggio, key)) {
            conteggio[key] = 0; 
        }
    }
    //gestisco gli handler e metto a tutte il background unchecked
    const blocchi = document.querySelectorAll("section div");
    for (const blocco of blocchi) {
        blocco.addEventListener("click", seleziona);
        blocco.classList.remove("uncheckedbackground");
        blocco.classList.remove("checkedbackground");
    }
   
    //metto a tutte la casella unchecked
    const unchecked = document.querySelectorAll(".checkbox");
    for (const unc of unchecked) {
        unc.src = 'images/unchecked.png';
    }

    //tolgo il risultato
    const result = document.querySelector("#risultato");
    result.classList.add("hidden");
}


const blocchi = document.querySelectorAll("section div");
for (const blocco of blocchi) {
    blocco.addEventListener("click", seleziona);
}

const reset = document.querySelector("#risultato");
reset.addEventListener("click", restore);


// const result = document.querySelector("#risultato");
// result.classList.remove("hidden");
// const titolo = document.querySelector("#risultato h1");
// titolo.textContent = RESULTS_MAP["blep"].title;
// const testo = document.querySelector("#risultato p");
// testo.textContent = RESULTS_MAP['blep'].contents;