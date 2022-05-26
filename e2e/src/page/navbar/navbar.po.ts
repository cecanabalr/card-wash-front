import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkProducto = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkServicio = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));
    linkAgenda = element(by.xpath('/html/body/app-root/app-navbar/nav/a[4]'));
    linkReserva = element(by.xpath('/html/body/app-root/app-navbar/nav/a[5]'));

    async clickBotonProductos() {
        await this.linkProducto.click();
    }

    async clickBotonServicios() {
      await this.linkServicio.click();
    }

    async clickBotonAgendas() {
      await this.linkAgenda.click();
    }

    async clickBotonReservas() {
      await this.linkReserva.click();
    }
}
