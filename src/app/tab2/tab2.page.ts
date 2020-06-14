import { Component } from '@angular/core';
import { CovidService } from '../CoVid-19/covid.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers:[CovidService]
})
export class Tab2Page {

  loadingController: any;
  
  constructor(public Covid19Services:CovidService) {}

  public lista_casos = new Array<any>();
  
  carregaPagina(){
    this.Covid19Services.getCasoscv19().subscribe(
      data => {
        const response = (data as any);
        this.lista_casos = response.data;
        console.log(this.lista_casos);
  },
   error => {
     console.log(error);
   } 
    )
  }
   async efeitoLoading(){
    const loading = await this.loadingController.create({
      message: 'Carregando Casos',
      duration: 1000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }

  efeitoRefresh(event){

    this.carregaPagina();
    console.log('Iniciando operação assíncrona');

    setTimeout(() => {
      event.target.complete();
      console.log('finalizando refresh');
    }, 500);
  }
  ionViewDidEnter(){
    this.efeitoLoading();
    this.carregaPagina(); 
  }
}