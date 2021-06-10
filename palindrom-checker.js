//Return true if the given string is a palindrome. Otherwise, return false.

function palindrome(str) {
    let arr = str.split('');
  
    if(arr.length%2 !== 0){
      arr[Math.floor((arr.length/2))] == 'S';
    }
  
    for(let i = 0; i<arr.length; i++){
      if(((arr[i] == ' ' || arr[i] == '_') || (arr[i]== "," || arr[i] == '.')) || arr[i] == '-'){
        arr.splice(i,1);
        i--;
      }
      else if(arr[i] == '(' || arr[i] == ')'){
        arr[i] = 'S';
      }
    }
  
    for(let i = 0; i<Math.floor(arr.length/2); i++){
      if(arr[i].toLowerCase() !== arr[arr.length-1-i].toLowerCase()){
        return false;
      }
    }
    return true;
}
  