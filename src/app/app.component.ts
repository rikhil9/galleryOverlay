import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public title: string = 'GalleryOverlay';
  public myMenu: any;
  public oppMenu;

  public ngOnInit() {
  
    
    this.myMenu = document.querySelector(".menu");
    this.oppMenu = document.querySelector(".menu-icon");
    this.myMenu.addEventListener("transitionend", this.OnTransitionEnd, false);
    this.oppMenu.addEventListener("click", this.toggleClassMenu, false);
    this.myMenu.addEventListener("click", this.toggleClassMenu, false);
  }

  public toggleClassMenu() {
    this.myMenu.classList.add("menu--animatable");	
    if(!this.myMenu.classList.contains("menu--visible")) {		
      this.myMenu.classList.add("menu--visible");
    } else {
      this.myMenu.classList.remove('menu--visible');		
    }	
  }
  
  public OnTransitionEnd() {
    this.myMenu.classList.remove("menu--animatable");
  }
}
