import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  userName: string = "Mateo Zuña";
  theme: string = "blue";
  widhtMenu: number = 25;
  visibleMenu: boolean = true;

  setVisibilityMenu():boolean{
    this.visibleMenu = !this.visibleMenu;
    return this.visibleMenu;
  }

  setThemeColor(color:string):string{
    return this.theme = color;
  }

  setSizeMenu(){
    this.widhtMenu+=5;
    if(this.widhtMenu>50){
      this.widhtMenu = 25;
    }
  }
}
