import {
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { BehaviorSubject, count, debounceTime, map, of, startWith, switchMap, tap, timer } from "rxjs";
import { TuiComboBoxModule, TuiInputModule } from "@taiga-ui/kit";
import { TuiDataListModule, TuiDropdownModule, TuiTextfieldControllerModule } from "@taiga-ui/core";
import { tuiControlValue, TuiLetModule } from "@taiga-ui/cdk";

@Component({
  selector: 'autocomplete',
  standalone: true,
  imports: [CommonModule, TuiInputModule, ReactiveFormsModule, TuiDataListModule, TuiLetModule, TuiComboBoxModule, TuiTextfieldControllerModule, TuiDropdownModule],
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {
  control = new FormControl(``);
  matches$ = this.control.valueChanges.pipe(
    debounceTime<any>( 800 ),
    switchMap( () => this.request() ),
    startWith( [] ),
  );


  request = () => timer(500).pipe(
    map(()=> [`a`, `b`, `c`])
  )

}

