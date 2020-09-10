const number = document.querySelector(".js-no"),
    btns = document.querySelector(".js-btns"),
    no1 = document.querySelector("#no1"),
    no2 = document.querySelector("#no2"),
    no3 = document.querySelector("#no3"),
    no4 = document.querySelector("#no4"),
    no5 = document.querySelector("#no5"),
    no6 = document.querySelector("#no6"),
    RECORDS_LS = 'records',
    SHOWING_ON = "showing";
let countRecord = 0;

const lottoArr = [];

btns.addEventListener("click", lotto);
btns.addEventListener("click", show);
btns.addEventListener("click", record);

function record() {
    var count = document.getElementById('count').innerText = countRecord + "회";
    var result = document.getElementById('result').innerText = 
    lottoArr[0] + " " + 
    lottoArr[1] + " " + 
    lottoArr[2] + " " + 
    lottoArr[3] + " " + 
    lottoArr[4] + " " + 
    lottoArr[5];
}


function show(){
    countRecord++;
    no1.classList.add(SHOWING_ON);
    no2.classList.add(SHOWING_ON);
    no3.classList.add(SHOWING_ON);
    no4.classList.add(SHOWING_ON);
    no5.classList.add(SHOWING_ON);
    no6.classList.add(SHOWING_ON);
}

function lotto() {
    for(i = 0; i < 45; i++){
        lottoArr[i] = i+1;
    }
    
    for(i = 0; i < 1000; i++){
        tmp = lottoArr[0];
        k = Math.floor(Math.random()*45);
        lottoArr[0] = lottoArr[k];
        lottoArr[k] = tmp;
    }

    console.log(lottoArr[0]);
    console.log(lottoArr[1]);
    console.log(lottoArr[2]);
    console.log(lottoArr[3]);
    console.log(lottoArr[4]);
    console.log(lottoArr[5]);

    var no1 = document.getElementById('no1').innerText = lottoArr[0];
    var no2 = document.getElementById('no2').innerText = lottoArr[1];
    var no3 = document.getElementById('no3').innerText = lottoArr[2];
    var no4 = document.getElementById('no4').innerText = lottoArr[3];
    var no5 = document.getElementById('no5').innerText = lottoArr[4];
    var no6 = document.getElementById('no6').innerText = lottoArr[5];

    record();
}


function init() {
    
}

init ();