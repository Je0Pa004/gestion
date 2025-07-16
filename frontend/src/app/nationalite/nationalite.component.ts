import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NationaliteService } from '../services/nationalite.service';

@Component({
  selector: 'app-nationalite',
  templateUrl: './nationalite.component.html',
  styleUrls: ['./nationalite.component.css']
})
export class NationaliteComponent implements OnInit {
  nationaliteForm: FormGroup;
  isEdit = false;
  currentId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private nationaliteService: NationaliteService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.nationaliteForm = this.fb.group({
      libelle: ['']
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const url = this.router.url;
      if (url.includes('/supprimer/') && id) {
        // Suppression automatique si on visite /supprimer/:id
        if (confirm('Supprimer cette nationalité ?')) {
          this.nationaliteService.delete(+id).subscribe(() => {
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
        this.nationaliteService.getById(this.currentId).subscribe((data: any) => {
          this.nationaliteForm.patchValue(data);
        });
      }
    });
  }

  onSubmit() {
    if (this.nationaliteForm.valid) {
      if (this.isEdit && this.currentId) {
        this.nationaliteService.update(this.currentId, this.nationaliteForm.value).subscribe(() => {
          this.router.navigate(['/dashboard']);
        });
      } else {
        this.nationaliteService.create(this.nationaliteForm.value).subscribe(() => {
          this.nationaliteForm.reset();
        });
      }
    }
  }

  onCancel() {
    this.nationaliteForm.reset();
    this.router.navigate(['/dashboard']);
  }
}
