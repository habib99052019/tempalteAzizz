import { Component, OnInit } from '@angular/core';

declare function initSwiper():void

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  openContactMobile = false


  ngOnInit(): void {
    initSwiper()
    if(window.innerWidth <= 950){
      this.openContactMobile = true
    }else{
      this.openContactMobile = false
    }
    window.addEventListener("resize",()=>{

      if(window.innerWidth <= 950){
        this.openContactMobile = true
      }else{
        this.openContactMobile = false
      }

    })
  }

}
