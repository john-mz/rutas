import { Routes } from '@angular/router';
import { Principal } from './estructura/principal';
import { Dashboard } from './modulos/dashboard/dashboard';
import { Clientes } from './modulos/clientes/clientes';
import { Productos } from './modulos/productos/productos';
import { Usuarios } from './modulos/usuarios/usuarios';
import { Categoria } from './modulos/categoria/categoria';
import { Login } from './modulos/login/login';
import { Noencontro } from './modulos/noencontro/noencontro';

export const routes: Routes = [
    {
        path: '', component: Principal,
        children:
        [
            {path: 'dashboard', component: Dashboard},
            {path: 'clientes', component: Clientes},
            {path: 'productos', component: Productos},
            {path: 'usuarios', component: Usuarios},
            {path: 'categorias', component: Categoria},
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
        ]
    },

    {path: 'login', component: Login},
    {path: '**', component: Noencontro}
];
