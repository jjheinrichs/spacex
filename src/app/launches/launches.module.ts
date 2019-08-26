import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LaunchesEffects } from './state/launches.effects';

import { LaunchesComponent } from './launches.component';
import { LaunchComponent } from './launch/launch.component';
import { LaunchGridNumberComponent } from './launch/launch-grid-number/launch-grid-number.component';
import { LaunchGridTitleComponent } from './launch/launch-grid-title/launch-grid-title.component';
import { LaunchGridDescriptionComponent } from './launch/launch-grid-description/launch-grid-description.component';

import { CoreComponentsModule } from '@app/core/components/components.module';

import { LaunchesRoutingModule } from './launches-routing.module';
import { LaunchListComponent } from './launch-list/launch-list.component';

import { LaunchesService } from './services/launches.service';
import { reducer } from './state/launches.reducer';

@NgModule({
  declarations: [
    LaunchesComponent,
    LaunchComponent,
    LaunchGridNumberComponent,
    LaunchGridTitleComponent,
    LaunchGridDescriptionComponent,
    LaunchListComponent
  ],
  imports: [
    CommonModule,
    CoreComponentsModule,
    EffectsModule.forFeature([LaunchesEffects]),
    StoreModule.forFeature('launches', reducer),
    LaunchesRoutingModule
  ],
  providers: [LaunchesService]
})
export class LaunchesModule {}
