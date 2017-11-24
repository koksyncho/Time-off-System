import {
    Injectable,
    ChangeDetectionStrategy,
    ViewChild,
    TemplateRef
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

import {
    CalendarEvent,
    CalendarEventAction,
    CalendarEventTimesChangedEvent
} from 'angular-calendar';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Color } from '../models/event-color';

@Injectable()
export class CalendarService {

    colors: Color[] = [];

    @ViewChild('modalContent') modalContent: TemplateRef<any>;

    view = 'month';
    viewDate = new Date();

    modalData: {
        action: string;
        event: CalendarEvent;
    };

    actions: CalendarEventAction[] = [
        {
            label: '<i class="fa fa-fw fa-pencil"></i>',

            onClick: ({ event }: { event: CalendarEvent }): void => {
                this.handleEvent('Edited', event);
            }
        },
        {
            label: '<i class="fa fa-fw fa-times"></i>',

            onClick: ({ event }: { event: CalendarEvent }): void => {
                this.events = this.events.filter(iEvent => iEvent !== event);
                this.handleEvent('Deleted', event);
            }
        }
    ];

    refresh: Subject<any> = new Subject();

    events: CalendarEvent[] = [];

    activeDayIsOpen = true;
    
    requestType: string;

    constructor(private modal: NgbModal) {}

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

    eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent) {
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    }

    handleEvent(action: string, event: CalendarEvent) {
        this.modalData = { event, action };
        this.modal.open(this.modalContent, { size: 'lg' });
    }

    addEvent() {
        this.pushEvent('New Event', this.viewDate, this.newColor('#cccccc'));
        this.refresh.next();
    }
    
    addEventRC(date: Date) {
        let canAdd = true;
        let selectedDate: number = this.intifyDate(date);
        let index: number;
        let eventsIsFull = this.events.length >= 10;

        for (let i = 0; i < this.events.length; i++) {
            if (selectedDate === this.intifyDate(this.events[i].start)) {
                canAdd = false;
                index = i;
            }
        }

        if (canAdd) {
            if (this.dayCanBeSelected(selectedDate) && !eventsIsFull) {
                this.pushEvent('PTO', date, this.newColor('#32779e'));
            }
        } else {
            this.events.splice(index, 1);
        }

        this.refresh.next();
    }
    
    dayCanBeSelected(selectedDate) {
        let dayCanBeSelected: boolean;
        
        switch(this.requestType) {
            case 'PTO1': {
                dayCanBeSelected = selectedDate > this.intifyDate(this.viewDate);
                break;
            }
            case 'PTO2': {
                dayCanBeSelected = selectedDate <= this.intifyDate(this.viewDate);
                break;
            }
            default: {
                dayCanBeSelected = false;
                break;
            }
        }
        
        // return dayCanBeSelected;
        return true;
    }
    
    setRequestType(requestType: string) {
        this.requestType = requestType;
    }
    
    pushEvent(title: string, date: Date, color: Color) {
        this.events.push({
            title: title,

            start: startOfDay(date),
            end: endOfDay(date),

            color: color,
            draggable: true,

            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
    }
    
    newColor(color: string) {
        let colorObj = new Color(color, color);
        this.colors.push(colorObj);
        return colorObj;
    }
    
    intifyDate(date: Date) {
        let month = date.toDateString().substring(4, 7);
        let dateNumber = +date.toDateString().substring(8, 10);
        
        switch(month) {
            case 'Jan': {
                dateNumber += 100;
                break;
            }
            case 'Feb': {
                dateNumber += 200;
                break;
            }
            case 'Mar': {
                dateNumber += 300;
                break;
            }
            case 'Apr': {
                dateNumber += 400;
                break;
            }
            case 'May': {
                dateNumber += 500;
                break;
            }
            case 'Jun': {
                dateNumber += 600;
                break;
            }
            case 'Jul': {
                dateNumber += 700;
                break;
            }
            case 'Aug': {
                dateNumber += 800;
                break;
            }
            case 'Sep': {
                dateNumber += 900;
                break;
            }
            case 'Oct': {
                dateNumber += 1000;
                break;
            }
            case 'Nov': {
                dateNumber += 1100;
                break;
            }
            case 'Dec': {
                dateNumber += 1200;
                break;
            }
        }
        
        return dateNumber;
    }

}
