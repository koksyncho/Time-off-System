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
  selector: 'app-rc-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: '../../templates/rc-calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class RcCalendarComponent implements OnInit {

  modalContent = this.calService.modalContent;
  view = this.calService.view;
  viewDate = this.calService.viewDate;
  modalData = this.calService.modalData;
  refresh = this.calService.refresh;
  events = this.calService.events;

  constructor(private calService: CalendarService, private userService: UserService) {}

  ngOnInit() {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }) {
    this.calService.addEventRC(date);
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
