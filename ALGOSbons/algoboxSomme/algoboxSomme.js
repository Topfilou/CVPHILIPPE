let x = 0;
let som = 0;
let moyenne = 0
let entree = 0

function Somme() {
    x = Number(document.getElementById("form2").value);  
    som = som + x
    console.log(som);
    document.getElementById("demo4").innerHTML = som;
    effacerValeurInput()  //appel la fonction effacer plus bas
}
document.getElementById("form3").addEventListener("click", Somme)

function Moyenne() {
    entree++;  
    moyenne = som / entree;
    Math.round(moyenne*100)/100;
    document.getElementById("demo5").innerHTML = moyenne;
}
    
function effacerValeurInput() {
    document.getElementById("form2").value = "";
    
}
document.getElementById("form3").addEventListener("click", Moyenne)

                                

                            //bouton rafraichir//
function reset() {
    window.location.href = "algoboxSomme.html"
}
document.getElementById("rafraichir").addEventListener("click", reset);

