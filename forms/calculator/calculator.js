

function addTwo(n1,n2) {
  let answer1 = n1 + n2
  return answer1 
  
  }
  
  function multiplyTwo(n1,n2) {
    let answer2 = n1 * n2
    return answer2
    }
    
  let userName = inptUserName.value
    
btnAdd.onclick=function(){
  let userName = inptUserName.value
  let num1 = Number(inptNum1.value)
  let num2 = Number(inptNum2.value)
   alrtAnswer.value = userName + " , the answer is " addTwo(num1,num2). 
}


btnMult.onclick=function(){
let userName = inptUserName.value
  let num1 = Number(inptNum1.value)
  let num2 = Number(inptNum2.value)
   alrtAnswer.value = userName + " , the answer is " addTwo(num1,num2). 
}


btnClear.onclick=function(){
  alrtAnswer.value = ""
  inptNum1.value = ""
  inptNum2.value = ""
  inptUserName = ""
}
