//UC6 //

const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HRS=4;
const FULL_TIME_HRS=8;
const WAGE_PER_HR=100;
const MAX_NUMBER_DAYS=20;
const MAX_HOURS=160;
let totalEmpHrs=0;
let emphrs=0;
let empDailyWageArr=new Array();
function CalculatedailyWage(emphrs)
{
    return emphrs=WAGE_PER_HR;
}
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
         return 0; 
}
}
let days=0;
let maxhrs=0;
while(days<MAX_NUMBER_DAYS && emphrs<=160)
{
    days=days+1;
    let empCheck=Math.floor(Math.random()*10)%3;
    emphrs+=getemphrs(empCheck);
    totalEmpHrs+=emphrs;
    empDailyWageArr.push(CalculatedailyWage(emphrs))
    
}

let empwage = CalculatedailyWage(totalEmpHrs);
console.log("UC 6 Total Employee Wage in  "+totalEmpHrs +"Hours "+" Working for"+days+" days "+"is :"+empwage);
