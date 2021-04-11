//import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ContadorComponent } from './contador.component';

@NgModule({
    declarations:[ContadorComponent],
    exports:[ContadorComponent],
    //imports:[CommonModule]no se necesita porque no uso directivas en el tamplate
})
export class ContadorModule{}