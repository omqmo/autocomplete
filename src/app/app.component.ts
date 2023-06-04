import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiRootModule } from "@taiga-ui/core";
import { AutocompleteComponent } from "./autocomplete/autocomplete.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TuiRootModule, AutocompleteComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'autocomplete';
}
