let search = document.getElementById('search');
let featured = document.getElementById('featured');
let container = document.getElementById('notes');
let nodata = document.getElementById('nodata');
let bool = false;

search.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        let searchval = search.value.toLowerCase();
        let card = document.getElementsByClassName("card");
        e.preventDefault();
        Array.from(card).forEach(function(element){
            let title = element.getElementsByTagName("h5")[0].innerText.toLowerCase();

            if(title.includes(searchval)){
                nodata.style.display = "none";
                element.style.display = "block";
                bool = true;
            }
            else{
                element.style.display = "none";
                
            }
        })
        if(bool){
            if(search.value!=""){

                featured.innerHTML = "Results based on "+'"'+ search.value+'"';
            }
            else{
                featured.innerHTML = "Some Featured Recipes";
                nodata.style.display = "none";
                window.location.reload();
            }
        }
        else{
            featured.innerHTML = "Nothing matches your search";
            nodata.style.display = "block";
            
        }
        bool = false;

        
    }

})