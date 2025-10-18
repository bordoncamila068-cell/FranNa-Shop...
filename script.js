const cartList = document.getElementById("cart-list");
const cartButtons = document.querySelectorAll(".cart");
const buyButtons = document.querySelectorAll(".buy");
const modal = document.getElementById("paymentModal");
const closeBtn = modal.querySelector(".close");

// --- CARRITO ---
cartButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const productCard = e.target.closest(".card");
    const name = productCard.querySelector("h3").innerText;
    const price = productCard.querySelector("p").innerText;

    const li = document.createElement("li");
    li.textContent = `${name} - ${price}`;
    cartList.appendChild(li);
  });
});

// --- BUY NOW (abrir modal) ---
buyButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

// --- CERRAR MODAL ---
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// --- Métodos de pago ---
modal.querySelector(".transfer").addEventListener("click", () => {
  alert("Has elegido pagar con Transferencia ✅");
  modal.style.display = "none";
});

modal.querySelector(".cash").addEventListener("click", () => {
  alert("Has elegido pagar en Efectivo 💵");
  modal.style.display = "none";
});

// Cerrar modal al hacer clic fuera
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
