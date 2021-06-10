//Return true if the passed string looks like a valid US phone number.

function telephoneCheck(str) {
    let strRegex = /^1*\s*((\d{3}-*s*|\(\d{3}\)\s*)|\d{3}\s)(\d{3}-*s*|\d{3}\s)(\d{4})$/
    return strRegex.test(str); 
  }