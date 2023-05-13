import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit{
  public showLoader: boolean = true;
  ngOnInit() {
    setTimeout(() => {
      this.showLoader = false;
    }, 2000); // Cambia el valor 2000 por el tiempo que desees que el loader sea visible
  }
}
