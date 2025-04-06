import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { CapitalizePipe } from 'src/app/shared/capitalize.pipe';
import { UserService } from '../user.service';
import { of } from 'rxjs';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let mockService: any;

  beforeEach(() => {
    mockService = jasmine.createSpyObj(['getUsers']);
    TestBed.configureTestingModule({
      declarations: [ UserListComponent, CapitalizePipe ],
      providers: [{provide: UserService, useValue: mockService}]
    });

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
  });

  it('should fetch and display users', () => {
    mockService.getUsers.and.returnValue(of([{id:1, name: 'john'}]));
    component.ngOnInit();
    expect(component.users.length).toBe(1);
    expect(component.users[0].name).toBe('john');
  });
});
