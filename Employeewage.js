//UC2 Employee Daily Wage//

const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HRS=4;
const FULL_TIME_HRS=8;
const WAGE_PER_HR=20;

let emphrs=4;
empCheck=Math.floor(Math.random *10) % 3;
switch(empCheck)
{
    case IS_PART_TIME:
        emphrs=PART_TIME_HRS;
        break;
    case IS_FULL_TIME:
        emphrs=FULL_TIME_HRS;
        break;
     default:
         emphrs=4; 
}
let empwage = emphrs*WAGE_PER_HR;
console.log("UC2 Emp Daily wage is:" +empwage);
