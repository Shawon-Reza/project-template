import {
    createBrowserRouter,
} from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar></Navbar>,
    },
]);






export default router;