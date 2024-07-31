function validEmail(str) {
  //your JS code here.
  valid = true
   let indeAt = str.indexOf("@")
   if(indeAt == 0){
       valid = false
       return valid
   }
   
   if(str == ""){
     valid = false
     return valid
   }
   
   else{
       for(let i=0; i<indeAt; i++){
            if(str[i] === "."){
              valid = false
            }
            return valid
       }
   }
   
   return valid
}
// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
