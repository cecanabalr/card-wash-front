import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ServicioPage } from '../page/servicio/servicio.po';
describe('workspace-project Servicio', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let servicio: ServicioPage;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    servicio = new ServicioPage();
  });

  it('Deberia crear servicio', () => {
    const NOMBRE_SERVICIO = 'lavado';
    const VALOR_SERVICIO = 20000;

    page.navigateTo();
    navBar.clickBotonServicios();
    servicio.clickBotonCrearServicio();
    servicio.ingresarNombre(NOMBRE_SERVICIO);
    servicio.ingresarValor(VALOR_SERVICIO);

  });

  it('Deberia listar servicios', () => {
    page.navigateTo();
    navBar.clickBotonServicios();
    servicio.clickBotonListarservicio();

    expect(0).toBe(servicio.contarServicios());
  });

});
