    let a = prompt('давай, введи число')
    let b = prompt('теперь введи степень!')
    let c = 1
    let d = 0;
while(isNaN(a) || isNaN(b) || a<1|| b<1 || d < b){
     	c *= a;
 d++;
 }
 alert('ответ ' +c);
