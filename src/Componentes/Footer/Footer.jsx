import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="div">
      <footer className="bottom-0 left-0 z-20 w-full gap-11 bg-[#053B50] px-4 py-4 md:px-24">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:justify-between gap-3 mb-10">
            <div className="items-start flex flex-col justify-stretch mb-6 md:mb-0">
              <img
                className="h-[86px] w-[230px]"
                alt="Logo blanco"
                src="src\assets\Images\Logo.png"
              />
              <p className="text-white text-[14px] md:text-[16px] md:text-lg p-2 w-full md:w-96 text-left cursor-default">
                Conectando pacientes con atención de calidad, cuando y donde lo
                necesiten.
              </p>
              <div>
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ color: "#EEEEEE" }}
                  className="h-8 p-2 cursor-default"
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ color: "#EEEEEE" }}
                  className="h-8 p-2 cursor-default"
                />
                <FontAwesomeIcon
                  icon={faYoutube}
                  style={{ color: "#EEEEEE" }}
                  className="h-8 p-2 cursor-default"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-16 sm:grid-cols-3 sm:self-end mb-2">
              <div className="">
                <h2 className=" md:mb-2 text-[16px] md:text-[20px] font-semibold text-white uppercase cursor-default">
                  Citas
                </h2>
                <p className=" md:mb-2.5 text-white text-[14px] md:text-[14px] md:text-lg hover:text-[#a7a7a7] cursor-pointer">
                  Presencial
                </p>
                <p className=" md:mb-1.5 text-white text-[14px] md:text-[14px] md:text-lg hover:text-[#a7a7a7] cursor-pointer">
                  Virtual
                </p>
                <p className=" md:mb-2 text-white text-[14px] md:text-[14px] md:text-lg hover:text-[#a7a7a7] cursor-pointer">
                  Domiciliaria
                </p>
              </div>

              <div className="">
                <h2 className=" md:mb-2 text-[16px] md:text-[20px] font-semibold text-white uppercase cursor-default">
                  Legal
                </h2>
                <p className=" md:mb-2.5 text-white text-[16px] md:text-[14px] md:text-lg hover:text-[#a7a7a7] cursor-pointer">
                  Cookies
                </p>
                <p className=" md:mb-1.5 text-white text-[16px] md:text-[14px] md:text-lg hover:text-[#a7a7a7] cursor-pointer">
                  Terminos
                </p>
                <p className=" md:mb-2 text-white text-[16px] md:text-[14px] md:text-lg hover:text-[#a7a7a7] cursor-pointer">
                  Condiciones
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-[16px] md:text-[20px] font-semibold text-white uppercase cursor-default">
                  Contáctanos
                </h2>
                <p className=" mb-1.5 md:mb-2 direcci-n-AV-a">
                  <span className="text-white text-[12px] md:text-[14px] md:text-lg cursor-default">
                    Neiva - Huila
                  </span>
                </p>
                <p className=" mb-1 md:mb-1.5 email-fundasoftmiss">
                  <span className="text-white text-[12px] md:text-[14px] md:text-lg cursor-default">
                    {" "}
                    example@gmail.com
                  </span>
                </p>
                <p className=" mb-1.5 md:mb-2 div-2">
                  <span className=" text-white text-[12px] md:text-[14px] md:text-lg cursor-default">
                    3100000000
                  </span>
                </p>
                <div className="text-white text-[16px] md:text-[14px] md:text-lg cursor-default">
                  www.huilasalud.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-[#EEEEEE]" />
        <div className="flex-row md:flex text-[14px] md:text-[12px] md:mt-2 mt-2 text-white cursor-default">
          <span>&copy;2023 Huila Salud.</span>
          <span className="hidden md:inline-block">
            Todos los derechos reservados
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
