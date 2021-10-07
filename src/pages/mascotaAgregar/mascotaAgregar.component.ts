import { Component } from "@angular/core";
import { IUser } from "src/interfaces/users/IUser";

@Component({
    selector: 'mascotaAgregar',
    templateUrl: './mascotaAgregar.component.html',
    styleUrls: ['mascotaAgregar.component.css']
})
export class MascotaAgregarComponent {
    public nombre: string = 'Álvaro';
    public usuario: IUser = {
        apellido: '',
        contrasena: '',
        fechaNacimiento: new Date(),
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
