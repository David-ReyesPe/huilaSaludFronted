// @flow
import * as React from "react";
import { useNavigate } from "react-router-dom";


export function Navbar() {

  const navigate = useNavigate();


  return (
    <div>
      <nav className="bg-cyan-950 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 ">
          <img
            className="h-[70px] w-[200px]"
            alt="Logo blanco"
            src="src\assets\Images\Logo.png"
          />
          <a className="flex items-center"></a>

          <div
            className={`items-center block justify-between w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="flex text-white flex-col md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-cyan-950 dark:border-gray-700 p-5">
              <li className="py-2 lg:py-0 text-lg text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex lg:pt-0">
                <a
                  href="/"
                  className="md:bg-transparent  hover:text-[#64CCC5] md:p-0 md:hover:text-[#64CCC5]"
                >
                  Inicio
                </a>
              </li>

              <li>
                <button
                  onClick={() => navigate("/Login")}
                  type="button"
                  className="text-white bg-[#176B87] hover:bg-[#64CCC5] hover:text-black py-1.5 px-5 text-lg font-semibold rounded-full"
                >
                  Iniciar Sesion
                </button>
              </li>
              <li className="py-2 lg:py-0 ">
                <button
                  onClick={() => navigate("/registrarme")}
                  type="button"
                  className="text-white bg-[#176B87] hover:bg-[#64CCC5] hover:text-black py-1.5 px-5 text-lg font-semibold rounded-full"
                >
                  Registrarme
                </button>
              </li>
              <li className="py-2 lg:py-0 text-center">
                <button
                  type="button"
                  className="text-white bg-[#176B87] hover:bg-[#64CCC5] hover:text-black  py-1.5 px-5 text-lg font-semibold rounded-full"
                >
                  Cerrar Sesion
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
