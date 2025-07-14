import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

// IMPORTA NgIf explícitamente
import { NgIf, CommonModule } from '@angular/common';

import {Autocomplete} from './autocomplete/autocomplete';
import {Button} from './button/button';
import {Card} from './card/card';
import { Badge } from './badge/badge';
import { ButtonToggle } from './button-toggle/button-toggle';
import { Checkbox } from './checkbox/checkbox';
import { Chips } from './chips/chips';
import { Core } from './datepicker/core';
import { Divider } from './divider/divider';
import { FormField } from './form-field/form-field';
import { GridList } from './grid-list/grid-list';
import { Input } from './input/input';
import { List } from './list/list';
import { Menu } from './menu/menu';
import { Paginator } from './paginator/paginator';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule,
    NgIf,               // <---- Agrega NgIf para poder usar *ngIf
    // o alternativamente puedes importar CommonModule (que incluye NgIf y más)
    // CommonModule,
    Autocomplete,
    Button,
    Card,
    Badge,
    ButtonToggle,
    Checkbox,
    Chips,
    Core,
    Divider,
    FormField,
    GridList,
    Input,
    List,
    Menu,
    Paginator,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']    // aquí era styleUrls (con s)
})
export class App {
  protected title = 'app_angular';
  componenteSeleccionado = 'autocomplete';
}

