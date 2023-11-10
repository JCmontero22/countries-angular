import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShearchBoxComponent } from './shearch-box.component';

describe('ShearchBoxComponent', () => {
  let component: ShearchBoxComponent;
  let fixture: ComponentFixture<ShearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShearchBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
