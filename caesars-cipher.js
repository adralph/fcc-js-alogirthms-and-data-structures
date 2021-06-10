//Write a function which takes a ROT13 encoded string as input and returns a decoded string.

function rot13(str) {
    let arr = str.split('');
  
    for(let i in arr){
      if(arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) < 78){
        arr[i] = String.fromCharCode(arr[i].charCodeAt(0)+13);
      }
      else if(arr[i].charCodeAt(0) >= 78 && arr[i].charCodeAt(0) < 91){
        let temp = 91-arr[i].charCodeAt(0);
        arr[i] = String.fromCharCode(65+(13-temp));
      }
    }
    return arr.join('');
}