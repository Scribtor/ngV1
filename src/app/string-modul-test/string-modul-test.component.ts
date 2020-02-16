import { Component, OnInit } from '@angular/core';
import { String, StringBuilder } from 'typescript-string-operations';

@Component({
  selector: 'dejino-string-modul-test',
  templateUrl: './string-modul-test.component.html',
  styleUrls: ['./string-modul-test.component.scss']
})
export class StringModulTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// document.write(String.Format('{0:L}', 'APPLE'));
// document.write(String.Format('{0:d}', '2017-01-23 00:00'));
// document.write(String.Format('{0:s}', '21.03.2017 22:15:01'));
// document.write(String.Format('{0:L}', 'APPLE'));
console.log('neprozvan konzolni ispis');

