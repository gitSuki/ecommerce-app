import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from '@mui/icons-material/Search';
import { setCartIsOpen } from "../state/cart";

const Navbar = (): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state: any) => state.cartState.cart);
    const toggleCart = () => dispatch(setCartIsOpen());

    return (
        <Box display="flex" alignItems="center" width="100%" height="60px" position="fixed" top="0" left="0" zIndex="1">
            <Box display="flex" alignItems="center" justifyContent="center" margin="auto" width="80%">
                <Box onClick={() => navigate("/")}>Title</Box>
                <Box display="flex" justifyContent="space-between" columnGap="20px" zIndex="2">
                    <button>Products</button>
                    <IconButton>
                        <SearchIcon></SearchIcon>
                    </IconButton>
                    <IconButton onClick={toggleCart}>
                        <Badge
                            badgeContent={cart.length}
                            invisible={cart.length === 0}
                            sx={{
                                "& .MuiBadge-badge": {
                                    right: 25,
                                    top: 20,
                                    padding: "0 4px",
                                    height: "20px",
                                    minWidth: "13px",
                                },
                            }}
                        >
                            <ShoppingCartIcon></ShoppingCartIcon>
                        </Badge>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Navbar;
