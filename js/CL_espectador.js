export default class CL_espectador {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    set nombre(n) {
        this._nombre = n;
    }
    get nombre() {
        return this._nombre;
    }
    set edad(e) {
        this._edad = +e;
    }
    get edad() {
        return this._edad;
    }
    set sexo(s) {
        this._sexo = s;
    }
    get sexo() {
        return this._sexo;
    }
}