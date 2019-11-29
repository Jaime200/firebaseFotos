import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FileItem } from '../models/file-item.model';
import * as firebase from 'firebase';
import { isNgTemplate } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'img'
  constructor(private db: AngularFirestore) { 

  }

  private guardarImagen(imagen:{ nombre:string, url:string}){
    this.db.collection(`/${this.CARPETA_IMAGENES}`)
            .add(  imagen  )
  }

  public cargarImagenesFirebase(imagenes:FileItem[]){
    const storageRef = firebase.storage().ref();
    for(const imagen of imagenes){
      imagen.estadoSubiendo = true
      if(imagen.progreso >=100){
        continue;
      }
      const uploadTask:firebase.storage.UploadTask = 
      storageRef.child(`${this.CARPETA_IMAGENES}/${imagen.nombreArchivo}`)
                .put(imagen.archivo)
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: firebase.storage.UploadTaskSnapshot) => {
          imagen.progreso = (snapshot.bytesTransferred/snapshot.totalBytes )* 100
        },
        (error ) => console.error('Error al subir', error),
        async ()=>{
          console.log('Imagen cargada correctamente')
          imagen.url = await uploadTask.snapshot
                                        .ref.getDownloadURL()
          imagen.estadoSubiendo = false;
          this.guardarImagen({
            nombre: imagen.nombreArchivo,
            url: imagen.url
          })
        }
        )
    }
  }
}
