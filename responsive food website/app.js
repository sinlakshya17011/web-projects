var swiper = new Swiper('.mySwiper', {
  loop: true,
  navigation: {
    nextEl: '#prev',
    prevEl: '#next',
  },
});

const cartIcon = document.querySelector(".cart-icon");
const cartTab = document.querySelector(".cart-tab");
const closeBtn = document.querySelector(".close-btn");
const cardList = document.querySelector(".card-list");
const cartList = document.querySelector(".cart-list");
const cartTotal = document.querySelector(".cart-total");
const cartValue = document.querySelector(".cart-bag");
const hamBurger = document.querySelector(".hambrg");
const mobileMenu = document.querySelector(".mob-menu");
const Bars = document.querySelector(".fa-bars");


cartIcon.addEventListener('click', () => cartTab.classList.add("cart-tab-active"));
closeBtn.addEventListener('click', () => cartTab.classList.remove("cart-tab-active"));
hamBurger.addEventListener('click', () => mobileMenu.classList.toggle('.mob-menu-action'));
hamBurger.addEventListener('click', () => Bars.classList.toggle('.fa-xmarks'));

let productList = [];
let cartProduct = [];

const updateTotals = () => {

  let totalPrice = 0;
  let totalQuantity = 0;


  document.querySelectorAll(".item").forEach(item => {
     const quantity = parseInt(item.querySelector(".quantity-value").textContent);

     const price = parseFloat(item.querySelector(".item-total").textContent.replace('$' , ''));

     totalPrice += price;
     totalQuantity += quantity;
  })

  cartTotal.textContent = `$${totalPrice.toFixed(2)}`
  cartValue.textContent = totalQuantity;
}

const showCards = () => {

  productList.forEach(product => {

    const orderCart = document.createElement("div");
    orderCart.classList.add("order-card");

    orderCart.innerHTML = `
      <div class="card-img">
      <img src="${product.image}">
      </div>
      <h4>${product.name}</h4>
      <h4 class="price">${product.price}</h4>
      <a href="#" class="btn card-btn">Add to Cart</a>`;

    cardList.appendChild(orderCart);

    const cardBtn = orderCart.querySelector(".card-btn")
    cardBtn.addEventListener("click", (e) => {

      e.preventDefault();
      AddtoCart(product);
    });

  });

};



const AddtoCart = (product) => {

  const existingProduct = cartProduct.find(item => item.id === product.id);
  if (existingProduct) {
    alert("This Product already added");
    return;

  }

  cartProduct.push(product);
  let quantity = 1;
  let price = parseFloat(product.price.replace("$", ""))

  const cartItem = document.createElement("div");
  cartItem.classList.add("item");

  cartItem.innerHTML = ` 
        <div class="item-image">
            <img src="${product.image}">
          </div>

          <div class = "details">
            <h4>${product.name}</h4>
            <h4 class="item-total">${product.price}</h4>
          </div>

          <div class="flex">
            <a href="#" class="quantity-btn minus">
              <i class="fa-solid fa-minus"></i>
            </a> 
               
          <h4 class="quantity-value">${quantity}</h4>  

             <a href="#" class="quantity-btn plus">
              <i class="fa-solid fa-plus"></i>
             </a> 
        </div> `;

  cartList.appendChild(cartItem);
  updateTotals();


  const plusBtn = cartItem.querySelector(".plus");
  const quantityValue = cartItem.querySelector('.quantity-value');
  const itemTotal = cartItem.querySelector(".item-total");
  const minusBtn = cartItem.querySelector(".minus");

  plusBtn.addEventListener("click", (e) => {
    e.preventDefault()
    quantity++;
    quantityValue.textContent = quantity;
    itemTotal.textContent = `$${(price * quantity).toFixed(2)}`
    updateTotals();
  });

  minusBtn.addEventListener("click", (e) => {
    e.preventDefault()

    if (quantity > 1) {
      quantity--;
      quantityValue.textContent = quantity;
      itemTotal.textContent = `$${(price * quantity).toFixed(2)}`
      updateTotals();
    }
    else {

      cartItem.classList.add("item-slideout")

      setTimeout(() => {
        cartItem.remove();
        cartProduct = cartProduct.filter(item => item.id !== product.id);
        updateTotals();

      }, 300)


    }
  })
}

const initApp = () => {

  fetch("products.json").then
    (response => response.json()).then
    (data => {
      productList = data;
      showCards();
    })
}

initApp();