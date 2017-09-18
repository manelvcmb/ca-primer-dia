import {Component, Input} from '@angular/core'
import {Facultad} from './facultad'

@Component({
    selector: 'des-facu',
    templateUrl: './descrip-facu.template.html'
})
export class DescripFacuComponent{
    @Input() facultad: Facultad 
}



