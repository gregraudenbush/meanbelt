import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestshowComponent } from './questshow.component';

describe('QuestshowComponent', () => {
  let component: QuestshowComponent;
  let fixture: ComponentFixture<QuestshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
