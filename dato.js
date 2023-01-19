class Dato {
    constructor(props = {}) {
        this.codigoPostal = props.codigoPostal ? props.codigoPostal : null;
        this.ciudad = props.ciudad ? props.ciudad : null;
        this.estado = props.estado ? props.estado : null;
        this.fechaInicio = props.fechaInicio ? props.fechaInicio : null;
        this.fechaFinal = props.fechaFinal ? props.fechaFinal : null;
        this.enero = props.enero ? props.enero : null;
        this.febrero = props.febrero ? props.febrero : null;
        this.marzo = props.marzo ? props.marzo : null;
        this.abril = props.abril ? props.abril : null;
        this.mayo = props.mayo ? props.mayo : null;
        this.junio = props.junio ? props.junio : null;
        this.julio = props.julio ? props.julio : null;
        this.agosto = props.agosto ? props.agosto : null;
        this.septiembre = props.septiembre ? props.septiembre : null;
        this.octubre = props.octubre ? props.octubre : null;
        this.noviembre = props.noviembre ? props.noviembre : null;
        this.diciembre = props.diciembre ? props.diciembre : null;
        this.suma = props.suma ? props.suma : null;
    }
}

module.exports = Dato;