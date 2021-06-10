//Convert the given number into a roman numeral.

function convertToRoman(num) {
    let romanArrOneToTen = ['','I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII','IX','X'];
    let arr = [];
  
    if(num <= 10) {
      arr.unshift(romanArrOneToTen[num]);
    }
    else if(num > 10 && num < 40) {
      if(num > 10 && num < 20) {
        arr.unshift(convertToRoman(num-10));
        arr.unshift('X');
      }
      else if(num >= 20 && num < 30) {
        arr.unshift(convertToRoman(num-20));
        arr.unshift('XX');
      }
      else {
        arr.unshift(convertToRoman(num-30));
        arr.unshift('XXX');
      }
    }
    else if(num >= 40 && num < 50) {
      arr.unshift(convertToRoman(num-40));
      arr.unshift('XL');
    }
    else if(num >= 50 && num < 60) {
      arr.unshift(convertToRoman(num-50));
      arr.unshift('L');
    }
    else if(num >= 60 && num < 70) {
      arr.unshift(convertToRoman(num-60));
      arr.unshift('LX');
    }
    else if(num >= 70 && num < 80) {
      arr.unshift(convertToRoman(num-70));
      arr.unshift('LXX');
    }
    else if(num >= 80 && num < 90) {
      arr.unshift(convertToRoman(num-80));
      arr.unshift('LXXX');
    }
    else if(num >= 90 && num < 100) {
      arr.unshift(convertToRoman(num-90));
      arr.unshift('XC');
    }
    else if(num >= 100 && num < 200) {
      arr.unshift(convertToRoman(num-100));
      arr.unshift('C');
    }
    else if(num >= 200 && num < 300) {
      arr.unshift(convertToRoman(num-200));
      arr.unshift('CC');
    }
    else if(num >= 300 && num < 400) {
      arr.unshift(convertToRoman(num-300));
      arr.unshift('CCC');
    }
    else if(num >= 400 && num < 500) {
      arr.unshift(convertToRoman(num-400));
      arr.unshift('CD');
    }
    else if(num >= 500 && num < 600) {
      arr.unshift(convertToRoman(num-500));
      arr.unshift('D');
    }
    else if(num >= 600 && num < 700) {
      arr.unshift(convertToRoman(num-600));
      arr.unshift('DC');
    }
    else if(num >= 700 && num < 800) {
      arr.unshift(convertToRoman(num-700));
      arr.unshift('DCC');
    }
    else if(num >= 800 && num < 900) {
      arr.unshift(convertToRoman(num-800));
      arr.unshift('DCCC');
    }
    else if(num >= 900 && num < 1000) {
      arr.unshift(convertToRoman(num-900));
      arr.unshift('CM');
    }
    else if(num >= 1000 && num < 2000) {
      arr.unshift(convertToRoman(num-1000));
      arr.unshift('M');
    }
    else if(num >= 2000 && num < 3000) {
      arr.unshift(convertToRoman(num-2000));
      arr.unshift('MM');
    }
    else if(num >= 3000 && num < 4000) {
      arr.unshift(convertToRoman(num-3000));
      arr.unshift('MMM');
    }
   return arr.join('');
}