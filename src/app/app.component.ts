import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  openSideBar = false


  constructor() { }


  ngOnInit(): void {

    window.addEventListener("scroll",()=>{

      const scroll = (window.scrollY/window.innerHeight)*100

      const navbarMobile:any = document.querySelector(".nav-bar-mobile") 
      const navbar:any = document.querySelector(".nav-bar") 

      if(scroll>12){
        navbarMobile.style.backgroundColor = "white"
        navbar.style.backgroundColor = "white"

        navbarMobile.style.color = "#656565"
        navbar.style.color = "#656565"
      }else{
        navbarMobile.style.backgroundColor = "transparent"
        navbar.style.backgroundColor = "transparent"
        navbarMobile.style.color = "white"
        navbar.style.color = "white"
      }

    })

  }

}
