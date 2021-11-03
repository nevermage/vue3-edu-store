import {createApp} from "vue";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";
import  products from "./components/products";
import  cartButton from "./components/cartButton";
import cartModal from "./components/cartModal";

const app = createApp({
    data: () => ({
       cartProducts: [],
    }),
    methods: {
        addToCart(product) {
            if (this.cartProducts.find((i, index)=> i==product)) {
                alert("already in cart");
            } else {
                product['quantity'] = 1;
                this.cartProducts.push(product);
            }
        },
        deleteFromCart(product) {
            this.cartProducts.splice(this.cartProducts.indexOf(product), 1)
        },
        cartPlusQuantity(product) {
            let x = this.cartProducts.indexOf(product);
            this.cartProducts[x]['quantity']++;
        },
        cartMinusQuantity(product) {
            let x = this.cartProducts.indexOf(product);
            this.cartProducts[x]['quantity']--;
        },
        formSubmit() {
            console.log(this.cartProducts);
            this.cartProducts = [];

        },
    }
});

app.component('products', products);
app.component('cart-button', cartButton);
app.component('cart-modal', cartModal);

app.mount("#app");
