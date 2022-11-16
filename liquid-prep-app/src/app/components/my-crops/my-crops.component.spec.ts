import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MyCropsComponent } from './my-crops.component';

describe('MyCropsComponent', () => {
  let component: MyCropsComponent;
  let fixture: ComponentFixture<MyCropsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MyCropsComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call tabClicked', () => {
    // mock parameter for tab
    const tab = 'my-crops';

    spyOn(component, 'tabClicked');
    component.tabClicked(tab);
    expect(component.tabClicked).toHaveBeenCalled();
  });

  it('should call onFabClicked', () => {
    spyOn(component, 'fabClicked');
    component.fabClicked();
    expect(component.fabClicked).toHaveBeenCalled();
  });
});
