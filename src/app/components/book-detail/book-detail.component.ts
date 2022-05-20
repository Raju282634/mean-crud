import { Component, OnInit, NgZone } from '@angular/core';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  getId: any;
  updateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private crudService: CrudService,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute) {

      this.getId = this.activatedRoute.snapshot.paramMap.get('id');

      this.crudService.GetBook(this.getId).subscribe(
        (res) => {
          this.updateForm.setValue(
            {
              name: res['name'],
              price: res['price'],
              description: res['description']
            }
          )
        }
      );

    this.updateForm = this.fb.group({
      name: [''],
      price: [''],
      description: ['']
    });

    }

  ngOnInit(): void {}

  onUpdate(): any {
    this.crudService.UpdateBook(this.getId, this.updateForm.value)
    .subscribe(
      () => { console.log('Data updated successfully!')
             this.ngZone.run(() => this.router.navigateByUrl('/books-list'))},
      (err) => { console.log(err); }
    );
  }

}
