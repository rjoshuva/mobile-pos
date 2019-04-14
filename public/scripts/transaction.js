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

    //getItems();

    let itemList = document.getElementById("itemList");

    Object.values(products).forEach((product) => {
        itemList.appendChild(generateItemBox(product));
    });
});

function getItems()
{
    $.getJSON(backendURL + "/api/product", (data) => {
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

	let id = document.createElement("p");
	id.className = "id";
	id.textContent = itemObj.id;
	id.setAttribute("hidden", "");
	
    itemBox.appendChild(title);
    itemBox.appendChild(image);
    itemBox.appendChild(price);
	itemBox.appendChild(id);
	
    itemBox.onclick = () => { openQuantityWindow(itemObj) };
	itemBox.open = () => { openQuantityWindow(itemObj) } ;
    return itemBox;
}