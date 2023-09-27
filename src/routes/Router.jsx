import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import { Root } from '../Componentes/Root/Root.jsx';
import Home from '../Componentes/Pages/Home/Home.jsx';
import Inicio from '../Componentes/Login/Inicio/Inicio.jsx';
import Registro from '../Componentes/Login/Registro/Registro.jsx';


export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<Root />} path="/">
                <Route element={<Home/>} index/>

                <Route element={<Inicio/>} path="/login" />
                <Route element={<Registro/>} path="/registrarme" />
            </Route>
        </>
    )
);