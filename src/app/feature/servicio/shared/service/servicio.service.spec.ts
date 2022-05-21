import { TestBed } from '@angular/core/testing';

import { ServicioService } from './servicio.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpService} from "@core-service/http.service";

describe('ServicioService', () => {
  let service: ServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServicioService, HttpService]
    });
    service = TestBed.inject(ServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
