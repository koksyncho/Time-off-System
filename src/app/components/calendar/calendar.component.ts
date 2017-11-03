import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit
} from '@angular/core';

import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';

import { Subject } from 'rxjs/Subject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';

import { UserService } from '../../services/user.service';
import { CalendarService } from '../../services/calendar.service';

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: '../../templates/calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  modalContent = this.calService.modalContent;
  view = this.calService.view;
  viewDate = this.calService.viewDate;
  modalData = this.calService.modalData;
  refresh = this.calService.refresh;
  events = this.calService.events;
  activeDayIsOpen = this.calService.activeDayIsOpen;

  constructor(private calService: CalendarService, private userService: UserService) {}

  ngOnInit() {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }) {
    if (isSameMonth(date, this.viewDate)) {
      if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
          this.activeDayIsOpen = false;
      } else {
          this.activeDayIsOpen = true;
          this.viewDate = date;
      }
    }
  }

  eventTimesChanged(param: any) {
    this.calService.eventTimesChanged(param);
  }

  handleEvent(param: any, param1: any) {
    this.calService.handleEvent(param, param1);
  }

  addEvent() {
    this.calService.addEvent();
  }

}
