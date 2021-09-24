
function getRoot(){
    if(window.location.origin.substring(0, 4) == "file"){
        return "file:///C:/Users/Jordan/Documents/GitHub/dndShops/";
    } else {
        return "https://www.avyngaard.shop/";
    } 
}