"use strict";
class Calculadora {
    constructor (){
        this.pantalla="0";
        this.memoria=0;
    }
    añadir(valor){
        if(this.pantalla == "0"){
            this.pantalla = valor;
        }
        else{
            this.pantalla+=valor;
        }
        this.mostrar();      
    }
    mostrar(){
        document.getElementById("textoPantalla").value=this.pantalla;
    }
    igual(){
        try { 
            this.pantalla = eval(this.pantalla);
        }
        catch(err) {
            alert("Error = " + err);
            this.pantalla="0";
        }
        this.mostrar();
    }
    ponerACero(){
        this.pantalla="0";
        this.mostrar();
    }
    mrc(){
        if(this.pantalla == "0"){
            this.pantalla = this.memoria;
        }
        else{
            this.pantalla+=this.memoria;
        }
        this.mostrar();  
    }
    mmenos(){
        this.igual();
        this.memoria=this.memoria-this.pantalla;
    }
    mmas(){
        this.igual();
        this.memoria+=this.pantalla;
    }
}
var calculadora = new Calculadora();