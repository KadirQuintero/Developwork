import { Component } from '@angular/core';

@Component({
  selector: 'app-camb-contra',
  templateUrl: './camb-contra.component.html',
  styleUrls: ['./camb-contra.component.css'],
})
export class CambContraComponent {
  ChangeType: boolean = true;
  viewpass() {
    // Concatena el nombre del campo con la cadena 'ChangeType'

    // Accede a la propiedad correspondiente y la cambia
    this.ChangeType = !this.ChangeType;
  }
}
