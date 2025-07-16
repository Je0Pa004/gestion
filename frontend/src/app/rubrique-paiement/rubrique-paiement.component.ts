import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RubriquePaiementService } from '../services/rubriquepaiement.service';

@Component({
  selector: 'app-rubrique-paiement',
  templateUrl: './rubrique-paiement.component.html',
  styleUrls: ['./rubrique-paiement.component.css']
})
export class RubriquePaiementComponent implements OnInit {
  rubriquePaiementForm: FormGroup;
  isEdit = false;
  currentId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private rubriquePaiementService: RubriquePaiementService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.rubriquePaiementForm = this.fb.group({
      libelle: ['']
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const url = this.router.url;
      if (url.includes('/supprimer/') && id) {
        // Suppression automatique si on visite /supprimer/:id
        if (confirm('Supprimer cette rubrique paiement ?')) {
          this.rubriquePaiementService.delete(+id).subscribe(() => {
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
        this.rubriquePaiementService.getById(this.currentId).subscribe((data: any) => {
          this.rubriquePaiementForm.patchValue(data);
        });
      }
    });
  }

  onSubmit() {
    if (this.rubriquePaiementForm.valid) {
      if (this.isEdit && this.currentId) {
        this.rubriquePaiementService.update(this.currentId, this.rubriquePaiementForm.value).subscribe(() => {
          this.router.navigate(['/dashboard']);
        });
      } else {
        this.rubriquePaiementService.create(this.rubriquePaiementForm.value).subscribe(() => {
          this.rubriquePaiementForm.reset();
        });
      }
    }
  }

  onCancel() {
    this.rubriquePaiementForm.reset();
    this.router.navigate(['/dashboard']);
  }
}
