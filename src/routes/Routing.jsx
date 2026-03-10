import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";

export default function Routing() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
            </Route>
        </Routes>
    );
}