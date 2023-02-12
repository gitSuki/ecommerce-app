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
                <input className="search-input" placeholder="Search items..." type="text"></input>
                <IconButton sx={{ "&:hover": { backgroundColor: "RGBA(163,163,163,0.25)" } }}>
                    <SearchIcon sx={{ color: "#cccccc" }}></SearchIcon>
                </IconButton>
            </form>
            <div>
                <IconButton sx={{ "&:hover": { backgroundColor: "RGBA(163,163,163,0.25)" } }}>
                    <svg
                        className="cart-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M16 6v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h18v-18h-5zm-7-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm10 18h-14v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v14z" />
                    </svg>
                </IconButton>
            </div>
        </nav>
    );
};

export default Navbar;
