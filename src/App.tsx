import "./App.css";

import {
  FaNodeJs,
  FaDocker,
  FaReact,
  FaDatabase,
  FaAngular,
  FaArrowUp,
} from "react-icons/fa"; // Ejemplo con react-icons

import { BiLogoTypescript } from "react-icons/bi";
import { SiSequelize, SiCsharp } from "react-icons/si";
import { MdOpenInNew } from "react-icons/md";

import { useEffect, useState } from "react";

interface CardData {
  id: number;
  type: string;
  title: string;
  description: string;
  link: string;
  tech: string[];
  img: string;
}

function App() {
  const [cards, setCards] = useState<CardData[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showButton, setShowButton] = useState<boolean>(false);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    // Fetch JSON data
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching data:", error));

    // Handle scroll event
    const handleScroll = () => {
      const secondSectionTop = window.innerHeight; // Top of the second section
      const currentScroll = window.scrollY;

      if (currentScroll >= secondSectionTop) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array means this runs once when component mounts

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* section 1 */}
      <div
        id="section1"
        className="flex items-center flex-col w-full min-h-screen h-full"
      >
        <div className="w-full bg-white h-2/5 p-0 text-black flex flex-col justify-end items-center">
          <div className="flex flex-col items-center relative z-10 transform translate-y-1/2">
            <img
              className="rounded-full object-cover w-48 h-48 border-2 border-black object-bottom"
              src="/profile.jpg"
              alt="profile"
            />
            <p className="text-white font-bold text-4xl mt-2">
              Eder Rimarachin R.
            </p>
          </div>
        </div>

        <div className="w-full bg-blue-600 h-3/5 p-0 text-white flex flex-col justify-end items-center">
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <p className="text-justify">
              Hola, soy Eder, Desarrollador Full Stack ☕. Me especializo en
              tecnologías Backend, que son mi verdadera pasión. Disfruto
              aprendiendo nuevas tecnologías y expandiendo mis conocimientos
              continuamente.
            </p>
            <br />
            <p className="font-normal text-white dark:text-white italic">
              "Si puedes imaginarlo, puedes programarlo..."
            </p>
            <h5 className="mb-2 font-bold tracking-tight text-right text-gray-900 dark:text-white">
              Programación ATS
            </h5>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div
        id="section2"
        className="bg-default flex items-center flex-col w-full min-h-screen "
      >
        <div className="p-8 pt-20 w-3/5">
          <h3 className="text-left text-white text-2xl font-bold">Sobre Mì</h3>
          <hr className="border-t border-gray-300 my-4" />
          <p className="text-white pt-4 text-justify">
            ¡Hola! Mi nombre es Eder y disfruto creando cosas que duran La
            Internet. Mi interés en el desarrollo web comenzó en 2017 cuando
            Decidí usar trucos para mis juegos favoritos.
          </p>
          <p className="text-white pt-4 text-justify">
            Antes de dedicarme de lleno a la programación tuve que aprender
            habilidades blandas para poder estar en este mundo competitivo.
          </p>
          <p className="text-white pt-4 text-justify">
            Ahora, estoy desarrollando un Clone de Instagram usando Nodejs &
            Angular.
          </p>

          <div>
            <p className="text-white pt-4 text-justify">
              Aquí algunas tecnologías que tratado recietemente:
            </p>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <ul className="list-disc pl-5 text-white items-center">
                <li className="flex items-center mb-4 ">
                  <a
                    href="https://nodejs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center mx-auto"
                  >
                    <FaNodeJs className="text-green-500 mr-3 " size={24} />
                    Node.js
                  </a>
                </li>
                <li className="flex items-center mb-4">
                  <a
                    href="https://www.typescriptlang.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center  mx-auto"
                  >
                    <BiLogoTypescript
                      className="text-blue-500 mr-3"
                      size={24}
                    />
                    TypeScript
                  </a>
                </li>
                <li className="flex items-center mb-4">
                  <a
                    href="https://sequelize.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center  mx-auto"
                  >
                    <SiSequelize className="text-blue-500 mr-3" size={24} />
                    Sequelize
                  </a>
                </li>
                <li className="flex items-center mb-4">
                  <a
                    href="https://dotnet.microsoft.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row text-left mx-auto"
                  >
                    <SiCsharp className="text-violet-500 mr-3" size={24} />
                    .NET 5
                  </a>
                </li>
              </ul>

              <ul className="list-disc pl-5 text-white">
                <li className="flex items-center mb-4">
                  <a
                    href="https://www.mysql.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center  mx-auto"
                  >
                    <FaDatabase className="text-yellow-400 mr-3" size={24} />
                    SQL
                  </a>
                </li>
                <li className="flex items-center mb-4">
                  <a
                    href="https://www.docker.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center  mx-auto"
                  >
                    <FaDocker className="text-blue-500 mr-3" size={24} />
                    Docker
                  </a>
                </li>
                <li className="flex items-center mb-4">
                  <a
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center  mx-auto"
                  >
                    <FaReact className="text-blue-400 mr-3" size={24} />
                    React
                  </a>
                </li>
                <li className="flex items-center mb-4">
                  <a
                    href="https://angular.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center  mx-auto"
                  >
                    <FaAngular className="text-red-600 mr-3" size={24} />
                    Angular
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div
        id="section3"
        className="bg-violet-700 flex items-center flex-col w-full min-h-screen "
      >
        <div className="p-8 pt-20 w-3/5">
          <h3 className="text-left text-white text-2xl font-bold">
            Experiencia
          </h3>
          <hr className="border-t border-gray-300 my-4" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-default p-6 rounded-lg shadow-md text-white">
              <h2 className="text-xl font-bold mb-4">Experiencia Laboral</h2>
              <ul className="list-disc pl-5 space-y-4">
                <li>
                  <div
                    className="font-semibold cursor-pointer"
                    onClick={() => handleToggle(0)}
                  >
                    Desarrollador Backend - Holinsys S.A.C
                  </div>
                  <div className="text-sm text-gray-400">
                    Agosto 2023 - Julio 2024
                  </div>
                  {activeIndex === 0 && (
                    <p className="mt-1 text-justify">
                      Trabajé en la gestión y desarrollo de proyectos directo
                      con el cliente, Haciendo uso de tecnologías, como
                      Nodejs/Express y .Net para el BackEnd, Angular para el
                      FrontEnd y el gestor de Base de datos Sql Server.
                    </p>
                  )}
                </li>
                <li>
                  <div
                    className="font-semibold cursor-pointer"
                    onClick={() => handleToggle(1)}
                  >
                    Analista Programador - IDE Solution S.A.C
                  </div>
                  <div className="text-sm text-gray-400">
                    Agosto 2022 - Diciembre 2022
                  </div>
                  {activeIndex === 1 && (
                    <p className="mt-1  text-justify">
                      Participé en el mantenimiento y documentación de las
                      aplicaciones web del sector del área de fábrica, usando
                      Ionic para el FrontEnd, .Net, Spring boot para el BackEnd
                      y el motor de base de datos SQL Server. Implementación de
                      casos de usuario, y ejecución de pruebas tanto para
                      backend y front, usando sonarqube. Principal logro:
                      Refactorización de codigo fuente con buenas practicas.
                    </p>
                  )}
                </li>
                <li>
                  <div
                    className="font-semibold cursor-pointer"
                    onClick={() => handleToggle(2)}
                  >
                    Qa Tester - Freelancer
                  </div>
                  <div className="text-sm text-gray-400">
                    Enero 2022 - Julio 2022
                  </div>
                  {activeIndex === 2 && (
                    <p className="mt-1  text-justify">
                      Encargado del mantenimiento y documentación de
                      aplicaciones web del sector Educación e Inmobiliario. Se
                      varía entre creación de nuevas vistas, e implementación de
                      casos de usuario, usando Angular y Laravel para el
                      FrontEnd. Laravel en el BackEnd y PostgreSQL como base de
                      datos. Principal logro: Optimiazación de las consultas SQL
                      usando Eloquent.{" "}
                    </p>
                  )}
                </li>
              </ul>
            </div>
            <div className="bg-default p-6 rounded-lg shadow-md text-white">
              <h2 className="text-xl font-bold mb-4">Experiencia Educativa</h2>
              <ul className="list-disc pl-5 space-y-4">
                <li>
                  <div className="font-semibold cursor-pointer">
                    Scrum Foundation Professional Certificate | SFPC
                  </div>
                  <div className="text-sm text-gray-400">
                    <span>Junio 2022</span>
                  </div>
                </li>
                <li>
                  <div className="font-semibold cursor-pointer">
                    Ingeniería de Sistemas
                  </div>
                  <div className="text-sm text-gray-400">
                    <span>
                      Graduado de la Universidad Nacional Pedro Ruiz Gallo
                    </span>
                    <br />
                    <span>Abril 2017 - Abril 2022</span>
                  </div>
                </li>
                <li>
                  <div className="font-semibold cursor-pointer">
                    SQL Server - Intermedio
                  </div>
                  <div className="text-sm text-gray-400">
                    <span>
                      Curso de La Universidad Nacional Pedro Ruiza Gallo
                    </span>
                    <br />
                    <span>Abril 2022</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* section 4 */}
      <div
        id="section4"
        className="bg-white flex items-center flex-col w-full min-h-screen "
      >
        <div className="p-8 pt-20 w-3/5">
          <h3 className="text-left text-black text-2xl font-bold">Proyectos</h3>
          <hr className="border-t border-gray-300 my-4" />
          <p className="text-justify">
            Aqui les muestro una pequeña recopilación de los proyectos que he
            ido desarrollando a lo largo de mi experiencia como desarrollador de
            software.
          </p>
          <br />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto text-center">
            {cards.map((card) => (
              <div
                className="max-w-sm rounded overflow-hidden shadow-lg"
                key={card.id}
              >
                <img
                  className="w-full"
                  src={card.img}
                  alt="Sunset in the mountains"
                ></img>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 ">
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline flex flex-row justify-center items-center"
                    >
                      {card.title}
                      <MdOpenInNew />
                    </a>
                  </div>
                  <p className="text-gray-700 text-base">{card.description}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  {card.tech.map((technology, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      #{technology}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </>
  );
}

export default App;
