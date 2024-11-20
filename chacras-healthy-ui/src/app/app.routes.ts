import { Routes } from '@angular/router';
import { ChacrasComponent } from './chacras/chacras.component';
import { DetailsComponent } from './details/details.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ChacrasAllUserComponent } from './chacras-all-user/chacras-all-user.component';
import { MyChacrasComponent } from './my-chacras/my-chacras.component';
import { DetailsChacraUserComponent } from './details-chacra-user/details-chacra-user.component';
import { FormCreateComponent } from './form-create/form-create.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { ChacrasAllAdminComponent } from './chacras-all-admin/chacras-all-admin.component';

import { RegisterComponent } from './register/register.component';
export const routes: Routes = [
    { path: 'chacras', component: ChacrasComponent }, // Ruta para Chacras
    { path: 'details/:id', component: DetailsComponent }, // Ruta para Details con parámetro ID
    { path: 'login-user', component: LoginUserComponent},
    { path: 'login-admin', component: LoginAdminComponent},
    { path: 'chacras-all-user/:id', component: ChacrasAllUserComponent },
    { path: 'chacras-all-admin', component: ChacrasAllAdminComponent},
    { path: 'my-chacras/:id', component: MyChacrasComponent},
    { path: 'details-chacra-user/:id', component: DetailsChacraUserComponent },
    { path: 'form-create/:id', component: FormCreateComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', redirectTo: 'chacras', pathMatch: 'full' },
    
];
