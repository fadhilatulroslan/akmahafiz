const tax_rate = 0.10;
const shipping_threshold = 1000;

function renderCart() {
    let cartBody = document.getElementById("cartBody");
    cartBody.innerHTML = "";
    let subtotal = 0;

    for (let i = 0; i < filenames.length; i++) {
        let total = quantities[i] * prices[i];
        subtotal += total;

        cartBody.innerHTML += `
        <tr>
            <td><img src="${filenames[i]}"></td>
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

/* Buttons */
function increaseQty(index) {
    quantities[index]++;
    renderCart();
}

function decreaseQty(index) {
    if (quantities[index] > 1) {
        quantities[index]--;
        renderCart();
    }
}

window.onload = renderCart;
