import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GradeService } from '../services/grade.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {
  gradeForm: FormGroup;
  isEdit = false;
  currentId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private gradeService: GradeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.gradeForm = this.fb.group({
      libelle: ['']
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const url = this.router.url;
      if (url.includes('/supprimer/') && id) {
        // Suppression automatique si on visite /supprimer/:id
        if (confirm('Supprimer ce grade ?')) {
          this.gradeService.delete(+id).subscribe(() => {
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
        this.gradeService.getById(this.currentId).subscribe((data: any) => {
          this.gradeForm.patchValue(data);
        });
      }
    });
  }

  onSubmit() {
    if (this.gradeForm.valid) {
      if (this.isEdit && this.currentId) {
        this.gradeService.update(this.currentId, this.gradeForm.value).subscribe(() => {
          this.router.navigate(['/dashboard']);
        });
      } else {
        this.gradeService.create(this.gradeForm.value).subscribe(() => {
          this.gradeForm.reset();
        });
      }
    }
  }

  onCancel() {
    this.gradeForm.reset();
    this.router.navigate(['/dashboard']);
  }
}
