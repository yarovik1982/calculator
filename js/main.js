function calculator(){

   const out = document.querySelector('#out');
      
      function inputNum () { 
         const number = document.querySelectorAll('[data-num]');
            number.forEach(btn => {
      
            btn.addEventListener('click', () => {
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
            out.value = '';
         })
      };

      // function calcPercent (){
      //    const btnPercent = document.querySelector('.ops-percent');
   
      // }
      
inputNum();
back();
calc();
clear();
};
calculator();
