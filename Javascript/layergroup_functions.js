// function to send makers to the appropriate layer group
function select_layer_group(chai, cafe){
    if(chai == "Chai Me!"){
        return markerChaiMeGroup;
    }
    else if(chai == "Vegan chai"){
        return markerVeganGroup;
    }
    else if(chai == "Nope."){
        return markerNotEthicalGroup;
    }
    else if(cafe == "Yes"){
        return markerVeganRestaurants;
    }
}