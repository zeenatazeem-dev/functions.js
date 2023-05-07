function
 toCap(user){
    return user.charAt(0).toUpperCase() + user.slice(1).toLowerCase();
}
var capitalized = toCap("ZEEnat");
console.log(capitalized);


/*function isLeapYear(){
    var year = new Date().getFullYear();
    console.log("current year is", +year)
    if (year % 4 === 0)
    
        console.timeLog("current year is not a leap year", + 2026);
    }
var isLeapYearCheck = isLeapYear();
console.log(isLeapYear);


/*function otp(){
    return Math.flooor(random * 9000 + 1000); 
}

var otpGenerater = otp();
console.log(otpGenerater);



/*function toAge(birthDate){
    var today = new Date();
    var diff = today.getTime() - birthDate.getTime();
var age =  diff / (1000 * 60 * 60 * 24 * 365.2425)
return age;
}
var birthdate = new Date(1995, 7, 7);
var age = toAge(birthdate);
console.log(Math.floor(age));*/


