import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from 'src/app/modules';
import { UsermanagerService, User } from './usermanager.service';
import { GroupService } from 'src/app/modules/login/group.service';

@Component({
  selector: 'app-usermanager',
  templateUrl: './usermanager.component.html',
  styleUrls: ['./usermanager.component.scss']
})
export class UsermanagerComponent implements OnInit {

  form = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    email: new FormControl('',  [Validators.required, Validators.minLength(3)]),
    password: new FormControl('',  [Validators.required, Validators.minLength(5)]),
    group: new FormControl('', [Validators.required])
  });

  isLoading = false;
  groups: [];
  users: Array<User>;
  newUser: any;

  constructor(
    private usermanagerService: UsermanagerService,
    private groupService: GroupService
    ) { }

  ngOnInit() {
    this.groupService
        .getGroups()
        .then((response: any) => {
          this.groups = response.list;
        });
    this.usermanagerService
        .listUsers()
        .then((response: any) => {
          this.users = response.users;
        });
  }

  onSubmit() {
    if(this.form.valid){
      let id = (this.users.length + 1).toString();
      let fullName = this.form.get('fullName').value;
      let email = this.form.get('email').value;
      let password = this.form.get('password').value;
      let group = this.form.get('group').value;
      this.newUser = {id, fullName, email, password, group };
//      this.users.push({id, fullName, email, password, group });

      this.isLoading = true;
    this.usermanagerService
      .createUser(this.form.value)
      .subscribe(() => {
        this.users.push(this.newUser);
        this.isLoading = false;
      }, (reason) => {
        this.isLoading = false;
        alert(JSON.stringify(reason));
      })
    }
  }

}
