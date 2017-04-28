import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { UserComponent }  from './components/user.component';
import { AboutComponent }  from './components/about.component';
const approutes:Routes=[
    {
path:'',
component:UserComponent
    },
    {
path:'about',
component:AboutComponent
    }
];
export const routing:ModuleWithProviders=RouterModule.forRoot(approutes);
