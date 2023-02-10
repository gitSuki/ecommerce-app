import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { increaseItemCount, decreaseItemCount, removeFromCart, setCartIsOpen } from "../state/cart";
import { useNavigate } from "react-router-dom";

const CartMenu = (): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state: any) => state.cartState.cart);
    const isCartOpen = useSelector((state: any) => state.cartState.isCartOpen);

    const totalPrice = cart.reduce((total: number, currItem: any) => {
        return total + currItem.count * currItem.price;
    }, 0);

    return (<Box></Box>);
};

export default CartMenu;
