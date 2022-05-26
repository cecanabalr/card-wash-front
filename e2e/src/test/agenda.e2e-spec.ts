import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import {AgendaPage} from '../page/agenda/agenda.po';
describe('workspace-project Agenda', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let agenda: AgendaPage;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    agenda = new AgendaPage();
  });

  it('Deberia crear agendas', () => {
    const FECHA_INICIO = '2022-05-31';
    const FECHA_FIN = '2022-06-01';

    page.navigateTo();
    navBar.clickBotonAgendas();
    agenda.clickBotonCrearAgenda();
    agenda.ingresarFechaInicio(FECHA_INICIO);
    agenda.ingresarFechaFin(FECHA_FIN);

  });

  it('Deberia listar agendas', () => {
    page.navigateTo();
    navBar.clickBotonAgendas();
    agenda.clickBotonListarAgendas();

    expect(0).toBe(agenda.contarAgendas());
  });
});
