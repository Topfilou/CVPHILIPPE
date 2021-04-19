var ab = 0;
var ac = 0;
var x; 
var y;

function hypo(){

    ab = Number(document.getElementById("AB").value);
    ac = Number(document.getElementById("AC").value);

    x = (Math.hypot(ab, ac)); 


    y = document.getElementById("rep").innerHTML = x;
}

  document.getElementById("entree").addEventListener("click", hypo);
  
  

                            //bouton rafraichir//
function reset() {
    window.location.href = "algoboxHypo.html";
}
document.getElementById("rafraichir").addEventListener("click", reset);


