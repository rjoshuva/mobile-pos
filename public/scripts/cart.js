var cartItems = [];

$(document).ready(() => {
    // Scrolls cart item names left and right if they don't fit
    window.setInterval(() => {
        let nameBoxes = document.getElementsByClassName("itemNameBox");

        if (nameBoxes.length > 0)
        {
            for (let i = 0; i < nameBoxes.length; i++)
            {
                let box = nameBoxes[i];

                if (box.scrollLeft > 0)
                    $(box).animate({ scrollLeft: 0 }, 2000);
                else
                    $(box).animate({ scrollLeft: box.scrollWidth - box.clientWidth }, 2000);
            }
        }
    }, 3000);
});

function openCart()
{
    setModal(true);
    document.getElementById("cartContainer").style.display = "table";
    document.getElementById("quantityDiv").style.display = "none";

    cartList = document.getElementById("cartList");
    cartList.innerHTML = "";

    cartItems.forEach((item) => {
        let itemDiv = document.createElement("div");
        itemDiv.className = "cartItem";

        let deleteButton = document.createElement("span");
        deleteButton.className = "delete";
        deleteButton.innerHTML = "&times;";
        deleteButton.onclick = () => { deleteCartItem(this, item); }

        let image = document.createElement("img");
        image.src = "images/" + item.image;

        let itemNameBox = document.createElement("div");
        itemNameBox.className = "itemNameBox";

        let itemName = document.createElement("h2");
        itemName.innerText = item.name;
        itemName.className = "cartName";

        itemNameBox.appendChild(itemName);

        let subButton = document.createElement("a");
        subButton.className = "quantityButton";
        subButton.innerHTML = "&minus;";

        let addButton = document.createElement("a");
        addButton.className = "quantityButton";
        addButton.innerHTML = "&plus;";

        let itemQuantity = document.createElement("h2");
        itemQuantity.className = "cartQuantity";
        itemQuantity.textContent = item.amount;

        let totalPrice = document.createElement("h2");
        totalPrice.className = "cartPrice";
        totalPrice.textContent = "$" + (item.price * item.amount).toFixed(2);

        subButton.onclick = () => { changeCartQuantity(-1, item, itemQuantity, totalPrice); }
        addButton.onclick = () => { changeCartQuantity(1, item, itemQuantity, totalPrice); }

        itemDiv.appendChild(deleteButton);
        itemDiv.appendChild(image);
        itemDiv.appendChild(itemNameBox);
        itemDiv.appendChild(subButton);
        itemDiv.appendChild(itemQuantity);
        itemDiv.appendChild(addButton);
        itemDiv.appendChild(totalPrice);
        itemDiv.appendChild(document.createElement("br"));
        cartList.appendChild(itemDiv);

        updateCartTotal();
    });
}

function addToCart(item)
{
    let quantity = document.getElementById("quantityNum");
    let quantityNum = parseInt(quantity.textContent);

    if (cartItems.indexOf(item) != -1)
        item.amount += quantityNum;
    else
    {
        item.amount = quantityNum;
        cartItems.push(item);
    }

    alert("Added x" + quantity.textContent + " " + item.name + " to your cart!");
    //document.getElementById("openCart").style.display = "block";
    document.getElementById("openCart").classList.add("showCart");
    setModal(false);
}

function changeCartQuantity(amount, item, quantityNode, priceNode)
{
    let finalQuantity = Math.max(1, parseInt(quantityNode.textContent) + amount);
    item.amount = finalQuantity;
    quantityNode.textContent = finalQuantity;
    priceNode.textContent = "$" + (item.price * finalQuantity).toFixed(2);
    updateCartTotal();
}

function deleteCartItem(buttonNode, deleteItem)
{
    let itemDiv = buttonNode.parentNode;
    let cartIndex = cartItems.indexOf(deleteItem);

    itemDiv.parentNode.removeChild(itemDiv);
    cartItems.splice(cartIndex, 1);

    if (cartItems.length >= 1)
        updateCartTotal();
    else
    {
        setModal(false);
        document.getElementById("openCart").classList.remove("showCart");
    }
}

function updateCartTotal()
{
    let total = 0.0;

    cartItems.forEach((item) => {
        total += (item.amount * item.price);
    });

    document.getElementById("cartTotal").textContent = "Total: $" + total.toFixed(2);
}

function checkOut()
{
    let sendCart = JSON.parse(JSON.stringify(cartItems));

    sendCart.forEach((item) => {
        delete item.name;
        delete item.desc;
        delete item.image;
        delete item.price;
    });

    alert("Your Cart: " + JSON.stringify(sendCart));
}

// For Testing
function generateRandomCartItem()
{
    let index = Math.floor(Math.random() * (items.length));
    let cartItem = items[index];
    cartItem.amount = Math.floor(Math.random() * (items.length));
    return cartItem;
}