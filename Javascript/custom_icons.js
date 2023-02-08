// custom Icons
var GreenIcon = L.icon({
    iconUrl: 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z" fill="rgb(86,113,90)"></path></svg>',
    iconSize: [30, 30],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41]
})

var RedIcon = L.icon({
    iconUrl: 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z" fill="rgb(214,50,50)"></path></svg>',
    iconSize: [30, 30],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41]
})

var YellowIcon = L.icon({
    iconUrl: 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z" fill="rgb(241,194,50)"></path></svg>',
    iconSize: [30, 30],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41]
})

function custom_icon(chai_string) {

    if(chai_string == "Chai Me!"){
        return GreenIcon;
    }
    else if(chai_string == "Vegan chai"){
        return YellowIcon;
    }
    else if(chai_string == "Nope."){
        return RedIcon;
    }
    
};