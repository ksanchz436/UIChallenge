// import { 
//   animate,
//   animation,
//   style,
//   transition,
//   trigger,
//   useAnimation,

// } from '@angular/animations';
// import { Component, EventEmitter, Input, Output} from '@angular/core';
// interface Snackbar {
//   message: string;
//   action: string;
//   type: string;

// }
// @Component({
//   selector: 'app-snackbar',
//   templateUrl: './snackbar.component.html',
//   styleUrls: ['./snackbar.component.css']
// })

// export class SnackbarComponent{
//   container: any;
//   _visible: boolean = false;
// }

// set visible(val) {
//   this._visible = val;
//   this.visibleChange.emit(this.visible);
//   if (this._visible) this.autoclose();
// }
// @Input() data: Snackbar = {message: '', action: '', type: ''};
// @Input() hasAction = false;

// @Output() visibleChange: EventEmitter<any> = new EventEmitter();
// @Output() onAction: EventEmitter<any> = new EventEmitter();

// transformOptions: any = 'translate3d(-50%, 100%, 0px)';
// transformOptions: string = '150ms cubic-bezier(0, 0, 0.2, 1)';


// constructor() {}
// action(): void{
//   this.onAction.emit({});
//   this.hide():

// }
// hide() {
//   this.visibleChange.emit(false);

// }
// onanimationcancel(event: any){
//   if (event.toState === 'visbile'){
//     this.container = event.element;
//     this.appendContainer();
//   }
// }

// onAnimationEnd(event: any) {
//   if (event.toState == 'void'){
//     this.hide();
//   }


// }

// }


