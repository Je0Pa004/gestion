import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeService } from '../services/employe.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  employeForm: FormGroup;
  isEdit = false;
  currentId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private employeService: EmployeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.employeForm = this.fb.group({
      nom: [''],
      prenom: [''],
      nif: [''],
      cnss: [''],
      adresse: [''],
      salaireBase: [''],
      matricule: [''],
      dateNaissance: [''],
      dateRecrutement: [''],
      telephone: [''],
      email: ['']
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const url = this.router.url;
      if (url.includes('/supprimer/') && id) {
        // Suppression automatique si on visite /supprimer/:id
        if (confirm('Supprimer cet employé ?')) {
          this.employeService.delete(+id).subscribe(() => {
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
        this.employeService.getById(this.currentId).subscribe((data: any) => {
          this.employeForm.patchValue(data);
        });
      }
    });
  }

  onSubmit() {
    if (this.employeForm.valid) {
      if (this.isEdit && this.currentId) {
        this.employeService.update(this.currentId, this.employeForm.value).subscribe(() => {
          this.router.navigate(['/dashboard']);
        });
      } else {
        this.employeService.create(this.employeForm.value).subscribe(() => {
          this.employeForm.reset();
        });
      }
    }
  }

  onCancel() {
    this.employeForm.reset();
    this.router.navigate(['/dashboard']);
  }
}
