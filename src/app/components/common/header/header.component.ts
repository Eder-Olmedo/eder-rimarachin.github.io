import { Component, ElementRef, HostListener } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  public LOGO = "./assets/images/favicons/logo.svg";
  public mybutton: any;
  public mail: string = "eder.rimarachinr@gmail.com";
  public MAILTO: string = "mailto:eder.rimarachinr@gmail.com";

  isFixedTop = true;

  constructor(private elementRef: ElementRef) {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const navbar = this.elementRef.nativeElement.querySelector(".navbar");
    if (window.pageYOffset > navbar.offsetTop) {
      this.isFixedTop = false;
    } else {
      this.isFixedTop = true;
    }
  }

  openPdf() {
    window.open(
      "./assets/cv/CV_Eder-Rimarachin_Software-Engineer_pw.pdf",
      "_blank"
    );
  }
}
