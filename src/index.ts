import Grimpan from "./AbstractGrimpan";
import AbstractGrimpanFactory from "./AbstractGrimpanFactory";
import ChromeGrimpan from "./ChromeGrimpan";
import IEGrimpan from "./IEGrimpan";

class ChromeGrimpanFactory extends AbstractGrimpanFactory {
  static override createGrimpan() {
    return ChromeGrimpan.getInstance();
  }
}

class IEGrimpanFactory extends AbstractGrimpanFactory {
  static override createGrimpan() {
    return IEGrimpan.getInstance();
  }
}

function main() {
  const grimpan = ChromeGrimpanFactory.createGrimpan();
  grimpan.initialize();
  grimpan.initializeMenu();
}
main();
