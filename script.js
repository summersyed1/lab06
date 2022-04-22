/*****************
 * 
 *  Variables and data types
 * 
 */

 



 // take the operand input
function math(){
    number1= Number(document.calc.o1.value);
    number2= Number(document.calc.o2.value);
    
    


        result1 = number1 + number2;
        document.calc.r1.value=result1

    
        result2 = number1 - number2;
        document.calc.r2.value=result2
    
        result3 = number1 * number2;
        document.calc.r3.value=result3
  
        result4 = number1 / number2;
        document.calc.r4.value=result4
    }



function alerrt(){

    alert("Confirm Alert");


}


function Min_Max(){
    var first, second, third, forth, fifth;
    first = parseInt(document.MINMAX_calc.firstnum.value);
    second = parseInt(document.MINMAX_calc.secondnum.value);
    third = parseInt(document.MINMAX_calc.thirdnum.value);
    forth = parseInt(document.MINMAX_calc.fourthnum.value);
    fifth = parseInt(document.MINMAX_calc.fifthnum.value);
    let a = Math.min(first, second, third, forth, fifth);
    let b = Math.max(first, second, third, forth, fifth);
    
    const random = [first, second, third, forth, fifth];
    var index = Math.floor(Math.random() *random.length);
    c = random[index];
    document.MINMAX_calc.a.value = a;
    document.MINMAX_calc.b.value = b;
    document.MINMAX_calc.c.value = c;
  }
    
 
 


  document.getElementById("test").style.fontStyle = "italic";







 
