import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus= false;

  constructor(
    private socket: Socket,
  ) { }

  checkStatus(){
    this.socket.on('connect',()=>{
      console.log('Conectado al Servidor')
      this.socketStatus = true;
    })    
    this.socket.on('disconnect',()=>{
      console.log('Desconectado al Servidor')
      this.socketStatus = false;
    })    
  }
}
