import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() name!: string;

  @ViewChild('heading') heading!: ElementRef;

  @ContentChild('contentParagraph') contentParagraph!: ElementRef;

  constructor() {
    console.log('constrocutor called!');
  }

  ngOnChanges(chnages: SimpleChanges): void {
    console.log('OnChanges() called!');
    console.log('SimpleChanges: ', chnages);
  }

  ngOnInit(): void {
    console.log('ngOnInit() called!');
    console.log('ngOnInit() heading:', this.heading.nativeElement.textContent);
    console.log(
      'ngOnInit() contentParagraph:',
      this.contentParagraph.nativeElement.textContent
    );
  }

  ngDoCheck(): void {
    console.log('ngDoCheck() called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() called!');
    console.log(
      'ngOnInit() contentParagraph:',
      this.contentParagraph.nativeElement.textContent
    );
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() called!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() called!');
    console.log(
      'ngAfterViewInit() heading:',
      this.heading.nativeElement.textContent
    );
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked() called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy() called!');
  }
}
