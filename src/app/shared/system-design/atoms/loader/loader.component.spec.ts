import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomLoaderComponent } from './loader.component';

describe('AtomLoaderComponent', () => {
  let component: AtomLoaderComponent;
  let fixture: ComponentFixture<AtomLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
