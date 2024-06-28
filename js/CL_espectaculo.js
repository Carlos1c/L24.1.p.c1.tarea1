export default class CL_espectaculo {
    constructor() {
        this.precioEntrada = 15;
        this.cntEspecta = 0;
        this.cntNinio = 0;
        this.cntAdole = 0;
        this.cntAdulto = 0;
        this.acEdad = 0;
    }

    procesarEspecta(espectador) {
        this.acEdad += espectador.edad;
        this.cntEspecta++;
        if (espectador.edad <= 12) {
            this.cntNinio++;
        }
        if (espectador.edad <= 18) {
            this.cntAdole++;
        }
        if (espectador.edad > 18) {
            this.cntAdulto++;
        }
    }

    descuento() {
        if (this.cntNinio) {
            return this.precioEntrada * 10 / 100;
        }
        if (this.cntAdole) {
            return this.precioEntrada * 10 / 100;
        }
        if (this.cntAdulto) {
            return 0;
        }
    }

    nuevoPreEntra() {
        return this.precioEntrada - this.descuento();
    }

    porcentajeAsisNinio() {
        return (this.cntNinio / this.cntEspecta) * 100;
    }
    porcentajeAsisAdole() {
        return (this.cntAdole / this.cntEspecta) * 100;
    }
    porcentajeAsisMayor() {
        if (this.porcentajeAsisNinio > this.porcentajeAsisAdole) {
            return "Niños";
        }
        else
            return "Adolecentes";
    }
}