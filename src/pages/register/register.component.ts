import { Component } from "@angular/core";
import { IUser } from "src/interfaces/users/IUser";

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['register.component.css']
})
export class RegisterComponent {
    public usuario: IUser = {
        apellido: '',
        contrasena: '',
        rcontrasena: '',
        nombre: '',
        email: ''
    }
    constructor() {

    }
    // metodos custom
    mostrarConsola() {
        console.log(this.usuario);
    }

}