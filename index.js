let menuList = document.getElementById("menulist");
console.log(menuList)
menuList.style.maxHeight = "0px";
function toggleMenu(){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "150px";
    } else{
        menuList.style.maxHeight = "0px";
    }
}
function toggleMenu2(){
    if(menuList.style.maxHeight == "150px"){
        menuList.style.maxHeight = "0px";
    } else{
        menuList.style.maxHeight = "0px";
    }
}