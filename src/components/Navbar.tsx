import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCartIsOpen } from "../state/cart";
import { IconButton, TextField } from "@mui/material";
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
                <TextField
                    label="Search Items..."
                    variant="filled"
                    sx={{
                        input: { color: "#cccccc", backgroundColor: "#262626" },
                        label: { color: "#828181" },
                    }}
                />
                <IconButton sx={{ "&:hover": { backgroundColor: "RGBA(163,163,163,0.50)" } }}>
                    <SearchIcon sx={{ color: "#cccccc" }}></SearchIcon>
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
