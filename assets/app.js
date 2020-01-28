(()=> {
  const num1= document.getElementById('num1');
  const num2= document.getElementById('num2');
  const result= document.getElementById('result');
  document.getElementById('add')
    .addEventListener("click",()=>{
      result.value = parseFloat(num1.value) + parseFloat(num2.value);
    });
  document.getElementById('subtract')
    .addEventListener("click",()=>{
      result.value = parseFloat(num1.value) - parseFloat(num2.value);
    });
  document.getElementById('multiply')
    .addEventListener("click",()=>{
      result.value = parseFloat(num1.value) * parseFloat(num2.value);
    });
  document.getElementById('divide')
    .addEventListener("click",()=>{
      result.value = parseFloat(num1.value) / parseFloat(num2.value);
    });
})();
