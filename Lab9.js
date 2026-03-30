const tax_rate = 0.10;
const shipping_threshold = 1000;

function renderCart() {
    let cartBody = document.getElementById("cartBody");
    if (!cartBody) return;
    
    cartBody.innerHTML = "";
    let subtotal = 0;

    for (let i = 0; i < filenames.length; i++) {
        let total = quantities[i] * prices[i];
        subtotal += total;

        cartBody.innerHTML += `
        <tr>
            <td><img src="${filenames[i]}" alt="${titles[i]}"></td>
            <td>${titles[i]}</td>
            <td class="center">
                <button onclick="decreaseQty(${i})">−</button>
                ${quantities[i]}
                <button onclick="increaseQty(${i})">+</button>
            </td>
            <td class="right">RM ${prices[i].toFixed(2)}</td>
            <td class="right">RM ${total.toFixed(2)}</td>
        </tr>
        `;
    }

    let tax = subtotal * tax_rate;
    let shipping = subtotal > shipping_threshold ? 0 : 40;
    let grand = subtotal + tax + shipping;

    document.getElementById("subtotal").innerHTML = "RM " + subtotal.toFixed(2);
    document.getElementById("tax").innerHTML = "RM " + tax.toFixed(2);
    document.getElementById("shipping").innerHTML = "RM " + shipping.toFixed(2);
    document.getElementById("grand").innerHTML = "RM " + grand.toFixed(2);
}

// Increase quantity
function increaseQty(index) {
    quantities[index]++;
    renderCart();
}

// Decrease quantity
function decreaseQty(index) {
    if (quantities[index] > 1) {
        quantities[index]--;
        renderCart();
    }
}

// Load cart when page loads
window.onload = renderCart;
