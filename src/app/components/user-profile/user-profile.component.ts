import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, booleanAttribute, numberAttribute, output, viewChild } from '@angular/core';
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


export class UserProfileComponent implements OnInit, OnDestroy, AfterViewInit {
  //parent to child
  @Input({ alias: "userName" }) name = "";
  @Input({ transform: booleanAttribute }) isSingle!: boolean;
  @Input({ transform: numberAttribute }) salary!: number;

  //child to Parent
  @Output() myEvent = new EventEmitter<User>()

  sendData() {
    this.myEvent.emit({ name: this.name, newSalary: 2500 })
  }
  phone: number = 1234678;

  @ViewChild("myheading")heading?:ElementRef



  constructor() {
    //init props
    //DI
    // Event Listener
    console.log("Constructor Called", this.name);
  }

  ngAfterViewInit(): void {
    console.log("afterviewinit", this.heading?.nativeElement.textContent)
  }
  ngOnInit() {
    //init props
    //initial Api call
    // Event Listener
    console.log("ngoninit Called", this.name);
  }

  ngOnDestroy() {
    //unregisters event listener
    console.log("Users Destroyed")
  }
  //   inputval:string = "Test";  
  // onchange(e: Event){
  //   const value = (e.target as HTMLInputElement).value
  //  this.inputval = value;   
  // }
}
function formatName(value: string) {
  return "Hi " + value
}