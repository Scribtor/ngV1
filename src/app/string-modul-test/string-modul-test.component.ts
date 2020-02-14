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
