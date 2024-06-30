export default class CL_espectaculo {
    constructor() {
        this.precioEntrada = 15;
        this.cntEspecta = 0;
        this.cntNinio = 0;
        this.cntAdole = 0;
        this.cntAdulto = 0;
        this.acEdad = 0;
        this.nuevoPreEntra = 0;
        this.descuento = 0;
    }

    procesarEspecta(espectador) {
        this.acEdad += espectador.edad;
        this.cntEspecta++;
        
        this.descuento = this.precioEntrada * 10 / 100;
        
        this.nuevoPreEntra = this.precioEntrada - this.descuento;
        
        if (espectador.edad <= 12) {
            this.cntNinio++;
        }
        if (espectador.edad <= 18 && espectador.edad > 12) {
            this.cntAdole++;
        }
        if (espectador.edad > 18) {
            this.cntAdulto++;
        }
    }

    nuevoPreEntra() {
        return this.precioEntrada - this.descuento();
    }

    precioCancelar(espectador) {
        if (espectador.edad <= 18) {
            return this.nuevoPreEntra;
        }
        if (espectador.edad > 18) {
            return this.precioEntrada;
        }
    }

    promedioAdole() {
        return this.cntAdole * this.nuevoPreEntra;
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