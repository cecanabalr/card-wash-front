import { TestBed } from '@angular/core/testing';

import { ReservaService } from './reserva.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpService} from "@core-service/http.service";

describe('ReservaService', () => {
  let service: ReservaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReservaService, HttpService]
    });
    service = TestBed.inject(ReservaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
