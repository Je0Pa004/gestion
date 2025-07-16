import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AncienneteService } from '../services/anciennete.service';

@Component({
  selector: 'app-anciennete',
  templateUrl: './anciennete.component.html',
  styleUrls: ['./anciennete.component.css']
})
export class AncienneteComponent implements OnInit {
  ancienneteForm: FormGroup;
  isEdit = false;
  currentId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private ancienneteService: AncienneteService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.ancienneteForm = this.fb.group({
      libelle: ['']
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const url = this.router.url;
      if (url.includes('/supprimer/') && id) {
        // Suppression automatique si on visite /supprimer/:id
        if (confirm('Supprimer cette ancienneté ?')) {
          this.ancienneteService.delete(+id).subscribe(() => {
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
        this.ancienneteService.getById(this.currentId).subscribe((data: any) => {
          this.ancienneteForm.patchValue(data);
        });
      }
    });
  }

  onSubmit() {
    if (this.ancienneteForm.valid) {
      if (this.isEdit && this.currentId) {
        this.ancienneteService.update(this.currentId, this.ancienneteForm.value).subscribe(() => {
          this.router.navigate(['/dashboard']);
        });
      } else {
        this.ancienneteService.create(this.ancienneteForm.value).subscribe(() => {
          this.ancienneteForm.reset();
        });
      }
    }
  }

  onCancel() {
    this.ancienneteForm.reset();
    this.router.navigate(['/dashboard']);
  }

  onDelete() {
    if (this.isEdit && this.currentId && confirm('Supprimer cette ancienneté ?')) {
      this.ancienneteService.delete(this.currentId).subscribe(() => {
        this.router.navigate(['/dashboard']);
      });
    }
  }
}
