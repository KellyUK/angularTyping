import { Component } from "@angular/core";
import { lorem } from "faker";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  randomText = lorem.sentence();
  value = "";
  enteredText = "";

  onInput(value: string) {
    console.log(value);
    this.enteredText = value;
  }
}
