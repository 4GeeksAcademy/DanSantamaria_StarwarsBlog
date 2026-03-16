import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import fondo from "../assets/img/starwars_fondo.jpg";

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <ScrollToTop>
            <body style={{
                backgroundImage: `url(${fondo})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh"
            }}>
                <Navbar />
                <hr className="hr-thick" />
                <Outlet />
                <hr className="hr-thick" />
                <Footer />
            </body>
        </ScrollToTop>
    )
}