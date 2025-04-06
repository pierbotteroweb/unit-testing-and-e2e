import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should fetch users', () => {
    const mockUsers = [{id:1, name:'Alice'}];
    service.getUsers().subscribe(users=>{
      expect(users.length).toBe(1);
      expect(users[0].name).toBe('Alice')
    })

    const req = httpMock.expectOne('assets/users.json')
    expect(req.request.method).toBe('GET')
    req.flush(mockUsers)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
