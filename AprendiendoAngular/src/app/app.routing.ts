import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//componentes
import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { PaginaComponent } from "./components/pagina/pagina.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { ErrorComponent } from "./components/error/error.component";

//array de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'peliculas', component: PeliculasComponent},
    {path: 'pagina-de-pruebas', component: PaginaComponent},
    {path: 'pagina-de-pruebas/:nombre', component: PaginaComponent},
    {path: 'pagina-de-pruebas/:nombre/:apellidos', component: PaginaComponent},
    {path: '**', component: ErrorComponent}
];

//Exportar modulo
export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
