function gameStart(){
    var count = 0;
    var money = 0;

    // (2)設定獎金
    const price1 = "30,000,000";
    const price2 = "10,000,000";
    const price3 = "2,000,000";
    var congraudation = "";
    
    //接收輸入數值
    let input1 = document.getElementById("guessnum1").value;
    let input2 = document.getElementById("guessnum2").value;
    let input3 = document.getElementById("guessnum3").value;

    // (5)具備輸入檢查功能
    // 相同數字檢查
    if(input1==input2 || input1 == input2 || input2 == input3){
        alert("You enter the same number ! Please input again !")
        call.reset();
    }
    //是不是整數檢查
    else if(!Number.isInteger(Number(input1,input2,input3))){
        alert("Please enter an integer value.");
        call.reset();
    }
    //超過整數範圍檢查 1~10
    else if(input1<1 || input1>10 || input2<1 || input2>10 || input3<1 || input3>10){
        alert("Please enter the integer during 1~10.")
        call.reset();
    }

    // (1)號碼亂數生成
    var luckynum1 = Math.floor(Math.random() * 10) + 1;
    var luckynum2 = Math.floor(Math.random() * 10) + 1;
    while(luckynum2==luckynum1){
        luckynum2 = Math.floor(Math.random() * 10) + 1;
    }
    var luckynum3 = Math.floor(Math.random() * 10) + 1;
    while(luckynum3==luckynum1 || luckynum3==luckynum2){
        luckynum3 = Math.floor(Math.random() * 10) + 1;
    }
    
    //輸出數值至 demo.html
    document.getElementById("lucknum1").innerHTML = luckynum1;
    document.getElementById("lucknum2").innerHTML = luckynum2;
    document.getElementById("lucknum3").innerHTML = luckynum3;

    document.getElementById("num1").innerHTML = input1;
    document.getElementById("num2").innerHTML = input2;
    document.getElementById("num3").innerHTML = input3;

    //計算中獎數
    if(input1 == luckynum1 || input1 == luckynum2 || input1 == luckynum3){
        count++;
    }
    if(input2 == luckynum1 || input2 == luckynum2 || input2 == luckynum3){
        count++;
    }
    if(input2 == luckynum1 || input2 == luckynum2 || input3 == luckynum3){
        count++;
    }
    
    //兌獎
    if(count == 3){
        money = price1;
        alert("恭喜中獎 獎金是"+ money);
        congraudation = "恭喜中獎";
    }
    else if(count == 2){
        money = price2;
        alert("恭喜中獎 獎金是"+ money);
        congraudation = "恭喜中獎"
    }
    else if(count == 1){
        money = price3;
        alert("恭喜中獎 獎金是"+ money);
        congraudation = "恭喜中獎"
    }
    else{
        alert("未中獎");
        congraudation = "未中獎"
    }

    //輸出恭喜畫面與獲得金額
    document.getElementById("winMoney").innerHTML =congraudation + "<br>Congraduation You get<br>"+ "$ " + money;
}

//重置 function
function reset(){
    document.getElementById("guessnum1").value = "";
    document.getElementById("guessnum2").value = "";
    document.getElementById("guessnum3").value = "";
    document.getElementById("lucknum1").innerHTML = "";
    document.getElementById("lucknum2").innerHTML = "";
    document.getElementById("lucknum3").innerHTML = "";
    document.getElementById("num1").innerHTML = "";
    document.getElementById("num2").innerHTML = "";
    document.getElementById("num3").innerHTML = "";
}