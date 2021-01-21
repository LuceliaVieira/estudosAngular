import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-forms',
  templateUrl: './user-forms.component.html',
  styleUrls: ['./user-forms.component.css'],
  preserveWhitespaces: true
})
export class UserFormsComponent implements OnInit {

  form: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private service: UserService) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(300)]],
      first_name: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
      last_name: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      avatar: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(300)]]

    });

  }

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    console.log(JSON.stringify(this.form.value));
    if(this.form.valid){
      console.log('submit');
      this.service.create(this.form.value).subscribe(
        success => console.log('sucesso'),
        error => console.error(error),
        () => console.log('request completo')
        );

        let userLocalStorage = localStorage.getItem('users');

        let userLocalStorageJson = JSON.parse(userLocalStorage)

        userLocalStorageJson.data.push(this.form.value)

        localStorage.setItem('users', JSON.stringify(userLocalStorageJson));

        console.log(userLocalStorageJson);
      }
  }

  onCancel(){
    this.submitted = false;
    this.form.reset();
  }

}
