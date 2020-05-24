import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildComponent } from './input-output-child.component';
import { render, screen, fireEvent } from '@testing-library/angular';
import { InputOutputParent } from './../input-output/input-output-parent.interface';

describe('InputOutputChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should do a lot', () => {
    const newItemEvent = {
      id: 0,
      name: '',
      list: [''],
      on: false,
    };

    render(ChildComponent, {
    componentProperties: {
      master: 'Master',
      newItemEvent: {
        emit: newItemEvent,
      } as any,
    },
  });

    const emitControl = screen.getByText('Emit an Event To Parent');
    const masterText = screen.getByText('Master');
    expect(masterText.textContent).toBe('Master');
    fireEvent.click(emitControl);
    expect(emitControl).toHaveBeenCalledTimes(1);
  });
});
