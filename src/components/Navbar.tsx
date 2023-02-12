import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCartIsOpen } from "../state/cart";
import "./Navbar.css";

const Navbar = (): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state: any) => state.cartState.cart);
    const toggleCart = () => dispatch(setCartIsOpen());

    return (
        <nav className="navbar">
            <h1>Store Name</h1>
            <div>
                <div>Browse</div>
                <div>Search</div>
                <div>Cart</div>
            </div>
        </nav>
    );
};

export default Navbar;
