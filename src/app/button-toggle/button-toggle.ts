import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-button-toggle',
  imports: [MatButtonToggleModule, FormsModule, ReactiveFormsModule],
  templateUrl: './button-toggle.html',
  styleUrl: './button-toggle.css'
})
export class ButtonToggle {
  fontStyleControl = new FormControl('');
  fontStyle?: string;

}
