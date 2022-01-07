

export default class Calculator {

    constructor(outPut,latestOuput){
      this.outPut=outPut;
      this.latestOuput=latestOuput;
      this.Resert();
    }
    
    Resert(){
       
        this.currentOutput='';
        this._operator='';
    }

    Delete(){
        this.currentOutput=this.currentOutput.toString().slice(0,-1);
    }

    equal(){}

    appendNumber(number){
        if(number === "." && this.currentOutput.includes("."))return;
        this.currentOutput = this.currentOutput.toString()+number.toString();
        
    }
    
    operator(operator){
        if(this.currentOutput=='')return;
        if(this.latestOuput !==''){
            this.calc();
        }
        this._operator=operator;
        this.latestOuput=this.currentOutput;
        this.currentOutput='';
    }

    calc(){
        let camputation;
        const current=parseFloat(this.currentOutput);
        const previou=parseFloat(this.latestOuput);
        console.log(current,previou);
        if(isNaN(current)||isNaN(previou))return;
        switch(this._operator){
            case '+':
            camputation = current + previou;
            break;

            case '-':
            camputation = current - previou;
            break;
            
            case 'X':
            camputation = current * previou;
            break;
            
            case '/':
            camputation = current / previou;
            break;
            
            default:
                return;

        }
        this.currentOutput=camputation;
        this._operator=undefined;
        this.latestOuput='';
    }

    updateDisplay(){
        console.log(this.currentOutput);
        this.outPut.innerHTML=this.currentOutput;
    }

   
}






















