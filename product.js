
document.addEventListener("DOMContentLoaded", load);

/*
    createZooland function
    This function will retrieve the data for the animal you created specifically
    You will then add the code required to meet the specifications
 */
function createProduct(productData) {

    let productList = document.getElementById("productList");

    for(let i=0; i<productData.length; i++){

        let values = Object.values(productData[i]);

        let items = document.createElement("li");
        let para = document.createElement("p");

        let images = Object.values(values[4]);
        let img = document.createElement("img");
        img.src = "images/products/" + `${images[0]}`;
        items.appendChild(img);

        para.innerHTML = `< ${values[0]} > [${values[1]}] : ${values[2]}`;
        let span = document.createElement("span");
        span.innerHTML = `$ ${values[3]}`;

        para.appendChild(span);
        items.appendChild(para);

        let newButton = document.createElement("button");

        newButton.type = "button";
        newButton.innerHTML = "Add";

        items.appendChild(newButton);
    
        productList.appendChild(items);
    }
}

/*
    load function
        loading the json file - run when the page loads
 */
function load() {
    fetch('product.json')
        .then(result => {
            return result.json()
        })
        .then(data => {
            createProduct(data);
        });
}