import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomButtonComponent } from './button.component';
import { AtomLoaderComponent } from '../loader/loader.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

describe('AtomButtonComponent', () => {
  let component: AtomButtonComponent;
  let fixture: ComponentFixture<AtomButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomButtonComponent, AtomLoaderComponent, RouterLink, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
