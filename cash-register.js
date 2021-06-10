//Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
/*cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.*/

function checkCashRegister(price, cash, cid) {
    let changeDue = cash - price;
    let totalCashInRegister = 0;
    let changeGiven = [];
  
    for(let a in cid){
      totalCashInRegister += cid[a][1];
    }
  
    totalCashInRegister = Math.round(totalCashInRegister*100)/100;
  
    if(changeDue > totalCashInRegister) {
      return {
        status: "INSUFFICIENT_FUNDS",
        change: changeGiven
      };
    }
    else if(changeDue == totalCashInRegister) {
      return {
        status: "CLOSED",
        change: cid
      };
    }
    else {
      let noOfHundredsGiven = 0;
      if(Math.floor(changeDue/100)!==0){
        let noOfHundredsAvailable = cid[8][1]/100;
        for(let i = 0; i<noOfHundredsAvailable; i++){
          if(Math.floor(changeDue/100)!==0){
            changeDue -= 100;
            noOfHundredsGiven++;
          }
          else {
            i = noOfHundredsAvailable;
          }
        }
      }
      changeGiven.push(["ONE HUNDRED", 100*noOfHundredsGiven]);
  
      let noOfTwentysGiven = 0;
      if(Math.floor(changeDue/20)!==0){
        let noOfTwentysAvailable = cid[7][1]/20;
        for(let i = 0; i<noOfTwentysAvailable; i++){
          if(Math.floor(changeDue/20)!==0){
            changeDue -= 20;
            noOfTwentysGiven++;
          }
          else {
            i = noOfTwentysAvailable;
          }
        }
      }
      changeGiven.push(["TWENTY", 20*noOfTwentysGiven]);
  
      let noOfTensGiven = 0;
      if(Math.floor(changeDue/10)!==0){
        let noOfTensAvailable = cid[6][1]/10;
        for(let i = 0; i<noOfTensAvailable; i++){
          if(Math.floor(changeDue/10)!==0){
            changeDue -= 10;
            noOfTensGiven++;
          }
          else {
            i = noOfTensAvailable;
          }
        }
      }
      changeGiven.push(["TEN", 10*noOfTensGiven]);
  
      let noOfFivesGiven = 0;
      if(Math.floor(changeDue/5)!==0){
        let noOfFivesAvailable = cid[5][1]/5;
        for(let i = 0; i<noOfFivesAvailable; i++){
          if(Math.floor(changeDue/5)!==0){
            changeDue -= 5;
            noOfFivesGiven++;
          }
          else {
            i = noOfFivesAvailable;
          }
        }
      }
      changeGiven.push(["FIVE", 5*noOfFivesGiven]);
  
      let noOfDollarsGiven = 0;
      if(Math.floor(changeDue/1)!==0){
        let noOfDollarsAvailable = cid[4][1]/1;
        for(let i = 0; i<noOfDollarsAvailable; i++){
          if(Math.floor(changeDue/1)!==0){
            changeDue -= 1;
            noOfDollarsGiven++;
          }
          else {
            i = noOfDollarsAvailable;
          }
        }
      }
      changeGiven.push(["ONE", 1*noOfDollarsGiven]);
  
      let noOfQuartersGiven = 0;
      if(Math.floor(changeDue/0.25)!==0){
        let noOfQuartersAvailable = cid[3][1]/0.25;
        for(let i = 0; i<noOfQuartersAvailable; i++){
          if(Math.floor(changeDue/0.25)!==0){
            changeDue -= 0.25;
            noOfQuartersGiven++;
          }
          else {
            i = noOfQuartersAvailable;
          }
        }
      }
      changeGiven.push(["QUARTER", 0.25*noOfQuartersGiven]);
  
      let noOfDimesGiven = 0;
      if(Math.floor(changeDue/0.1)!==0){
        let noOfDimesAvailable = cid[3][1]/0.1;
        for(let i = 0; i<noOfDimesAvailable; i++){
          if(Math.floor(changeDue/0.1)!==0){
            changeDue -= 0.1;
            noOfDimesGiven++;
          }
          else {
            i = noOfDimesAvailable;
          }
        }
      }
      changeGiven.push(["DIME", 0.1*noOfDimesGiven]);
  
      let noOfNickelsGiven = 0;
      if(Math.floor(changeDue/0.05)!==0){
        let noOfNickelsAvailable = cid[3][1]/0.05;
        for(let i = 0; i<noOfNickelsAvailable; i++){
          if(Math.floor(changeDue/0.05)!==0){
            changeDue -= 0.05;
            noOfNickelsGiven++;
          }
          else {
            i = noOfNickelsAvailable;
          }
        }
      }
      changeGiven.push(["Nickel", 0.05*noOfNickelsGiven]);
  
      let noOfPenniesGiven = 0;
      if(changeDue/0.01 > 0){
        let noOfPenniesAvailable = cid[3][1]/0.01;
        for(let i = 0; i<noOfPenniesAvailable; i++){
          if(changeDue/0.01 > 0){
            changeDue -= 0.01;
            noOfPenniesGiven++;
          }
          else {
            i = noOfPenniesAvailable;
          }
        }
      }
      changeGiven.push(["PENNY", 0.01*noOfPenniesGiven]);
  
      
      for(let i = 0; i<changeGiven.length; i++){
        if(changeGiven[i][1] == 0){
          changeGiven.splice(i,1);
          i--;
        }
      }
  
      if(changeDue > 0){
        return {
        status: "INSUFFICIENT_FUNDS",
        change: []
        };
      }
      else{
        return {
          status: "OPEN",
          change: changeGiven
        };
      } 
    }
}
