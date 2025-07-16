import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeRubriqueService } from '../services/typerubrique.service';

@Component({
  selector: 'app-type-rubrique',
  templateUrl: './type-rubrique.component.html',
  styleUrls: ['./type-rubrique.component.css']
})
export class TypeRubriqueComponent implements OnInit {
  typeRubriqueForm: FormGroup;
  isEdit = false;
  currentId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private typeRubriqueService: TypeRubriqueService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.typeRubriqueForm = this.fb.group({
      libelle: ['']
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const url = this.router.url;
      if (url.includes('/supprimer/') && id) {
        // Suppression automatique si on visite /supprimer/:id
        if (confirm('Supprimer ce type de rubrique ?')) {
          this.typeRubriqueService.delete(+id).subscribe(() => {
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
        this.typeRubriqueService.getById(this.currentId).subscribe((data: any) => {
          this.typeRubriqueForm.patchValue(data);
        });
      }
    });
  }

  onSubmit() {
    if (this.typeRubriqueForm.valid) {
      if (this.isEdit && this.currentId) {
        this.typeRubriqueService.update(this.currentId, this.typeRubriqueForm.value).subscribe(() => {
          this.router.navigate(['/dashboard']);
        });
      } else {
        this.typeRubriqueService.create(this.typeRubriqueForm.value).subscribe(() => {
          this.typeRubriqueForm.reset();
        });
      }
    }
  }

  onCancel() {
    this.typeRubriqueForm.reset();
    this.router.navigate(['/dashboard']);
  }
}
