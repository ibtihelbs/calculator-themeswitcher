import {Calculator} from '/calculator.js';
let Numbers=document.querySelectorAll('[data-value="number"]');
let Operator=document.querySelectorAll('[data-value="operator"]');

let Delete=document.querySelector('.DEL');
let Resert=document.querySelector('.Resert');
let submit=document.querySelector('#submit');
console.log(Numbers , Operator,Delete,Resert,submit);

//let Calculator=document.querySelector(".calculator");
let Result=document.querySelector(".Results h1");

const _Calculator=new Calculator(Result,"");

Resert.addEventListener('click',()=>{
   _Calculator.Resert();
   _Calculator.updateDisplay();
})
Numbers.forEach((number) => {
  number.addEventListener("click",(button)=>{
     //console.log(number);
     
    _Calculator.appendNumber(number.innerHTML);
    _Calculator.updateDisplay();
    //alert('hiihihii');
})
})

Operator.forEach((number) => {
   number.addEventListener("click",(button)=>{
      //console.log(number);
      
     _Calculator.operator(number.innerHTML);
     _Calculator.updateDisplay();
     //alert('hiihihii');
  })
 })

submit.addEventListener('click',(button)=>{
   //alert(button);
   _Calculator.calc();
   _Calculator.updateDisplay();

})
Delete.addEventListener('click',(button)=>{
   
   _Calculator.Delete();
   _Calculator.updateDisplay();
})

















/**theme swiching */
let the_swisher=document.querySelector('.the-swisher');

the_swisher.addEventListener("click",(f)=>{
    f.preventDefault();
    let currently_active =document.querySelector('.currently-active');
    let li=f.target.closest("li");
    if(!li)return;
    let attr=li.getAttribute('data-attribution');
    let _body=document.querySelector("body");
    let _class = _body.getAttribute('class');
    const _themeSwitcher=(attrName,className)=>{
        if(attr==attrName){
        
            _body.classList.remove(_class);
            _body.classList.toggle(className);
         }
    }
    _themeSwitcher(1,'first-theme');
    _themeSwitcher(2,'second-theme');
    _themeSwitcher(3,'third-theme');
    /*if(attr==1){
        
       _body.classList.remove(_class);
       _body.classList.toggle('first-theme');
    }
    if(attr==2){
        //let _body=document.querySelector("body");
        //let _class = _body.getAttribute('class');
        _body.classList.remove(_class);
        _body.classList.toggle('second-theme');
     }
     if(attr==3){
        //let _body=document.querySelector("body");
        //let _class = _body.getAttribute('class');
        _body.classList.remove(_class);
        _body.classList.toggle('second-three');
     }*/
    li.classList.toggle("currently-active");
    currently_active.classList.remove("currently-active");
    
})
