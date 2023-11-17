import { Component, OnInit } from '@angular/core';
import { OrdenesService } from '../ordenes/ordenes.service';

@Component({
  selector: 'app-admin',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class usersComponent {
  constructor(public ordenesService: OrdenesService) {}
}
