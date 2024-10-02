import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";

export const Routeo = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
        </Routes>
    )
}