export default class Pitagoras {

    a;
    b;

    constructor(){}
    
   


    mostrar_datos(){
    
        let bloque1= Math.pow(this.a,2)+ Math.pow(this.b,2);
        let h = Math.sqrt(bloque1);
        
        return h;
    }
}