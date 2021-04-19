function siage() {
    let age;
    age = Number(document.getElementById("form").value);
    if(age < 18)
{
           document.getElementById("demo3").innerHTML =
           "Programme réservé aux personnes majeures";
}
    else if(age >= 18 && age < 27)
{
           document.getElementById("demo3").innerHTML =
           "Statut jeune";
}
    else if(age >= 27 && age < 65)
{
           document.getElementById("demo3").innerHTML =
           "Statut adulte";
}
    else
{ 
           document.getElementById("demo3").innerHTML = "Programme réservé aux non retraités";
}
}
document.getElementById("form1").addEventListener("click", siage);



                            //bouton rafraichir//
function reset() {
    window.location.href = "algoboxTQAge.html"
}
document.getElementById("reessayer").addEventListener("click", reset);
                         