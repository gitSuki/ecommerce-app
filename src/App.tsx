import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Checkout from "./scenes/Checkout";
import Home from "./scenes/Home";
import ItemDetails from "./scenes/ItemDetails";

const ScrollToTop = (): JSX.Element => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return <></>;
};

const App = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <ScrollToTop></ScrollToTop>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="item:Id" element={<ItemDetails></ItemDetails>}></Route>
                <Route path="checkout" element={<Checkout></Checkout>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
