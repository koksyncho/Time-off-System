import { Component, Inject } from '@angular/core';
import { OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import { UserService } from '../../services/user.service';

import { Router } from '@angular/router';

import { Request } from '../../models/request';

@Component({
  selector: 'app-single-request',
  templateUrl: '../../templates/single-request.component.html',
  styleUrls: ['./single-request.component.css'],
  providers: [
    { provide: 'Window',  useValue: window }
  ]
})
export class SingleRequestComponent implements OnInit {

  constructor(
  	@Inject('Window') private window: Window,
    private router:Router,
    private userService: UserService
  ) { }


  download(requestDetails) {
    var doc = new jsPDF();
    doc.text(20, 20, 'Hello ' + requestDetails + ' world!');
    doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
    doc.addPage();
    doc.text(20, 20, 'Do you like that?');

    // Save the PDF
    doc.save('Request.pdf');
  }

  ngOnInit() {
  }

}
