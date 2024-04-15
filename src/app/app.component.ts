import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { User } from '../modals/user';
import { JokeComponent } from "./components/joke/joke.component";
import { AComponent } from "./components/a/a.component";
import { B1Component } from "./components/b1/b1.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, UserProfileComponent, JokeComponent, AComponent, B1Component]
})
export class AppComponent {
  title = 'codebin';

  recievedData(e:User){
  console.log(e)
  const userIndex = this.users.findIndex(user => user.name == e.name)
  this.users[userIndex].salary = e.newSalary
  }
  users = [
    {name: "sufiyan", isSingle:true, salary:10000 },
    // {name: "sufi", isSingle:false, salary:30000 },
    // {name: "sufiyan Abbasi", isSingle:true, salary:20000 },
  ]

  clear(){
    this.users = [];
  }
}
