import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebascssComponent } from './pruebascss.component';

describe('PruebascssComponent', () => {
  let component: PruebascssComponent;
  let fixture: ComponentFixture<PruebascssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebascssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebascssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
