import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
} from '@angular/material'

import { NgModule } from '@angular/core'

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule],
  declarations: [],
})
export class MaterialModule {}
