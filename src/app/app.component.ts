import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular Project';

count = 0;
number2= 0;
number1 = 0;
result = 0;

listOfNumbers = [12,43,543,53,1];
ListOfName = ["Mukesh","Farhan","Sarnonik"]

increment = () => {

this.count++;

}


decrement = () => {

this.count--;

}

addition = () => {

this.result = this.number1 + this.number2;
}
}
