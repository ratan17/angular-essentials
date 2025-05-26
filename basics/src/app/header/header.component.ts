//import Component module
import { Component } from "@angular/core";

//use Component Decorator and configure inside the decorator - templateUrl,styles,selector,standalone:true
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    standalone: true,
    imports: [],
    styleUrls: ['./header.component.scss']
})

//create <ComponentName> class and export it
export class HeaderComponent{

    constructor(){

    }
}