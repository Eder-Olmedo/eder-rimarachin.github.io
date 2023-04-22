import { Component } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent {
  public PORTFOLIO = "./assets/img/portfolio_eder_rimarachin.png";

  dataPrincipal = [
    {
      type: "Proyecto Destacado",
      name: "Portafolio Personal",
      description:
        "Portafolio que describe quien soy y en que me desenvuelvo como profesional mostrando mis habilidades, proyectos y cerificaciones.",
      tech: ["Angular", "Bootstrap", "Netlify"],
      git: "https://github.com/eder-rimarachinr/eder-rimarachin.github.io.git",
      demo: "https://eder-rimarachin.netlify.app/",
    },
    {
      type: "Proyecto Destacado",
      name: "Lista de Tareas",
      description:
        "Una lista que registra tareas, actualiza y cambia el estado de esta, para poder tener un control sobre lo que hacemos, usando persistencia de datos con el LocalStorage.",
      tech: ["Reactjs", "Tailwinds", "Netlify"],
      git: "https://github.com/eder-rimarachinr/ToDo-List-React.git",
      demo: "https://react-todo-list-jz.netlify.app/",
    },
  ];
}
