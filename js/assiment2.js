let listofPeople = [
    {
        name: "Moharani Victoria",
        isOnline: true,
    },
    {
        name: "Bitan",
        isOnline: false,
    },
    {
        name: "Saikat",
        isOnline: true,
    },
    {
        name: "Raj",
        isOnline: false,
    },
    {
        name: "Bidisha",
        isOnline: true,
    },
    {
        name: "Rani",
        isOnline: true,
    },
    {
        name: "Sumi Rani",
        isOnline: false,
    },
    {
        name: "Dumi",
        isOnline: true,
    },
    {
        name: "King Khan",
        isOnline: true,
    },
    {
        name: "Sona",
        isOnline: true,
    },

];

if (listofPeople.length > 0);
for (let i = 0; i < listofPeople.length; i++) {
    var peopleName = listofPeople[i].name;
    let li = document.createElement('li');// <li></li>
    li.innerText = peopleName; //<li>Joyita</li>


    if (listofPeople[i].isOnline) {
        document.getElementById('onlinePeople').appendChild(li);
    } else {
        document.getElementById('offlinePeople').appendChild(li);
    }
}