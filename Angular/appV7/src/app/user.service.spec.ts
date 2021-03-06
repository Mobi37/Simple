import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserService);
    backend = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should get one user', () => {
    const mockUser = {
      name: "Jerry"
    }

    service.getOne(1).subscribe( user => {
      expect(user).toEqual(mockUser);
    } )

    backend.expectOne({
      method: "GET",
      url: "/users/1"
    }).flush(mockUser);
    
  });


  it('should get list of user', () => {
    const mockUsers = [{
      name: "Jerry"
    }]

    service.getAll().subscribe( users => {
      expect(users).toEqual(mockUsers);
    } )

    backend.expectOne({
      method: "GET",
      url: "/users"
    }).flush(mockUsers);
    
  });

});
