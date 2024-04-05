import { Component, EventEmitter, Input, Output, booleanAttribute, numberAttribute, output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../modals/user';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { CountryCodePipe } from "../../pipes/country-code.pipe";
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
    selector: 'app-user-profile',
    standalone: true,
    templateUrl: './user-profile.component.html',
    styleUrl: './user-profile.component.css',
    imports: [FormsModule, UpperCasePipe, CurrencyPipe, CountryCodePipe, HighlightDirective]
})


export class UserProfileComponent {
  //parent to child
  @Input({alias: "userName"}) name = "";
  @Input({transform: booleanAttribute}) isSingle!:boolean;
  @Input ({transform:numberAttribute}) salary!:number;
 
  //child to Parent
  @Output() myEvent = new EventEmitter<User>()

  sendData(){
    this.myEvent.emit({name:this.name, newSalary:2500})
  }
  phone:number= 1234678;

 
//   inputval:string = "Test";  
// onchange(e: Event){
//   const value = (e.target as HTMLInputElement).value
//  this.inputval = value;   
// }
}
function formatName(value:string){
  return "Hi " + value
}