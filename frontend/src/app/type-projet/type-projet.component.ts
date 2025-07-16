import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeProjetService } from '../services/typeprojet.service';

@Component({
  selector: 'app-type-projet',
  templateUrl: './type-projet.component.html',
  styleUrls: ['./type-projet.component.css']
})
export class TypeProjetComponent implements OnInit {
  typeProjetForm: FormGroup;
  isEdit = false;
  currentId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private typeProjetService: TypeProjetService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.typeProjetForm = this.fb.group({
      libelle: ['']
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const url = this.router.url;
      if (url.includes('/supprimer/') && id) {
        // Suppression automatique si on visite /supprimer/:id
        if (confirm('Supprimer ce type de projet ?')) {
          this.typeProjetService.delete(+id).subscribe(() => {
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
        this.typeProjetService.getById(this.currentId).subscribe((data: any) => {
          this.typeProjetForm.patchValue(data);
        });
      }
    });
  }

  onSubmit() {
    if (this.typeProjetForm.valid) {
      if (this.isEdit && this.currentId) {
        this.typeProjetService.update(this.currentId, this.typeProjetForm.value).subscribe(() => {
          this.router.navigate(['/dashboard']);
        });
      } else {
        this.typeProjetService.create(this.typeProjetForm.value).subscribe(() => {
          this.typeProjetForm.reset();
        });
      }
    }
  }

  onCancel() {
    this.typeProjetForm.reset();
    this.router.navigate(['/dashboard']);
  }
}
