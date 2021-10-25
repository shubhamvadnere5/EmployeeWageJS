//UC2 Employee Daily Wage//

const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HRS=4;
const FULL_TIME_HRS=8;
const WAGE_PER_HR=100;

let emphrs=4;
empCheck=Math.floor(Math.random ()) * 3;
function getemphrs(empCheck)
{
    switch(empCheck)
{
    case IS_PART_TIME:
        emphrs=PART_TIME_HRS;
        break;
    case IS_FULL_TIME:
        emphrs=FULL_TIME_HRS;
        break;
     default:
         return 4; 
}
}
emphrs=getemphrs(empCheck);
let empwage = emphrs*WAGE_PER_HR;
console.log("UC3 Emp Daily wage is:" +empwage);
