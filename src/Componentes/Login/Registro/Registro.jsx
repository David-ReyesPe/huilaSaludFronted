import React from "react";

export function Registro() {
  return (
    <div className=" w-full h-full md:h-[700px] bg-[url('C:\Users\drako\OneDrive\Documentos\Proyectos\HUILA-SALUD\huilaSalud\src\assets\Images\indexResponsive.png')] md:bg-[url('C:\Users\drako\OneDrive\Documentos\Proyectos\HUILA-SALUD\huilaSalud\src\assets\Images\index.png')]  ">
      <div className="flex justify-center place-items-center p-10 gap-24 md:h-[700px]">
        <div className="w-full max-w-md max-h-15">
          <form className="bg-white shadow-md rounded border-2 px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-[#053B50] text-sm font-bold mb-2"
                htmlFor="username"
              >
                Nombre
              </label>
              <input
                placeholder="Nombre"
                type="text"
                name="nombre"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
              />
            </div>
            
            <div className="mb-4">
              <label
                className="block text-[#053B50] text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                placeholder="¿cual es tu correo?"
                type="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-[#053B50] text-sm font-bold mb-2"
                htmlFor="emailVerificacion"
              >
                Verifica tu email
              </label>
              <input
                placeholder="Email"
                type="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="emailVerificacion"
              />
            </div>
            

            <div className="mb-6">
              <label
                className="block text-[#053B50] text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                placeholder="Contraseña"
                type="password"
                name="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
              />
            </div>
            <div className="flex  justify-between">
              <button className="px-3 py-2 text-sm bg-[#053B50] hover:bg-[#092530] text-white font-bold rounded-full focus:outline-none focus:shadow-outline">
                Iniciar Sesion
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registro;
