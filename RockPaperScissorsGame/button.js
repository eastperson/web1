const btns = document.querySelector(".js-btns"),
    btns_scissors = document.querySelector(".js-btns_scissors"),
    btns_rock = document.querySelector(".js-btns_rock"),
    btns_paper = document.querySelector(".js-btns_paper"),
    resultScissors = document.querySelector(".js-result_scissors"),
    resultRock = document.querySelector(".js-result_rock"),
    resultPaper = document.querySelector(".js-result_paper"),
    asiderContent = ".asideContent";
    BORDER_CN = "border",
    SHOWING_ON = "showing",
    HIDE_ON = "hide";
    

let mySelectNumber = 0;
let computerSelectNumber = 0;

btns.addEventListener("click", select);

btns_paper.addEventListener("click", selectPaper);
btns_rock.addEventListener("click", selectRock);
btns_scissors.addEventListener("click", selectScissors);

function select () {

}

function selectScissors(){
    initialShowing();
    btns_scissors.classList.add(BORDER_CN);
    computerSelect();
    mySelectNumber = 1;
    let r =result(mySelectNumber, computerSelectNumber);
    confirm(r);
}

function selectRock(){
    initialShowing();
    btns_rock.classList.add(BORDER_CN);
    computerSelect();
    mySelectNumber = 2;
    let r =result(mySelectNumber, computerSelectNumber);
    confirm(r);
}

function selectPaper(){
    initialShowing();
    btns_paper.classList.add(BORDER_CN);
    computerSelect();
    mySelectNumber = 3;
    let r =result(mySelectNumber, computerSelectNumber);
    confirm(r);
}

function result(a, b){
		if(a-b === -1 || a-b === 2) {
			return -1;
		}
		else if (a-b === 0) {
			return 0;
		}
		else if (a-b === -2 || a-b === 1) {
			return 1;
		}
		else {
			return -10;
		}
		
	}

function confirm(a){
    if(a==1) {
        var result = document.getElementById('result').innerText = "이김"
    } else if(a==0) {
        var result = document.getElementById('result').innerText = "비김"
    } else if(a==-1) {
        var result = document.getElementById('result').innerText = "짐"
    } else {
        var result = document.getElementById('result').innerText = "오류"
    }
}

function initialShowing() {
    resultScissors.classList.remove(SHOWING_ON);
    resultScissors.classList.add(HIDE_ON);  
    resultRock.classList.remove(SHOWING_ON);
    resultRock.classList.add(HIDE_ON);
    resultPaper.classList.remove(SHOWING_ON);
    resultPaper.classList.add(HIDE_ON);
}


function computerSelect(){
    let n = Math.floor(Math.random()*3+1);
    if(n === 1){
        resultScissors.classList.add(SHOWING_ON);
        resultScissors.classList.remove(HIDE_ON);
    } else if (n === 2) {
        resultRock.classList.add(SHOWING_ON);
        resultRock.classList.remove(HIDE_ON);
    } else {
        resultPaper.classList.add(SHOWING_ON);
        resultPaper.classList.remove(HIDE_ON);
    }
    computerSelectNumber = n;
}


function init () {
    
}

init();