import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature01RoutingModule } from './feature01-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromFeature01State from './store/feature01-state.reducer';
import { EffectsModule } from '@ngrx/effects';
import { Feature01StateEffects } from './store/feature01-state.effects';
import { Comp01Component } from './comp01/comp01.component';


@NgModule({
  declarations: [
    Comp01Component
  ],
  imports: [
    CommonModule,
    Feature01RoutingModule,
    StoreModule.forFeature(fromFeature01State.feature01StateFeatureKey, fromFeature01State.reducer),
    EffectsModule.forFeature([Feature01StateEffects])
  ],
  exports: [
    Comp01Component
  ]
})
export class Feature01Module { }
