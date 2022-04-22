import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private modalSS: SwitchService) { }

  ngOnInit(): void {
  }
  closeModal(){
    this.modalSS.$modal.emit(false)
  }
  
  openModal(){
    this.modalSS.$modal.emit(true)
  }
}
 