import { Component } from '@angular/core';
import clientesData from '../../../../public/json/clientes.json';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  imports: [FormsModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css'
})
export class Clientes {
  clienteData = clientesData;
  cliente = {
    id: 10,
    nombre: "",
    celular: ""
  }

  pushData(){
    this.clienteData.push({id: ++this.cliente.id, nombre: this.cliente.nombre, celular: this.cliente.celular});
  }

  deleteData(id: number){
    this.clienteData = this.clienteData.filter(item => item.id != id);
  }
}
