// function to send makers to the appropriate layer group
function select_layer_group(cafe){
    if(cafe == "Chai Me!"){
        return markerChaiMeGroup;
    }
    else if(cafe == "Vegan chai"){
        return markerVeganGroup;
    }
    else if(cafe == "Nope."){
        return markerNotEthicalGroup;
    }
}