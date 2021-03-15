function calculator(){

   const out = document.querySelector('#out');
      function clearInput(){
          out.setAttribute('value', '');
      }
      function inputNums () { 
         const number = document.querySelectorAll('[data-num]');
         
            number.forEach(btn => {
               
            btn.addEventListener('click', () => {
               clearInput();
               if (out.value === '0'){
                  out.value = "";
               }
               target = btn;
               num = target.getAttribute('data-num');
                  out.value += num;
      });
   });
};

      function back(){
         const btnBack = document.querySelector('.ops-back');
         btnBack.addEventListener('click', ()=>{
            elem = out.value;
            out.value = elem.substring(0, elem.length-1);
            /* out.value = '0'; */
         })
      };

      function calc(){
         const btnEqual = document.querySelector('.ops-equal');
         btnEqual.addEventListener('click', ()=>{
            elem = out.value;
            if(elem){
               out.value = eval(elem);
            }
         })
      };

      function clear(){
         const btnClear = document.querySelector('.clear');
         btnClear.addEventListener('click', ()=>{
            out.value = '0';
         })
      };

      function splitOut (){
         let rx = /[+*\/-]/;
         let str = out.value;
         let arrStr = []; let num1 = []; let num2 = [];
         result = null;
         arrStr = str.split(rx);
         num1 = +arrStr.splice(0, 1);
         num2 = +arrStr.splice(0, 1);
         result = (num1 / 100) * num2;
         return result;
      };

      function changeSign(){
         const btnCangeSign = document.querySelector('.ops-pius-minus');
         let arr = [];
         btnCangeSign.addEventListener('click', ()=>{
            arr = out.value;
            if(arr.includes('-', 0)){
              arr = arr.slice(1);
            	out.value =  + arr;
            } else if(arr.includes('+', 0)){
             arr = arr.slice(1);
             out.value = "-" + arr;
            } else {
             out.value = "-" + arr;
            }
         })
      }

      function calcPercent (){
         const btnPercent = document.querySelector('.ops-percent');
         
         btnPercent.addEventListener('click', ()=>{
            persent = splitOut();
            out.value = '';
            out.value = persent;
            num = +out.value;
            out.value = num.toFixed(2);
            console.log(num);
         })
      }
      
inputNums();
back();
calc();
clear();
calcPercent();
changeSign();
};
calculator();
