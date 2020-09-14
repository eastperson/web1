var arr = [];
var i = 0;
while(true){
    i++;
    arr.push(i);
    if(i === 25){
        break;
    }
}

function shuffleArr(arr) {
    var j = 0;
    while(true){
        if(j === 50){
            break;
        }
        tmp = 0;
        idx = Math.floor(Math.random()*25);
        tmp = arr[0];
        arr[0] = arr[idx];
        arr[idx] = tmp;
        j++;
    }
}

shuffleArr(arr);

arr1 = [];
arr2 = [];
arr3 = [];
arr4 = [];
arr5 = [];

board = [arr1, arr2, arr3, arr4, arr5];
for(i = 0; i < 5; i++){
    for(j = 0; j < 5; j++)
        board[i].push(arr.pop());
}

console.log(board);

for(i = 0; i < 5; i++){
    for(j = 0; j < 5; j++){
        document.write("<span>"+board[i][j]+"</span>");
    }
    document.write("</br>");
}