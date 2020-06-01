import { Component } from '@angular/core';
import {Employee} from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  employeeArray: Employee[] = [
    {id: 1, name: "Ryan", country: "United State" },
    {id: 2, name: "Mark", country: "Ireland" },
    {id: 3, name: "Patrick", country: "France"}
  ];

  selectedEmployee: Employee = new Employee();

  openEdit(employee: Employee) {
    this.selectedEmployee = employee;
  }

  addOrEdit() {
    if(this.selectedEmployee.id === 0) {
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }
    this.selectedEmployee = new Employee();
  }

  delete() {
    if(confirm("Are you sure you want to delete it?")) {
      this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
      this.selectedEmployee = new Employee()
    }
  }
}
