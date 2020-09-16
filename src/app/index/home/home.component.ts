import {Component, HostListener, OnInit} from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    const element = document.querySelector('#header');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('standard-bar');
    } else {
      element.classList.remove('standard-bar');
    }
  }
}
