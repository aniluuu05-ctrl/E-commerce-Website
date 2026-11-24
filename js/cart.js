let Totalprice = 0;
const cart = document.querySelector(".cart");
const CartIcon = document.querySelector("#cart-icon");
const CartClose = document.querySelector("#cart-close");
const cartcontent = document.querySelector(".cart-content");
const Total_price = document.querySelector(".total-price");

CartIcon.addEventListener("click",() => cart.classList.add("active"));
CartClose.addEventListener("click",() => cart.classList.remove("active"));
const addcartButtons = document.querySelectorAll(".add-cart");
addcartButtons.forEach(button => {
    button.addEventListener("click", event => {
        const productBox = event.target.closest(".product-class");
        addToCart(productBox);
    })
});


const addToCart = productBox => {
    const productImgSrc = productBox.querySelector("img").src;
    const productPrice = productBox.querySelector(".price").textContent;
    const productTitle = productBox.querySelector(".product-title").textContent;
    
    cartItems = cartcontent.querySelectorAll(".cart-product-title");
    for (let Item of cartItems){
        if(Item.textContent == productTitle){
            alert("Item already exists in cart");
            return;
        } 
    }
    const CartBox = document.createElement("div");
    CartBox.classList.add("cart-box");
    CartBox.innerHTML = `
            <img src="${productImgSrc}" class="cart-img">
            <div class="cart-detail">
                <h2 class="cart-prodcut-detail"></h2>
                <p class="cart-product-title">${productTitle}</p>
                <span class="cart-price">${productPrice}</span>
                <div class="cart-quantity">
                    <button id="decrement">-</button>
                    <span class="number">0</span>
                    <button id="increment">+</button>
                </div>
            </div>
            <i class="ri-delete-bin-fill cart-remove"></i>
        `;
    let Cartproductprice = CartBox.querySelector(".cart-price");
    Totalprice +=parseFloat(Cartproductprice.textContent);
    Total_price.textContent = Totalprice;
    
    cartcontent.appendChild(CartBox);
    const cartremovebutton = CartBox.querySelector(".cart-remove");
    cartremovebutton.addEventListener("click",()=>{
        let removeprice = CartBox.querySelector(".cart-price");
        let quantity = CartBox.querySelector(".number");
        CartBox.remove();
        removetotalPrice(removeprice,quantity);
        
    })

    const itemquantity = CartBox.querySelector(".number");
    const incrementButton = CartBox.querySelector("#increment");
    const decrementButton = CartBox.querySelector("#decrement");
    incrementButton.addEventListener("click",()=>{
        let  incQuantiy = CartBox.querySelector(".number");
        let  itemprice = CartBox.querySelector(".cart-price");
        if(parseFloat(incQuantiy.textContent)<=4){
            incQuantiy.textContent = parseFloat(incQuantiy.textContent)+1;
            incTotalPrice(itemprice);
        }
    })
    decrementButton.addEventListener("click",()=>{
        let  decQuantiy = CartBox.querySelector(".number");
        let  itemprice = CartBox.querySelector(".cart-price");
        if (parseFloat(decQuantiy.textContent)>1){
            decQuantiy.textContent = parseFloat(decQuantiy.textContent)-1;
            DecreseTotalPrice(itemprice);
        }
    })

    function removetotalPrice(removeprice,quantity){
        Totalprice -= parseFloat(removeprice.textContent)*parseFloat(quantity.textContent);
        Total_price.textContent = Totalprice;
    }
    function incTotalPrice(itemprice){
        Totalprice +=parseFloat(itemprice.textContent);
        Total_price.textContent = Totalprice;
    }


    function DecreseTotalPrice(removeprice){
        Totalprice -=parseFloat(removeprice.textContent);
        Total_price.textContent = Totalprice;
    }
    let itemCount = 0;
    let cartitemcount = document.querySelector(".cart-item-count");


    itemquantity.textContent = parseFloat(itemquantity.textContent) + 1;

}
