import { TestBed } from '@angular/core/testing';

import { AgendaService } from './agenda.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpService} from "@core-service/http.service";

describe('AgendaService', () => {
  let service: AgendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AgendaService, HttpService]
    });
    service = TestBed.inject(AgendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
