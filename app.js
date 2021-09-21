//variables declaration

const bdayDate = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#checkbtn");
const outputArea = document.querySelector("#output-area");

//Function to find out the sum of Date of birth numbers

function sumOfDOB (DOB)
{
    let sum = 0;
    DOB = DOB.replaceAll("-","");
    for (let i = 0; i < DOB.length; i++) 
    {
        sum = sum + Number(DOB.charAt(i));
    }
    return sum;
};

//Function to find out if user entered number is lucky

function isNumberLucky(sum,luckyNumber)
{
    if(luckyNumber >= 0)
    {if(sum%luckyNumber === 0)
    {
        outputArea.innerText = "Your birthday is lucky!"
    }
    else
    {
        outputArea.innerText = "Your birthday is unlucky :("
    }}
    else{ outputArea.innerText = "Lucky number can't be negative"}
}

//After clicking the button, this happens

checkButton.addEventListener("click", () =>{
    if (bdayDate.value && luckyNumber.value)
    {isNumberLucky(sumOfDOB(bdayDate.value),luckyNumber.value)}
    else
    {outputArea.innerText = "Insert the details!"}
})