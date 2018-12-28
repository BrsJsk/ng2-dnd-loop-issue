import {
  AfterViewInit,
  Component, EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  OnInit, Output,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {SortableComponent} from 'ng2-dnd';
import {ControlValueAccessor} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, ControlValueAccessor, AfterViewInit {
  panelOpenState: boolean = false;

  public panel = [
    {
      title: 'Panel1',
      content: 'Panel content',
      expanded: false
    },
    {
      title: 'Panel2',
      content: 'Panel content',
      expanded: false
    },
    {
      title: 'Pane3l',
      content: 'Panel content',
      expanded: false
    },
    {
      title: 'Panel4',
      content: 'Panel content',
      expanded: false
    },
    {
      title: 'Panel5',
      content: 'Panel content',
      expanded: false
    },
    {
      title: 'Panel6',
      content: 'Panel content',
      expanded: false
    },
    {
      title: 'Panel7',
      content: 'Panel content',
      expanded: false
    },
    {
      title: 'Panel8',
      content: 'Panel content',
      expanded: false
    },
    {
      title: 'Panel9',
      content: 'Panel content',
      expanded: false
    }
  ];

  @ViewChildren(SortableComponent) draggables: QueryList<SortableComponent>;
  private clone: HTMLElement;


  ngAfterViewInit() {
    // this.draggables.changes.subscribe(() => {
    //   this.draggables.forEach((ref) => {
    //     ref._elem.addEventListener('dragstart', (event) => {
    //       this.clone = <HTMLElement>event.srcElement.children[0].cloneNode(true);
    //       this.clone.id = 'clone';
    //       this.clone.classList.remove('dnd-sortable-drag');
    //       this.clone.classList.add('clone');
    //       document.body.appendChild(this.clone);
    //       event.dataTransfer.setDragImage(this.clone, 0, 0);
    //     }, false);
    //     ref._elem.addEventListener('dragend', (event) => {
    //       let t = document.getElementById('clone');
    //       if (t) {
    //         t.remove();
    //       }
    //     }, false);
    //   });
    // });
  }

  public addAccordion() {
    this.panel.push({
      title: 'Panel added',
      content: 'Panel content',
      expanded: false
    });
  }

  public openAll() {
    this.panel.forEach(i => {
      i.expanded = true
    })
  }

  public closeAll() {
    this.panel.forEach(i => {
      i.expanded = false
    })
  }

}
