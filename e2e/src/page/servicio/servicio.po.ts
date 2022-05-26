import { by, element } from 'protractor';

export class ServicioPage {
  private linkCrearServicio = element.all(by.id('linkCrearServicio'));
  private linkListarServicio = element.all(by.id('linkListarServicio'));
  private inputNombreServicio = element.all(by.id('nombreServicio'));
  private inputValorServicio = element.all(by.id('valorServicio'));
  private listaServicios = element.all(by.css('table.tbody tr'));

  async clickBotonCrearServicio() {
    await this.linkCrearServicio.click();
  }

  async clickBotonListarservicio() {
    await this.linkListarServicio.click();
  }

  async ingresarNombre(nombreServicio) {
    await this.inputNombreServicio.sendKeys(nombreServicio);
  }

  async ingresarValor(valorServicio) {
    await this.inputValorServicio .sendKeys(valorServicio);
  }

  async contarServicios() {
    return this.listaServicios.count();
  }
}
