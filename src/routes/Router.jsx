import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import { Root } from '../Componentes/Root/Root.jsx';


export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<Root />} path="/">

            </Route>
        </>
    )
);