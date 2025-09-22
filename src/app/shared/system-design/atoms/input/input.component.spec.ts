import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomInputComponent } from './input.component';
import { LucideAngularModule } from 'lucide-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMessagesPipe } from '@/shared/pipes/error-messages/error-messages.pipe';

describe('AtomInputComponent', () => {
  let component: AtomInputComponent;
  let fixture: ComponentFixture<AtomInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomInputComponent, LucideAngularModule, ReactiveFormsModule, ErrorMessagesPipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
