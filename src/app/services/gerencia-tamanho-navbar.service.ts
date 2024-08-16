import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GerenciaTamanhoNavbarService {
  private manageResize = new BehaviorSubject<boolean>(false)
  private isResizeActive = this.manageResize.asObservable()
  constructor() { }

  changeWidth() {
    const isResizeActive = this.manageResize.value
    this.manageResize.next(!isResizeActive)
  }

  getSize(): boolean { 
    return this.manageResize.value;
  }
}
