function openQuantityWindow(item)
{
    setModal(true);
    document.getElementById("quantityDiv").style.display = "table";
    document.getElementById("cartContainer").style.display = "none";
    document.getElementById("quantityTitle").textContent = item.name;
    document.getElementById("quantityImg").src = "images/" + item.image;
    document.getElementById("quantityDesc").innerText = item.desc;
    document.getElementById("quantityNum").textContent = 1;
    document.getElementById("increaseQuantity").onclick = () => { changeQuantity(1, item); }
    document.getElementById("decreaseQuantity").onclick = () => { changeQuantity(-1, item); }
    document.getElementById("quantityPrice").textContent = "$" + (item.price * 1).toFixed(2);
    document.getElementById("addToCart").onclick = () => { addToCart(item); }
}

function changeQuantity(amount, item)
{
    let quantity = document.getElementById("quantityNum");
    let finalQuantity = Math.max(1, parseInt(quantity.textContent) + amount);
    quantity.textContent = finalQuantity;
    document.getElementById("quantityPrice").textContent = "$" + (item.price * finalQuantity).toFixed(2);
}