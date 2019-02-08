import { TestBed } from '@angular/core/testing';

import { RestaurantService } from './restaurant.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('RestaurantService', () => {
  let httpMock : HttpTestingController;
  let restaurantService: RestaurantService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      RestaurantService
    ]
  }));

  beforeEach(() => {
    httpMock = TestBed.get(HttpTestingController);
    restaurantService = TestBed.get(RestaurantService);
  })

  it('should be created', () => {
    expect(restaurantService).toBeTruthy();
  });

  it('should make a get request to states', () => {
    const mockStates = {
      data: [
        {name: 'Missouri', short: 'MO'}
      ]
    };

    restaurantService.getStates().subscribe((states) => {
      expect(states).toEqual(mockStates);
    });

    let url = '/api/states';
    const req = httpMock.expectOne(url);

    expect(req.request.method).toEqual('GET');
    req.flush(mockStates);

    httpMock.verify();
  });

  it('should make a get request to cities', () => {
    const mockCities = {
      data: [
        {name: 'Kansas City', state: 'MO'}
      ]
    };

    restaurantService.getCities('MO').subscribe((cities) => {
      expect(cities).toEqual(mockCities);
    });

    let url = '/api/cities?state=MO';
    const req = httpMock.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(mockCities);

    httpMock.verify();
  })


});