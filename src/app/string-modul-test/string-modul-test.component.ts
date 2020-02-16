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

console.log(String.Format('{0:L}', 'APPLE'));
console.log(String.Format('{0:d}', '2017-01-23 00:00'));
console.log(String.Format('{0:s}', '21.03.2017 22:15:01'));
console.log(String.Format('{0:L}', 'APPLE'));
