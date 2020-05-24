import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { render, screen } from '@testing-library/angular';

import { ParentComponent } from './input-output.component';

describe('InputOutputComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render', async () => {
    render(ParentComponent);
  });

  it('should render with text Master', async () => {
    render(ParentComponent);
    const valueControl = screen.getByTestId('master');
    expect(valueControl.textContent).toBe('Master');
  });

});
