import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FireService } from '../../services/fire-sevice';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {
  listaPersonas: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public fireService: FireService) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }
  ngAfterViewInit() {
    this.getListaPersonas();
  }

  getListaPersonas() {
    this.fireService.getListaPersonas().subscribe((resp) => {
      this.listaPersonas = resp;
    });
  }

  editarPerson(item: any) {
    console.log(item);
    this.navCtrl.push(HomePage, { item: item });
  }
  
  remove(item) {
    console.log(item);
    this.fireService.deletePerson(item);
  }

}
