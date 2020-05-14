import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IMajorIncident, MajorIncident } from 'app/shared/model/major-incident.model';
import { MajorIncidentService } from './major-incident.service';

@Component({
  selector: 'jhi-major-incident-update',
  templateUrl: './major-incident-update.component.html'
})
export class MajorIncidentUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    code: [null, [Validators.required]],
    description: [],
    source: []
  });

  constructor(protected majorIncidentService: MajorIncidentService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ majorIncident }) => {
      this.updateForm(majorIncident);
    });
  }

  updateForm(majorIncident: IMajorIncident): void {
    this.editForm.patchValue({
      id: majorIncident.id,
      code: majorIncident.code,
      description: majorIncident.description,
      source: majorIncident.source
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const majorIncident = this.createFromForm();
    if (majorIncident.id !== undefined) {
      this.subscribeToSaveResponse(this.majorIncidentService.update(majorIncident));
    } else {
      this.subscribeToSaveResponse(this.majorIncidentService.create(majorIncident));
    }
  }

  private createFromForm(): IMajorIncident {
    return {
      ...new MajorIncident(),
      id: this.editForm.get(['id'])!.value,
      code: this.editForm.get(['code'])!.value,
      description: this.editForm.get(['description'])!.value,
      source: this.editForm.get(['source'])!.value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IMajorIncident>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }
}
