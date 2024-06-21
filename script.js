function showDishes(){
    let soup = document.getElementById(`chooseSoups`);
    soup.innerHTML="";
    for (let i = 0; i < soups.length; i++) {
        let contentSoups = soups[i];
        soup.innerHTML += soupOrder(i,contentSoups);
        
    }
}