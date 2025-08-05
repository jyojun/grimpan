import Grimpan from "./AbstractGrimpan";

class ChromeGrimpan extends Grimpan {
  private static instance: Grimpan;

  initialize(): void {}
  initializeMenu(): void {}

  static override getInstance() {
    if (!this.instance) {
      this.instance = new ChromeGrimpan(document.querySelector("canvas"));
    }
    return this.instance;
  }
}

export default ChromeGrimpan;
