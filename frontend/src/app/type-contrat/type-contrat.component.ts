import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeContratService } from '../services/typecontrat.service';

@Component({
  selector: 'app-type-contrat',
  templateUrl: './type-contrat.component.html',
  styleUrls: ['./type-contrat.component.css']
})
export class TypeContratComponent implements OnInit {
  typeContratForm: FormGroup;
  isEdit = false;
  currentId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private typeContratService: TypeContratService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.typeContratForm = this.fb.group({
      libelle: [''],
      dateDebut: [''],
      dateFin: ['']
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const url = this.router.url;
      if (url.includes('/supprimer/') && id) {
        // Suppression automatique si on visite /supprimer/:id
        if (confirm('Supprimer ce type de contrat ?')) {
          this.typeContratService.delete(+id).subscribe(() => {
            this.router.navigate(['/dashboard']);
          });
        } else {
          this.router.navigate(['/dashboard']);
        }
        return;
      }
      if (id) {
        this.isEdit = true;
        this.currentId = +id;
        this.typeContratService.getById(this.currentId).subscribe((data: any) => {
          this.typeContratForm.patchValue(data);
        });
      }
    });
  }

  onSubmit() {
    if (this.typeContratForm.valid) {
      if (this.isEdit && this.currentId) {
        this.typeContratService.update(this.currentId, this.typeContratForm.value).subscribe(() => {
          this.router.navigate(['/dashboard']);
        });
      } else {
        this.typeContratService.create(this.typeContratForm.value).subscribe(() => {
          this.typeContratForm.reset();
        });
      }
    }
  }

  onCancel() {
    this.typeContratForm.reset();
    this.router.navigate(['/dashboard']);
  }
}
