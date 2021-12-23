import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-org-some-lib2',
  template: `
    <p>
      some-lib2 works!
    </p>
  `,
  styles: [
  ]
})
export class SomeLib2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
