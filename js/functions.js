function showOffersByDestinations(destination) {

    if(destination == "argentina"){
        document.getElementById("divArgentina").style.display = "block";
        document.getElementById("divMexico").style.display = "none";
        document.getElementById("divBrasil").style.display = "none";
        document.getElementById("divPeru").style.display = "none";
    }

    if(destination == "mexico"){
        document.getElementById("divArgentina").style.display = "none";
        document.getElementById("divMexico").style.display = "block";
        document.getElementById("divBrasil").style.display = "none";
        document.getElementById("divPeru").style.display = "none";
    }
  
    if(destination == "brasil"){
        document.getElementById("divArgentina").style.display = "none";
        document.getElementById("divMexico").style.display = "none";
        document.getElementById("divBrasil").style.display = "block";
        document.getElementById("divPeru").style.display = "none";
    }

    if(destination == "peru"){
        document.getElementById("divArgentina").style.display = "none";
        document.getElementById("divMexico").style.display = "none";
        document.getElementById("divBrasil").style.display = "none";
        document.getElementById("divPeru").style.display = "block";
    }
}