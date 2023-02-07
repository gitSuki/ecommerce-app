import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/Home";

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
            <ScrollToTop></ScrollToTop>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
