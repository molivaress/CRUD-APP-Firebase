import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Person } from '../modelos/persona';

@Injectable()
export class FireService {    
    constructor(private fireService: AngularFireDatabase){}
    
    getListaPersonas(){
        return this.fireService.list('newnodo/');
    }

    addPerson(person:any){
        console.log(person);
       this.fireService.database.ref('newnodo/').push(person);
    }

    editPerson(person:any){
        this.fireService.database.ref('newnodo/' + person.id).update({
          nombre: person.nombre,
          apellido: person.apellido,
          edad: person.edad
        });
    }

    deletePerson(person:any){
        this.fireService.database.ref('newnodo/' + person.$key).remove();
    }

}