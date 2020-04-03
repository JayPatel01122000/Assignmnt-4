//JavaScript Document

//access the JSON file using XHR object
let requestURL = "https://jaypatel01122000.github.io/Assignmnt-4/store.json";

//function to access the information and fetch api
function storeInformation(url) {
    //use the fetch api and use the function and catch the error
    fetch(url).then(function(response) {
        return response.json();
    }).then(function(json) {
        let jsonObj = json;
        Information(jsonObj);
    }).catch(function(err) {
        console.log("Fetch problem: " + err.message);
    });
}
//create a jsonobject and build html elements
function Information(jsonObj) {
    let StoreInformation = jsonObj.StoreInformation;
    let section = document.querySelector("section");
    for (let i = 0; i < StoreInformation.length; i++) {
        //build html elements
        let article = document.createElement("article");
        let h2 = document.createElement("h2");
        let img = document.createElement("img");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");

        img.setAttribute("src", "https://jaypatel01122000.github.io/Assignmnt-4/Image/" + StoreInformation[i].image);
        img.setAttribute("alt", StoreInformation[i].image);
        h2.textContent = StoreInformation[i].productName;
        p1.textContent = "price" + StoreInformation[i].price;
        p2.textContent = "details" + StoreInformation[i].details;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        section.appendChild(article);
    }
}

storeInformation("https://jaypatel01122000.github.io/Assignmnt-4/store.json", Information);
