import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VilleService } from '../services/ville.service';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {
  villeForm: FormGroup;
  isEdit = false;
  currentId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private villeService: VilleService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.villeForm = this.fb.group({
      libelle: ['']
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const url = this.router.url;
      if (url.includes('/supprimer/') && id) {
        // Suppression automatique si on visite /supprimer/:id
        if (confirm('Supprimer cette ville ?')) {
          this.villeService.delete(+id).subscribe(() => {
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
        this.villeService.getById(this.currentId).subscribe((data: any) => {
          this.villeForm.patchValue(data);
        });
      }
    });
  }

  onSubmit() {
    if (this.villeForm.valid) {
      if (this.isEdit && this.currentId) {
        this.villeService.update(this.currentId, this.villeForm.value).subscribe(() => {
          this.router.navigate(['/dashboard']);
        });
      } else {
        this.villeService.create(this.villeForm.value).subscribe(() => {
          this.villeForm.reset();
        });
      }
    }
  }

  onCancel() {
    this.villeForm.reset();
    this.router.navigate(['/dashboard']);
  }
}
