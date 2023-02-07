import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = (): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <Box display="flex" alignItems="center" width="100%" height="60px" position="fixed" top="0" left="0" zIndex="1">
            <Box display="flex" alignItems="center" justifyContent="center" margin="auto" width="80%">
                <Box onClick={() => navigate("/")}>Title</Box>
                <Box display="flex" justifyContent="space-between" columnGap="20px" zIndex="2"></Box>
            </Box>
        </Box>
    );
};

export default Navbar;
