// @flow
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouse,faHeadset,faHouseMedical} from '@fortawesome/free-solid-svg-icons'

export function Bienvenidos() {
  
  return (
    <div>
      <div className=''>
        <section>
          <div className="flex justify-center p-10 gap-24 ">
            <div className="w-full max-w-3xl max-h-26">
              <form className='bg-cyan-950 shadow-md rounded border-10 px-8 mb-4'>
                <div className='block '>
                  <ul className='flex gap-14 list-none py-6'>
                    <li>
                      <input className='peer opacity-0' type="checkbox" name='Domiciliaria' id='Domiciliaria'/>
                      
                      <label className='p-4 text-white text-center inline-block bg-transparent border-2 border-white rounded-full w-36 h-15 peer-checked:text-black peer-checked:bg-white cursor-pointer' htmlFor='Domiciliaria'>
                        <FontAwesomeIcon icon={faHouse}/>
                        &nbsp;Domiciliaria
                      </label>
                    </li>
                    <li>
                      <input className='peer opacity-0' type="checkbox" name='Virtual' id='Virtual'/>
                      <label className='p-4 text-white text-center inline-block bg-transparent border-2 border-white rounded-full w-36 h-15 peer-checked:text-black peer-checked:bg-white cursor-pointer' htmlFor='Virtual'>
                        <FontAwesomeIcon icon={faHeadset}/>
                        &nbsp;Virtual
                      </label>
                    </li>
                    <li>
                      <input className='peer opacity-0' type="checkbox" name='Consultorio' id='Consultorio'/>
                      <label className='p-4 text-white text-center inline-block bg-transparent border-2 border-white rounded-full w-36 h-15 peer-checked:text-black peer-checked:bg-white cursor-pointer' htmlFor='Consultorio'>
                        <FontAwesomeIcon icon={faHouseMedical}/>
                        &nbsp;Consultorio
                      </label>
                    </li>
                  </ul>
                  <div className='flex pb-6'>
                    <div className=''>
                      
                      <input placeholder="&nbsp;&nbsp;&nbsp;Nombre"
                        type={"text"}
                        name="nombre"
                        className=" shadow appearance-none border rounded-l-full w-80 h-12 " id="NombreC" />
                    </div>

                    <div className=''>
                      <input placeholder="&nbsp;&nbsp;Direccion"
                        type={"text"}
                        name="direccion"
                        className=" shadow appearance-none border rounded-r-full w-full h-12" id="Direccion"/>
                    </div>
                    <div className='h-10 ml-16  '>
                      <button
                        onClick={() => navigate("/login")}
                        type="button"
                        className="text-white bg-[#176B87] hover:bg-[#64CCC5] hover:text-black py-3 px-7 text-lg font-semibold rounded-full ">
                        Enviar
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Bienvenidos