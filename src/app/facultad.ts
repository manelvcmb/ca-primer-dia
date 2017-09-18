export class Facultad{
    id:      number
    nombre:  string
    campus:  string
    numAlu:  number
    numProf: number

    constructor( id: number,
                nombre: string,
                campus:  string,
                numAlu:  number,
                numProf: number
    ){
        this.id = id
        this.nombre= nombre
        this.campus = campus
        this.numAlu = numAlu
        this.numProf = numProf    
    }
}