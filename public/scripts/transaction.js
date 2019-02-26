$(document).ready(() => {
    $(".close").click(() => {
        setModal(false);
    });

    window.onclick = (event) => {
        if (event.target.className == "modal-content")
            setModal(false);
    }

    $("#openCart").click(() => {
        openCart();
    });
    
    $("#checkout").click(() => {
        checkOut();
    });

    let itemList = document.getElementById("itemList");
    for(let i = 0; i < 60; i++)
    {
        // Used to generate random 
        let randIndex = Math.floor(Math.random() * (items.length));
        itemList.appendChild(generateItemBox(items[randIndex]));
    }
});

function getItems()
{
    $.getJSON("server/api/",
    {
        request: "current_items"
    }, (data) => {
        console.log(data);
    });
}

function setModal(open)
{
    let overlay = document.getElementById("overlay");
    let modal = document.getElementById("modal");

    if (open)
    {
        overlay.style.display = "block";
        modal.style.display = "table";
    }
    else
    {
        overlay.style.display = "none";
        modal.style.display = "none";
    }
}

function generateItemBox(itemObj)
{
    let itemBox = document.createElement("div");
    itemBox.className = "itemBox";
    
    let title = document.createElement("h2");
    title.textContent = itemObj.name;
    
    let image = document.createElement("img");
    image.src = "images/" + itemObj.image;

    let price = document.createElement("h2");
    price.className = "price";
    price.textContent = "$" + itemObj.price;

    if (itemObj.name == "Big Yoshi")
    {
        itemBox.style.borderColor = "red";
        itemBox.style.borderStyle = "dashed";
    }

    itemBox.appendChild(title);
    itemBox.appendChild(image);
    itemBox.appendChild(price);

    itemBox.onclick = () => { openQuantityWindow(itemObj) };
    return itemBox;
}

// Test Items - Will be retrieved from server later
var items = [
{
    id: "1",
    name: "Tim Allen",
    image: "allen.jpg",
    price: "49.99"
},
{
    id: "2",
    name: "Mandark",
    image: "mandark.jpg",
    price: "19.99"
},
{
    id: "3",
    name: "Chowder",
    image: "chowder.jpg",
    price: "13.99"
},
{
    id: "4",
    name: "Cactus",
    image: "dancing cactus.gif",
    price: "8.99"
},
{
    id: "5",
    name: "Patrick",
    image: "patrick.png",
    price: "18.99"
},
{
    id: "6",
    name: "Josh Redgrove",
    image: "josh.jpg",
    price: "32.99"
},
{
    id: "7",
    name: "Big Yoshi",
    image: "big_yoshi.png",
    price: "31.99"
},
{
    id: "8",
    name: "Brown",
    image: "brown.gif",
    price: "87.99"
},
{
    id: "9",
    name: "Scoot",
    image: "scoot.jpg",
    price: "13.37"
},
{
    id: "10",
    name: "Yoshi",
    image: "yoshi.jpeg",
    price: "10.07"
}];