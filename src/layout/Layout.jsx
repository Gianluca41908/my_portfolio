import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
    return (
        <div className="d-flex flex-column min-vh-100" >
            
            <Header />

            {/* Contenuto centrale che cresce */}
            <div className="flex-grow-1 d-flex flex-column">
                <Outlet />
            </div>

            {/* <Footer /> */}
        </div>
    )
}