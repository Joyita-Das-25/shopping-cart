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
    },
    {
        menuId: 5,
        menuName: "Address"
    },
];
//1: check length of array
if (menuList.length > 0) {
    //2: Run for loop
    for (let i = 0; i < menuList.length; i++) {
        if(menuList[i].menuId == 3){
            console.log(menuList[i].menuName)
        }
    }
}