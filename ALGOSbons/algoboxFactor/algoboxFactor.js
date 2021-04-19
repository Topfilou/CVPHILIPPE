function factor(){
    let nbr;
    let x = "Réponse:"
    let y = 1
    nbr = Number(document.getElementById("myInput").value);

    for(x = 1; x <= nbr; x++)  
    {
    y *= x;
  }  
         document.getElementById("demo").innerHTML = "La Factorielle de " + (x - 1) + " est: " + y;
}

  document.getElementById("myInput1").addEventListener("click", factor);
  
  

                            //bouton rafraichir//
function reset() {
    window.location.href = "algoboxFactor.html"
}
document.getElementById("rafraichir").addEventListener("click", reset);


