import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypePosteService } from '../services/typeposte.service';

@Component({
  selector: 'app-type-poste',
  templateUrl: './type-poste.component.html',
  styleUrls: ['./type-poste.component.css']
})
export class TypePosteComponent implements OnInit {
  typePosteForm: FormGroup;
  isEdit = false;
  currentId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private typePosteService: TypePosteService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.typePosteForm = this.fb.group({
      libelle: ['']
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const url = this.router.url;
      if (url.includes('/supprimer/') && id) {
        // Suppression automatique si on visite /supprimer/:id
        if (confirm('Supprimer ce type de poste ?')) {
          this.typePosteService.delete(+id).subscribe(() => {
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
        this.typePosteService.getById(this.currentId).subscribe((data: any) => {
          this.typePosteForm.patchValue(data);
        });
      }
    });
  }

  onSubmit() {
    if (this.typePosteForm.valid) {
      if (this.isEdit && this.currentId) {
        this.typePosteService.update(this.currentId, this.typePosteForm.value).subscribe(() => {
          this.router.navigate(['/dashboard']);
        });
      } else {
        this.typePosteService.create(this.typePosteForm.value).subscribe(() => {
          this.typePosteForm.reset();
        });
      }
    }
  }

  onCancel() {
    this.typePosteForm.reset();
    this.router.navigate(['/dashboard']);
  }
}
