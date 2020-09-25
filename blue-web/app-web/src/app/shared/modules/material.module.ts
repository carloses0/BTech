import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';



const materialComponentes = [
  MatSidenavModule,
  MatToolbarModule,
  MatDividerModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatExpansionModule,
  MatTabsModule,

  MatFormFieldModule,


  MatPaginatorModule,

];

@NgModule({
  declarations: [],
  imports: [
    materialComponentes,

  ],
  exports: [materialComponentes]
})
export class MaterialModule {
}
