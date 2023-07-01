function add (){
let num = 0,num2=0;
num = calc.screen.value;
num2 = num.charAt(num.length-1);
if(num2=='+'|| num2=='-'||num2=='*'||num2=='/'){
calc.screen.value =  num.substring(0,num.length-1)
calc.screen.value+='+';
}else{
    calc.screen.value+='+';
}
}


function sub (){
    let num = 0,num2=0;
    num = calc.screen.value;
    num2 = num.charAt(num.length-1);
    if(num2=='+'|| num2=='-'||num2=='*'||num2=='/'){
    calc.screen.value =  num.substring(0,num.length-1)
    calc.screen.value+='-';
    }else{
        calc.screen.value+='-';
    }
    }


    function div (){
        let num = 0,num2=0;
        num = calc.screen.value;
        num2 = num.charAt(num.length-1);
        if(num2=='+'|| num2=='-'||num2=='*'||num2=='/'){
        calc.screen.value =  num.substring(0,num.length-1)
        calc.screen.value+='/';
        }else{
            calc.screen.value+='/';
        }
        }


        function mul (){
            let num = 0,num2=0;
            num = calc.screen.value;
            num2 = num.charAt(num.length-1);
            if(num2=='+'|| num2=='-'||num2=='*'||num2=='/'){
            calc.screen.value =  num.substring(0,num.length-1)
            calc.screen.value+='*';
            }else{
                calc.screen.value+='*';
            }
            }

              function deleteLastInput() {
                const inputElement = document.getElementById("calc_screen");
                const inputValue = inputElement.value;
                inputElement.value = inputValue.slice(0, -1);
              }


              function calculateSquareRoot() {
                const inputElement = document.getElementById("calc_screen");
                const inputValue = parseFloat(inputElement.value);
              
                if (inputValue >= 0) {
                  const result = Math.sqrt(inputValue);
                  inputElement.value = result;
                } else {
                  // Handle invalid input, such as negative numbers
                  inputElement.value = "Error";
                }
              }
              


              
              
              