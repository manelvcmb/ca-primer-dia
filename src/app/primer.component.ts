import {Component} from '@angular/core'
import {Facultad}  from './facultad'
import {DescripFacuComponent} from './descrip-facu.component'

@Component({
    selector: 'primer',
    templateUrl: './primer.template.html'
})
export class PrimerComponent {
    seleccion: Facultad 
    listaFacu: Facultad[] = [
        new Facultad(1,"Derecho", "Moncloa", 2000, 200),
        new Facultad(2,"Economia", "Somosaguas", 1000, 300),
        new Facultad(3,"Fisicas", "Moncloa", 500, 50),
        new Facultad(4,"Informatica", "Moncloa", 2000, 100),
        new Facultad(5,"Psicologia", "Somosaguas", 3000, 250)
        ] 

    seleccionar(facu: Facultad){
        this.seleccion = facu
    }
    cerrar(){
        this.seleccion = undefined
    }
}