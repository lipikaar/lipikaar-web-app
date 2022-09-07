import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {
  content;
  constructor() { }

  ngOnInit() {
  }

  public autoGrow() {
    // const content = this.content.nativeElement;
    let  content = document.getElementById("content")       
    content.style.overflow = 'hidden';
    content.style.height = '0px';
    content.style.height = content.scrollHeight + 'px';
  }
}
