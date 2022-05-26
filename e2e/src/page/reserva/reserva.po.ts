import { by, element } from 'protractor';

export class ReservaPage {
  private linkCrearReserva = element.all(by.id('linkCrearReserva'));
  private linkListarReserva = element.all(by.id('linkListarReserva'));
  private inputNombreReserva = element.all(by.id('nombreReserva'));
  private inputPlacaReserva = element.all(by.id('reservaPlaca'));
  private selectServicioReserva = element.all(by.id('servicioReserva'));
  private inputSearchReserva = element.all(by.id('searchReserva'));
  private selectAgendaReserva = element.all(by.id('agendaReserva'));
  private listaReservas = element.all(by.css('table.tbody tr'));

  async clickBotonCrearReserva() {
    await this.linkCrearReserva.click();
  }

  async clickBotonListarReserva() {
    await this.linkListarReserva.click();
  }

  async ingresarNombre(nombreReserva) {
    await this.inputNombreReserva.sendKeys(nombreReserva);
  }

  async ingresarPlaca(placaReserva) {
    await this.inputPlacaReserva.sendKeys(placaReserva);
  }

  async ingresarServicio(servicoReserva) {
    await this.selectServicioReserva.sendKeys(servicoReserva);
  }

  async ingresarSearch(searchReserva) {
    await this.inputSearchReserva.sendKeys(searchReserva);
  }
  async ingresarAgenda(agendaReserva) {
    await this.selectAgendaReserva.sendKeys(agendaReserva);
  }

  async contarReservas() {
    return this.listaReservas.count();
  }
}
