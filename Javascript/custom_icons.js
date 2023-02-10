// custom Icons
// var GreenIcon = L.icon({
//     iconUrl: 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 388 515"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z" fill="rgb(163,226,173)" stroke="black" stroke-width="3"></path></svg>',
//     iconSize: [30, 30],
//     iconAnchor: [12.5, 41],
//     popupAnchor: [0, -41]
// })

// var RedIcon = L.icon({
//     iconUrl: 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 388 515"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z" fill="rgb(255,174,66)" stroke="black" stroke-width="3"></path></svg>',
//     iconSize: [30, 30],
//     iconAnchor: [12.5, 41],
//     popupAnchor: [0, -41]
// })

// var BlueIcon = L.icon({
//     iconUrl: 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 388 515"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z" fill="rgb(123,182,193)" stroke="black" stroke-width="3"></path></svg>',
//     iconSize: [30, 30],
//     iconAnchor: [12.5, 41],
//     popupAnchor: [0, -41]
// })

var Custom_icon_objects = [
    {
        icon: L.icon({
            iconUrl: 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 388 515"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z" fill="rgb(123,182,193)" stroke="black" stroke-width="3"></path></svg>',
            iconSize: [30, 30],
            iconAnchor: [12.5, 41],
            popupAnchor: [0, -41]
        }), 
        colour: "Blue"
    },
    {
        icon: L.icon({
            iconUrl: 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 388 515"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z" fill="rgb(255,174,66)" stroke="black" stroke-width="3"></path></svg>',
            iconSize: [30, 30],
            iconAnchor: [12.5, 41],
            popupAnchor: [0, -41]
        }),
        colour: "Red"
    },
    {
        icon: L.icon({
            iconUrl: 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 388 515"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z" fill="rgb(163,226,173)" stroke="black" stroke-width="3"></path></svg>',
            iconSize: [30, 30],
            iconAnchor: [12.5, 41],
            popupAnchor: [0, -41]
        }),
        colour: "Green"
    }
]


function custom_icon(vegan, extra){
// returns an icon colour depending if the cafes are fully vegan or have vegan chai or not
    if(vegan == "Yes"){
        return Custom_icon_objects[2].icon;
    }
    else if(vegan == "No" && extra == "Yes"){
        return Custom_icon_objects[0].icon;
    }
    else if(vegan == "No" && extra != "Yes"){
        return Custom_icon_objects[1].icon;
    }

}



