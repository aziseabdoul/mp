import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Leave } from '../leave';
import { TypeOfLeaveService } from '../type-of-leave.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  leaves: Observable<Leave[]>;

  constructor(private typeOfLeaveService: TypeOfLeaveService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.leaves = this.typeOfLeaveService.getAllTypeOfLeave();
  }

}
