function isAlphaNumeric(str){
    return typeof str === 'string' && str.length > 0 && /^[a-zA-Z0-9]+$/.test(str);
}


function isPalindrome(s){
    let st = 0, end = s.length - 1; 
    while (st < end){
        if(!isAlphaNumeric(s[st])){
            st++;
            continue;
        }
        if (!isAlphaNumeric(s[end])) {
          end--;
          continue;
        }
        if(s[st].toLowerCase() != s[end].toLowerCase()){
            return false;
        }
        st++;
        end--;
    }
    return true;
}   

const s = "race a car";
console.log(isPalindrome(s));
