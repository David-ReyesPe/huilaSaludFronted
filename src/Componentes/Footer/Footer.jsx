import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="di">
            <footer className="bottom-0 left-0 z-20 w-full gap-11 bg-[#071952] px-4 py-4 md:px-24">
                <div className="mx-auto w-full max-w-screen-xl">
                    <div className="flex flex-col md:flex-row md:justify-around">
                        <div className="items-start flex flex-col justify-center mb-6 md:mb-0">
                            <img
                                className="h-[120px] w-[226px]"
                                alt="Logo blanco"
                                src="src\Componentes\Footer\Images\footerLogo.png" />
                            <p className="text-white text-base md:text-lg p-5 w-full md:w-96 text-left">
                               Conectando pacientes con atención de calidad, cuando y donde lo necesiten.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:gap-16 sm:grid-cols-2">
                            <div className=" self-end justify-start mb-3">
                                <h2 className=" md:mb-2 text-[24px] md:text-[32px] font-semibold text-white uppercase">Citas</h2>
                                <p className=" md:mb-2.5 text-white text-base md:text-lg underline inline-block">Presencial</p>
                                <p className=" md:mb-1.5 text-white text-base md:text-lg underline inline-block ml-3">Virtual</p>
                                <p className=" md:mb-2 text-white text-base md:text-lg underline inline-block ml-3">Domiciliaria</p>
                            </div>
                            <div>
                                <h2 className="mb-4 md:mb-6 text-[24px] md:text-[32px] font-semibold text-white uppercase">Contáctanos</h2>
                                <p className=" mb-1.5 md:mb-2 direcci-n-AV-a">
                                    <span className="mb-1.5 md:mb-2 text-white text-base md:text-lg font-bold">Dirección: </span>
                                    <span className="text-white text-base md:text-lg">AV 26 # 26 A - 05 B/Las Granjas</span>
                                </p>
                                <p className=" mb-1 md:mb-1.5 email-fundasoftmiss">
                                    <span className=" text-white text-base md:text-lg font-bold">Email:</span>
                                    <span className="text-white text-base md:text-lg"> example@gmail.com</span>
                                </p>
                                <p className=" mb-1.5 md:mb-2 div-2">
                                    <span className=" text-white text-base md:text-lg font-bold">Teléfono: </span>
                                    <span className=" text-white text-base md:text-lg">3100000000</span>
                                </p>
                                <div className="text-white text-base md:text-lg">www.huilasalud.com</div>
                                <div className="p-4">
                                    <FontAwesomeIcon icon={faFacebook}  style={{ color: "#f2f7a1" }} className='h-8 px-2' />
                                    <FontAwesomeIcon icon={faTwitter}  style={{ color: "#f2f7a1" }} className='h-8 px-2' />
                                    <FontAwesomeIcon icon={faYoutube}  style={{ color: "#f2f7a1" }} className='h-8 px-2' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='w-full items-center flex flex-col-reverse md:flex-row bg-[#35a29f] px-4 py-4 md:px-24 text-center justify-between'>
                <div className="md:flex items-center text-lg">
                    <span>&copy;2023 Huila Salud.</span>
                    <span className="hidden md:inline-block">Todos los derechos reservados</span>
                </div>
                <div className="md:flex leading-normal gap-4 md:gap-10 underline text-lg mt-2 md:mt-0 ">
                    <span>Políticas de Cookies</span>
                    <span>Términos y condiciones</span>
                </div>
            </div>
        </div>
    )
}

export default Footer