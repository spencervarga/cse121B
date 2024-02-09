/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Spencer Varga",
    photo: "images/File_015.jpeg",
    favoriteFoods: [
        "Rice",
        "Pie",
        "Burgers",
        "Brisket"
    ],
    hobbies: [
        "Cars",
        "Fishing",
        "Hiking",
        "Video Games"
    ],
    placesLived: []
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Spokane, Washington",
        length: "12 years"
    }
)
myProfile.placesLived.push(
    {
        place: "Idaho Falls, Idaho",
        length: "10 years"
    }
)
myProfile.placesLived.push(
    {
        place: "El Paso, Texas",
        length: "2 years"
    }
)

/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

document.querySelector("#photo").src = myProfile.photo
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food=> {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
})

/* Hobbies List */

myProfile.hobbies.forEach(hobby=> {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
})

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place; 

    let dd = document.createElement("dd");
    dd.textContent = place.length; 

    let placesLived = document.querySelector("#places-lived");
    placesLived.appendChild(dt);
    placesLived.appendChild(dd);
});
