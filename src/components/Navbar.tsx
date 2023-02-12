import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCartIsOpen } from "../state/cart";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.css";

const Navbar = (): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state: any) => state.cartState.cart);
    const toggleCart = () => dispatch(setCartIsOpen());

    return (
        <nav className="navbar">
            <h1>Store Name</h1>
            <form className="search-section">
                <input type="text" placeholder="Search items..." />
                <IconButton sx={{ '&:hover': {backgroundColor: "RGBA(163,163,163,0.50)"}}} >
                    <SearchIcon className="search-icon"></SearchIcon>
                </IconButton>
            </form>
            <div>
                <div>Browse</div>
                <div>Search</div>
                <div>Cart</div>
            </div>
        </nav>
    );
};

export default Navbar;
