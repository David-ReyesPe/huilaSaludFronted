import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import { Root } from '../Componentes/Root/Root.jsx';
import Home from '../Componentes/Pages/Home/Home.jsx';


export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<Root />} path="/">
                <Route element={<Home/>} index/>
            </Route>
        </>
    )
);