import { Injectable } from '@angular/core';
import { IUser } from 'src/interfaces/users/IUser';

@Injectable()
export class UserService {
    private usuarios: Array<IUser>;
    constructor() {
        this.usuarios = [
            {
                id: 1,
                nombre: 'prueba1',
                apellido: 'apellido prueba 1',
                contrasena: '1234',
                fechaNacimiento: new Date(),
                email: 'prueba1@prueba1.cl'
            },
            {
                id: 2,
                nombre: 'prueba2',
                apellido: 'apellido prueba2',
                contrasena: '1234',
                fechaNacimiento: new Date(),
                email: 'prueba2@prueba2.cl'
            },
            {
                id: 3,
                nombre: 'prueba3',
                apellido: 'apellido prueba3',
                contrasena: '1234',
                fechaNacimiento: new Date(),
                email: 'prueba3@prueba3.cl'
            },
        ]
    }

    public iniciarSesion(usuario: string, contrasena: string): IUser | undefined {
        let usuarioEncontrado: IUser | undefined = undefined;
        for (let temporal of this.usuarios) {
            if (temporal.email === usuario &&
                temporal.contrasena === contrasena) {
                usuarioEncontrado = temporal;
                break;
            }
        }
        return usuarioEncontrado;
    }


}