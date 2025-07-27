let menuList = [
    {
        menuId: 1,
        menuName: "Home"
    },
    {
        menuId: 2,
        menuName: "Dashboad"
    },
    {
        menuId: 3,
        menuName: "About"
    },
    {
        menuId: 4,
        menuName: "Contact"
    }

];


if (menuList.length > 0) {
    for (let i = 0; i < menuList.length; i++) {
        var menuName = menuList[i].menuName;
        let li = document.createElement('li');// <li></li>
        li.innerText = menuName; //<li>Home</li>
   
        document.getElementById('menu').appendChild(li);
       
    }
}