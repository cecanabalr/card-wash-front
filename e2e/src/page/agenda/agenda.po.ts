import { by, element } from 'protractor';

export class AgendaPage {
  private linkCrearAgenda = element(by.id('linkCrearAgenda'));
  private linkListarAgenda = element(by.id('linkListarAgenda'));
  private inputFechaInicioAgenda = element(by.id('fechaInicioAgenda'));
  private inputFechaFinAgenda = element(by.id('fechaFinAgenda'));
  private listaAgendas = element.all(by.css('table.tbody tr'));

  async clickBotonCrearAgenda() {
    await this.linkCrearAgenda.click();
  }

  async clickBotonListarAgendas() {
    await this.linkListarAgenda.click();
  }

  async ingresarFechaInicio(fechaInicioAgenda) {
    await this.inputFechaInicioAgenda.sendKeys(fechaInicioAgenda);
  }

  async ingresarFechaFin(fechaFinAgenda) {
    await this.inputFechaFinAgenda.sendKeys(fechaFinAgenda);
  }

  async contarAgendas() {
    return this.listaAgendas.count();
  }
}
