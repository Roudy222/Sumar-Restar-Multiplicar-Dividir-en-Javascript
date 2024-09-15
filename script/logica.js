const app = new (function() {

    this.num1 = document.getElementById("numero1");
    this.num2 = document.getElementById("numero2");
    this.res = document.getElementById("res");
    this.acciones = document.getElementById("acciones");

    this.generar = () => {
        //console.log(this.num1.value)
        if ((this.acciones.value === "SUMA") || (this.acciones.value ==="suma")){
            const resul = parseInt(this.num1.value) + parseInt(this.num2.value);
            this.res.value = resul;
            
        }
        if ((this.acciones.value === "RESTA") || (this.acciones.value === "resta")){
            const resul = parseInt(this.num1.value) - parseInt(this.num2.value);
            this.res.value = resul;
            
           }
           if ((this.acciones.value === "MULTIPLICACION") || (this.acciones.value === "multiplicacion")) {
            const resul = parseInt(this.num1.value) * (this.num2.value);
            this.res.value= resul;
            
           }

           if ((this.acciones.value === "DIVISION") || (this.acciones.value === "division")) {
            const resul = parseInt(this.num1.value) / (this.num2.value);
            this.res.value = resul;
            
           }

           if (this.acciones.value === "0") {
            const resul = parseInt(this.num1.value)/ (this.num2.value);
            alert("no se puede dividir entre cero");
            
           }

           
       }
       
})();

function validar() {
    if (inputOK) {
        return true;
        
    }else{
        return false;
    }
    
}