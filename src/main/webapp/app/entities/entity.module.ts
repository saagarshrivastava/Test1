import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'major-incident',
        loadChildren: () => import('./major-incident/major-incident.module').then(m => m.Test1MajorIncidentModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class Test1EntityModule {}
