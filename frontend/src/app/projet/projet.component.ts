import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetService } from '../services/projet.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
  projetForm: FormGroup;
  isEdit = false;
  currentId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private projetService: ProjetService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.projetForm = this.fb.group({
      libelle: ['']
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const url = this.router.url;
      if (url.includes('/supprimer/') && id) {
        // Suppression automatique si on visite /supprimer/:id
        if (confirm('Supprimer ce projet ?')) {
          this.projetService.delete(+id).subscribe(() => {
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
        this.projetService.getById(this.currentId).subscribe((data: any) => {
          this.projetForm.patchValue(data);
        });
      }
    });
  }

  onSubmit() {
    if (this.projetForm.valid) {
      if (this.isEdit && this.currentId) {
        this.projetService.update(this.currentId, this.projetForm.value).subscribe(() => {
          this.router.navigate(['/dashboard']);
        });
      } else {
        this.projetService.create(this.projetForm.value).subscribe(() => {
          this.projetForm.reset();
        });
      }
    }
  }

  onCancel() {
    this.projetForm.reset();
    this.router.navigate(['/dashboard']);
  }
}
