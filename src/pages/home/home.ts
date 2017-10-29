import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FireService } from '../../services/fire-sevice';
import { Page2Page } from '../page2/page2';
import { Page4Page } from '../page4/page4';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  person: any = {};
  nombre: string;
  apellido: string;
  edad: number;
  listaPersonas: any = [];
  personparam: any = null;
  stateSave: boolean = true;
  TEXT_BUTTOM: string = "Guardar";

  constructor(public navCtrl: NavController,
    private fireService: FireService,
    private navParams: NavParams) {
    this.personparam = this.navParams.get("item");
    console.log("parametros: ", this.personparam);
  }

  ngAfterViewInit() {
    this.getListaPersonas();
    this.editarParam();
  }

  remove(item) {
    console.log(item);
    this.fireService.deletePerson(item);
  }

  ver() {
    this.navCtrl.push(Page2Page);
  }

  editarParam() {
    if (this.personparam != null) {
      this.nombre = this.personparam.nombre;
      this.apellido = this.personparam.apellido;
      this.edad = this.personparam.edad;
      this.stateSave = false;
      this.TEXT_BUTTOM = "Editar";
    }
  }

  guardar() {
    this.person.nombre = this.nombre;
    this.person.apellido = this.apellido;
    this.person.edad = this.edad;
    if (this.stateSave) {
      console.log("agregando -----------");
      this.fireService.addPerson(this.person);
    } else {
      console.log("editando ----------");
      this.person.id = this.personparam.$key;
      this.fireService.editPerson(this.person);
    }
  }

  getListaPersonas() {
    this.fireService.getListaPersonas().subscribe((resp) => {
      this.listaPersonas = resp;
    });
  }



}
