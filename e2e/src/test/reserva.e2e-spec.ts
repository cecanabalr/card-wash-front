import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import {ReservaPage} from '../page/reserva/reserva.po';


describe('workspace-project Reserva', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let reserva: ReservaPage;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    reserva = new ReservaPage();
  });

  it('Deberia crear reserva', () => {
    const NOMBRE = 'carlos';
    const PLACA = 'AAA123';
    const SERVICIO = 1;
    const AGENDA = 1;
    const FECHA = '31-05-2022';

    page.navigateTo();
    navBar.clickBotonReservas();
    reserva.clickBotonCrearReserva();
    reserva.ingresarNombre(NOMBRE);
    reserva.ingresarPlaca(PLACA);
    reserva.ingresarSearch(FECHA);
    reserva.ingresarServicio(SERVICIO);
    reserva.ingresarAgenda(AGENDA);

  });

  it('Deberia listar reserva', () => {
    page.navigateTo();
    navBar.clickBotonProductos();
    reserva.clickBotonListarReserva();

    expect(0).toBe(reserva.contarReservas());
  });
});
