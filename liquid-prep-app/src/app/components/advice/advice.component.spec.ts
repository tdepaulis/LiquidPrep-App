import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceComponent } from './advice.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing'; 

describe('AdviceComponent', () => {
  let component: AdviceComponent;
  let fixture: ComponentFixture<AdviceComponent>;
  // let router: {navigate: jasmine.createSpy('navigate')};

  beforeEach(async () => { 
    await TestBed.configureTestingModule({
      declarations: [ AdviceComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();

    // router = TestBed.inject(Router);
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(AdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    TestBed.inject(Router);
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ], 
      providers: [ { provide: Router, useValue: Router } ]
  });  
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // check if the word plantingDays is in the html
  it('should have a plantingDays', () => {
    const fixture = TestBed.createComponent(AdviceComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.plantingDays').textContent).toContain('plantingDays');
  });

  it('should navigate by backClicked', () => { 
    const spy = spyOn(router, 'navigate');
    component.backClicked();
    expect(spy).toHaveBeenCalled();
  } );

  it('should navigate by onFabClicked', () => {
    const spy = spyOn(router, 'navigate');
    component.onFabClicked();
    expect(spy).toHaveBeenCalled();
  } );

  it(`should navigate to back`, () => {
    component.backClicked();
    expect (router.navigate).toHaveBeenCalled();
 });

  
});
