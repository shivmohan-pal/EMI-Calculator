var amount = document.getElementsByName("amount");
var interest = document.getElementsByName("interest");
var tenure = document.getElementsByName("tenure");
var amountInput = document.querySelector('.amount-input');
var interestInput = document.querySelector('.interest-input');
var tenureInput = document.querySelector('.tenure-input');
var amountSlider = document.querySelector('.amount-slider');
var interestSlider = document.querySelector('.interest-slider');
var tenureSlider = document.querySelector('.tenure-slider');
var emiAmount = document.querySelector('.emi-amount');
var interestAmount = document.querySelector('.interest-amount');
var totalAmount = document.querySelector('.total-amount');

const maxLoanLimit = 20000000;
const maxInterestLimit = 20;
const maxTenureLimit = 30;
let p =100000, r=10 , n=1;
amount[0].value=p.toLocaleString('en-IN');
amount[1].value=p;
interest[0].value=interest[1].value=r;
tenure[0].value=tenure[1].value=n;

printCalculation(p,r,n);

displayChange(amount[0],amount[1],'p');
displayChange(interest[0],interest[1],'r');
displayChange(tenure[0],tenure[1],'n');


// ============================== All Fucntions  ========================

//EMI=P x R x [(1+R)^N]/[((1+R)^N)-1]
// where P= Loan amount, R= interest rate, N=tenure in number of months.

//EMI = equated monthly installment
function EMI(p,r,n){
    n*=12;
    r/=(12*100);
    return (p*r*((Math.pow((1+r),n)) / (Math.pow((1+r),n)-1)));
 }
 function TotalInterest(p,r,n){
      return (EMI(p,r,n)*12*n)  - p;
 }
 function TotalPayments(p,r,n){
     return EMI(p,r,n)*12*n;
 }
 function printCalculation(p,r,n){
     emiAmount.innerHTML = Math.round(EMI(p,r,n)).toLocaleString('en-IN');
     interestAmount.innerHTML = Math.round(TotalInterest(p,r,n)).toLocaleString('en-IN');
     totalAmount.innerHTML = Math.round(TotalPayments(p,r,n)).toLocaleString('en-IN');
     }


function displayChange(input , slider,v){
    input.addEventListener("change",()=>{
        let value =Number(input.value.replaceAll(',',''));
        slider.value= value;
        switchValue(v,value);
        });
        input.addEventListener('mouseout',()=>{
            let value =Number(input.value.replaceAll(',',''));
            slider.value=value;
            switchValue(v,value);
        });
        slider.addEventListener("change",()=>{ 
           input.value=Number(slider.value).toLocaleString('en-IN');
        switchValue(v,slider.value);
        });
        slider.addEventListener('mousemove',()=>{
           input.value=Number(slider.value).toLocaleString('en-IN');
        switchValue(v,slider.value);
        });

}
function switchValue(key,value){
    switch(key){
        case 'p':p = value;
        printCalculation(p,r,n);
        break;
        case 'r':r = value;
        printCalculation(p,r,n);
        break;
        case 'n':n = value;
        printCalculation(p,r,n);
        break;
         }
}

