import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AttributionService } from '../services/attribution.service';

@Component({
  selector: 'app-attribution',
  templateUrl: './attribution.component.html',
  styleUrls: ['./attribution.component.css']
})
export class AttributionComponent implements OnInit {
  attributionForm: FormGroup;
  isEdit = false;
  currentId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private attributionService: AttributionService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.attributionForm = this.fb.group({
      libelle: ['']
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const url = this.router.url;
      if (url.includes('/supprimer/') && id) {
        // Suppression automatique si on visite /supprimer/:id
        if (confirm('Supprimer cette attribution ?')) {
          this.attributionService.delete(+id).subscribe(() => {
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
        this.attributionService.getById(this.currentId).subscribe((data: any) => {
          this.attributionForm.patchValue(data);
        });
      }
    });
  }

  onSubmit() {
    if (this.attributionForm.valid) {
      if (this.isEdit && this.currentId) {
        this.attributionService.update(this.currentId, this.attributionForm.value).subscribe(() => {
          this.router.navigate(['/dashboard']);
        });
      } else {
        this.attributionService.create(this.attributionForm.value).subscribe(() => {
          this.attributionForm.reset();
        });
      }
    }
  }

  onCancel() {
    this.attributionForm.reset();
    this.router.navigate(['/dashboard']);
  }
}
