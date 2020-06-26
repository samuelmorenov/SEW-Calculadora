class CalculadoraCientifica extends Calculadora {
    constructor(){
        super();
    }
    borrar(){
        if(this.pantalla.length > 0){
            this.pantalla = this.pantalla.substring(0, this.pantalla.length - 1);
            if(this.pantalla.length == 0){
                this.pantalla="0";
            }
            this.mostrar();
        }
    }
    seno(){
        this.igual();
        this.pantalla=Math.sin(this.pantalla);
        this.mostrar();
    }
    coseno(){
        this.igual();
        this.pantalla=Math.cos(this.pantalla)
        this.mostrar();
    }
    tangente(){
        this.igual();
        this.pantalla=Math.tan(this.pantalla)
        this.mostrar();
    }
    raizcuadrada(){
        this.igual();
        this.pantalla=Math.sqrt(this.pantalla)
        this.mostrar();
    }
    factorial(){
        var n = parseInt(this.pantalla);
        var total = 1; 
        for (var i=1; i<=n; i++) {
		  total = total * i;
        }
        this.pantalla = total;
        this.mostrar();
	}
    arcoseno(){
        this.igual();
        this.pantalla=Math.asin(this.pantalla)
        this.mostrar();
    }
    arcocoseno(){
        this.igual();
        this.pantalla=Math.acos(this.pantalla)
        this.mostrar();
    }
    arcotangente(){
        this.igual();
        this.pantalla=Math.atan(this.pantalla)
        this.mostrar();
    }
    logaritmo(){
        this.igual();
        this.pantalla=Math.log10(this.pantalla)
        this.mostrar();
    }
    neperiano(){
        this.igual();
        this.pantalla=Math.log(this.pantalla)
        this.mostrar();
    }
    absoluto(){
        this.igual();
        this.pantalla=Math.abs(this.pantalla)
        this.mostrar();
    }
    elevar(numero){
        this.igual();
        this.pantalla=Math.pow(this.pantalla, numero);
        this.mostrar();
    }
    pi(){
        var pi = Math.PI;
        pi = pi.toString();
        if(this.pantalla == "0"){
            this.pantalla = pi;
        }
        else{
            this.pantalla+=pi;
        }
        this.mostrar(); 
    }
    euler(){
        var e = Math.E;
        e = e.toString();
        if(this.pantalla == "0"){
            this.pantalla = e;
        }
        else{
            this.pantalla+=e;
        }
        this.mostrar(); 
    }
    
}
calculadora = new CalculadoraCientifica();