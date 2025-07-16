import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PosteService } from '../services/poste.service';

@Component({
  selector: 'app-poste',
  templateUrl: './poste.component.html',
  styleUrls: ['./poste.component.css']
})
export class PosteComponent implements OnInit {
  posteForm: FormGroup;
  isEdit = false;
  currentId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private posteService: PosteService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.posteForm = this.fb.group({
      libelle: ['']
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const url = this.router.url;
      if (url.includes('/supprimer/') && id) {
        // Suppression automatique si on visite /supprimer/:id
        if (confirm('Supprimer ce poste ?')) {
          this.posteService.delete(+id).subscribe(() => {
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
        this.posteService.getById(this.currentId).subscribe((data: any) => {
          this.posteForm.patchValue(data);
        });
      }
    });
  }

  onSubmit() {
    if (this.posteForm.valid) {
      if (this.isEdit && this.currentId) {
        this.posteService.update(this.currentId, this.posteForm.value).subscribe(() => {
          this.router.navigate(['/dashboard']);
        });
      } else {
        this.posteService.create(this.posteForm.value).subscribe(() => {
          this.posteForm.reset();
        });
      }
    }
  }

  onCancel() {
    this.posteForm.reset();
    this.router.navigate(['/dashboard']);
  }
}
