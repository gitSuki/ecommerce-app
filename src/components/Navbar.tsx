import { useDispatch, useSelector } from "react-redux";
import { setCartIsOpen } from "../state/cart";
import { Badge, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = (): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state: any) => state.cartState.cart);

    return (
        <Box display="flex" alignItems="center" width="100%" height="60px" position="fixed" top="0" left="0" zIndex="1">
            <Box display="flex" alignItems="center" justifyContent="center" margin="auto" width="80%">
                <Box onClick={() => navigate("/")}>Title</Box>
                <Box display="flex" justifyContent="space-between" columnGap="20px" zIndex="2">
                    <Badge badgeContent={cart.length} invisible={cart.length === 0}>
                        <Box onClick={() => dispatch(setCartIsOpen())}>Add to the Cart</Box>
                    </Badge>
                </Box>
            </Box>
        </Box>
    );
};

export default Navbar;
