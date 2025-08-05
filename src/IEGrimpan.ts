import Grimpan from "./AbstractGrimpan";

class IEGrimpan extends Grimpan {
  private static instance: Grimpan;

  initialize(): void {}
  initializeMenu(): void {}

  static override getInstance() {
    if (!this.instance) {
      this.instance = new IEGrimpan(document.querySelector("canvas"));
    }
    return this.instance;
  }
}

export default IEGrimpan;
