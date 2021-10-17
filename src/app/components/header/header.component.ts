import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo: string;
  constructor() {
    this.logo = "https://www.pinpng.com/pngs/m/187-1876223_joy-logo-hd-png-download.png"
   }
 
  ngOnInit(): void {
  }

}
