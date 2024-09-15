const jean = new (function () {
  this.num1 = document.getElementById("numero1");
  this.num2 = document.getElementById("numero2");
  this.res = document.getElementById("res");
  this.opciones = document.getElementById("opciones");

  this.generar = () => {   
    //console.log(this.opciones.value)
    if ((this.opciones.value === "SUMA") || (this.opciones.value === "suma")) {
      const resul = parseInt(this.num1.value ) + parseInt(this.num2.value);
      this.res.value = resul;
    }

    if ((this.opciones.value === "RESTA")|| (this.opciones.value===  "resta")) {
      const resul = parseInt(this.num1.value) - parseInt(this.num2.value);
      this.res.value = resul;
      
    }
    if ((this.opciones.value === "MULTIPLICACION") || (this.opciones.value=== "multiplicacion")) {
      const resul = parseInt(this.num1.value) * parseInt(this.num2.value);
      this.res.value = resul;
      
    }
    if ((this.opciones.value === "DIVISION") || (this.opciones.value === "division")) {
      const  resul = parseInt (this.num1.value) / parseInt(this.num2.value);
      this.res.value= resul;
      
    }
    if ((this.opciones.value === "0")) {
      const  resul = parseInt(this.num1.value) / parseInt(this.num2.value);
      this.res.value= resul;
      console.log("Error");
      
    }
    
    // const res1 = parseInt(this.num1.value ) + parseInt(this.num2.value);
    // console.log(res)
    // this.res.value = res1;
  };
})();

// console.log("hola mundo");

//  function calculadora() {
//         const x = 12;
//         const y =5;

//         const result=(x*y);
//         console.log(result);
//       }

//       function User(){

//         var email=document.querySelector("#email");
//         var this.nombre=document.querySelector("#nombre");
//         if (nombre.value ==" "
//          && email.value ==" "){
//         console.log("hola usuario");

//         }else{
//             alert("Error");
//         }

//       }

// const username = document.getElementById("#username")
// const password = document.getElementById("#password")
// const btn = document.getElementById("#btnSubmit")

// btn.addEventListener("click", function (event) {
//   event.preventDefault()
//   if (username.value == "") {
//     username.classList.add("errorField")
//   }
//   if (password.value == "") {
//     password.classList.add("errorField")
//   }
// })

// username.addEventListener("keyup", function () {
//   username.classList.remove("errorField")
// })
// password.addEventListener("keyup", function () {
//   password.classList.remove("errorField")
// })
