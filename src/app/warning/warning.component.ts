import { Component } from "@angular/core";
@Component({
    selector: 'app-warning',
    templateUrl: './warning.component.html',
    styles: [
        `
        p {
            padding: 10px;
            background-color: mistyrose;
            border: 1px solid red;   
        }
        `
    ]
})
export class WarningComponent {
    name: string = 'Haim Guel Quiroz';
    message: string = "Esto es un mensaje aleatorio"
    age: number = 22;
    allowButton = false;
    constructor(){
        setTimeout(() => {
            this.allowButton = true;
        },5000);

    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
}