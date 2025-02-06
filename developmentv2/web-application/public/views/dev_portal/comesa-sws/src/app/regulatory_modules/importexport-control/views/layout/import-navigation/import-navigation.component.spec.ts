import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportNavigationComponent } from './import-navigation.component';

describe('ImportNavigationComponent', () => {
  let component: ImportNavigationComponent;
  let fixture: ComponentFixture<ImportNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportNavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImportNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
