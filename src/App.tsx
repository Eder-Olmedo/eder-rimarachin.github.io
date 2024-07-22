import "./App.css";

import {
  FaNodeJs,
  FaDocker,
  FaReact,
  FaDatabase,
  FaAngular,
  FaLinkedin,
  FaGithub,
  FaDownload,
} from "react-icons/fa"; // Ejemplo con react-icons

import { BiLogoTypescript } from "react-icons/bi";
import { SiSequelize, SiCsharp } from "react-icons/si";

import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import ProjectCard from "./components/ProjectCard";
import ScrollToTopButton from "./components/ScrollToTopButton";

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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    // Fetch JSON data
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        // Ordenar las tarjetas por id en orden descendente
        const sortedData = data.sort((a: CardData, b: CardData) => b.id - a.id);
        setCards(sortedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array means this runs once when component mounts

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV_EDER_RIMRARCHIN.pdf"; // URL del archivo en la carpeta public
    link.download = "CV_EDER_RIMRARCHIN.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Calcular los índices de los elementos para la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cards.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(cards.length / itemsPerPage);

  return (
    <>
      {/* section 1 */}
      <div id="section1" className="flex items-center flex-col w-full h-screen">
        <div className="w-full bg-white h-2/5  text-black flex flex-col justify-end items-center">
          <div className="flex flex-col items-center relative z-100 transform translate-y-1/2">
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

        <div className="w-full bg-blue-600 h-full p-0 text-white flex flex-col justify-end items-center">
          <div className="w-full h-full flex flex-col items-center  ">
            <div className="w-full h-8 bg-gray-800 py-8  flex flex-row justify-between items-center">
              <div className="mx-1">
                <nav className="bg-gray-800 text-white ">
                  <ul className="flex flex-row space-x-4 relative z-200">
                    <li className="mx-1 cursor-pointer">
                      <a href="#section2" className="hover:underline">
                        Sobre Mí
                      </a>
                    </li>
                    <li className="mx-1 cursor-pointer hidden md:block">
                      <a href="#section3" className="hover:underline ">
                        Experiencia
                      </a>
                    </li>
                    <li className="mx-1 cursor-pointer">
                      <a href="#section4" className="hover:underline">
                        Proyectos
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="mx-2">
                <ul className="flex flex-row space-x-4 relative z-200">
                  {/* LinkedIn */}
                  <li
                    className="flex items-center  cursor-pointer"
                    title="Ver LinkedIn"
                  >
                    <a
                      href="https://www.linkedin.com/in/eder-rimarachinr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:underline space-x-2 flex flex-row cursor-pointer"
                    >
                      <FaLinkedin className="text-blue-700 mr-1" size={24} />
                      LinkedIn
                    </a>
                  </li>

                  {/* GitHub */}
                  <li
                    className="items-center space-x-2 cursor-pointer hidden md:flex"
                    title="Ver GitHub"
                  >
                    <a
                      href="https://github.com/eder-rimarachinr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:underline"
                      title="GitHub"
                    >
                      <FaGithub className="text-white" size={24} />
                    </a>
                  </li>

                  {/* CV Download */}
                  <li
                    className="flex items-center space-x-2 cursor-pointer"
                    title="Descargar CV"
                    onClick={handleDownload}
                  >
                    <FaDownload className="text-green-500" size={24} />
                  </li>
                </ul>
              </div>
            </div>
            <div className="block max-w-sm p-6 mt-28 mb-16 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
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
      </div>

      {/* section 2 */}
      <div
        id="section2"
        className="bg-default flex items-center flex-col w-full min-h-screen"
      >
        <div className="p-8 pt-20 w-4/5">
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
        <div className="p-8 pt-20 w-4/5">
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
        <div className="p-8 pt-20 w-4/5">
          <h3 className="text-left text-black text-2xl font-bold">Proyectos</h3>
          <hr className="border-t border-gray-300 my-4" />
          <p className="text-justify">
            Aqui les muestro una pequeña recopilación de los proyectos que he
            ido desarrollando a lo largo de mi experiencia como desarrollador de
            software.
          </p>
          <br />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
          <br />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto text-center">
            {currentItems.map((card) => (
              <ProjectCard
                key={card.id}
                img={card.img}
                link={card.link}
                title={card.title}
                description={card.description}
                tech={card.tech}
              />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>

      <ScrollToTopButton threshold={200} />
    </>
  );
}

export default App;
