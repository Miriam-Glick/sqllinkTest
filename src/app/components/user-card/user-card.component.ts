import { Component } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user.interface';
import { UseService } from 'src/app/shared/services/use.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  constructor(private userService:UseService){

  }
user!:User
ngOnInit(){
  this.userService.userDetails$.subscribe((user:User)=>
    this.user= user
  )
}
}
