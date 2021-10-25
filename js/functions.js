function showOffersByDestinations(destination) {

    if(destination == "argentina"){
        document.getElementById("divArgentina").style.display = "block";
        document.getElementById("divMexico").style.display = "none";
    }

    if(destination == "mexico"){
        document.getElementById("divArgentina").style.display = "none";
        document.getElementById("divMexico").style.display = "block";
    }
}