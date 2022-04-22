import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../services.service';
import { LoginComponent } from '../login/login.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  modalSwitch:boolean = false;

  constructor(private modalSS:SwitchService) { }

  ngOnInit(): void {
    this.modalSS.$modal.subscribe((valor)=> {this.modalSwitch = valor})
  }

  openModal(){

    this.modalSwitch = true;
}

}
