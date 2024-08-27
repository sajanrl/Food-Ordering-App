import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";



const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    // const store = useSelector((store) => store);
    // const cartItems = store.cart.items;

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div>
            <div className="text-center">
            <h1 className="font-bold p-6 m-4">Cart</h1>
            <button className="text-white bg-black p-2 rounded-lg"
            onClick={handleClearCart}
            >Clear Cart</button>
            { cartItems.length === 0 && <h1 className="p-48">Your cart is empty, add something to the Cart</h1>}
            </div>
            <div className="w-6/12 m-auto">
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;