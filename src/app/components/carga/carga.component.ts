import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item.model';
import { CargaImagenesService } from '../../services/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  estaSobreElemento : boolean = false;
  archivos:FileItem[] = [];
  constructor(public CargaImagenesService:CargaImagenesService) { }

  ngOnInit() {
  }


  cargarImagenes(){
 this.CargaImagenesService.cargarImagenesFirebase(this.archivos)
  }

  pruebaSobreElemento($evento){
    console.log($evento);
  }
  limpiarArchivos(){
    this.archivos= []
  }

}
