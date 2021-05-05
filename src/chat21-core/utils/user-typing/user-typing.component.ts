import { Component, OnInit, OnDestroy, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'user-typing',
  templateUrl: './user-typing.component.html',
  styleUrls: ['./user-typing.component.scss'],
})
export class UserTypingComponent implements OnInit, OnDestroy {

  // @Input() idConversation: string;
  // @Input() idCurrentUser: string;
  // @Input() isDirect: boolean;
  @Input() translationMap: Map<string, string>;
  @Input() foregroundColor: string;
  @Input() nameUserTypingNow: string;
  // @Input() membersConversation: [string];

  constructor(private elementRef: ElementRef ) { }

  /** */
  ngOnInit() {
    console.log('UserTypingComponent - ngOnInit');
    this.elementRef.nativeElement.style.setProperty('--foregroundColor', this.foregroundColor);
  }

  /** */
  ngOnDestroy() {
    console.log('UserTypingComponent - ngOnDestroy');
    // this.unsubescribeAll();
  }


}