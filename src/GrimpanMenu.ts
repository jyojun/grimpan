import type Grimpan from "./AbstractGrimpan";
import type IEGrimpan from "./IEGrimpan";
import type ChromeGrimpan from "./ChromeGrimpan";

export abstract class GrimpanMenu {
  grimpan: Grimpan;
  protected constructor(grimpan: Grimpan) {
    this.grimpan = grimpan;
  }

  abstract initialize(): void;

  static getInstance(grimpan: Grimpan) {}
}

export class ChromeGrimpanMenu extends GrimpanMenu {
  private static instance: GrimpanMenu;
  override initialize(): void {}
  static override getInstance(grimpan: ChromeGrimpan): ChromeGrimpanMenu {
    if (!this.instance) {
      this.instance = new ChromeGrimpanMenu(grimpan);
    }
    return this.instance;
  }
}

export class IEGrimpanMenu extends GrimpanMenu {
  private static instance: GrimpanMenu;
  override initialize(): void {}
  static override getInstance(grimpan: IEGrimpan): IEGrimpanMenu {
    if (!this.instance) {
      this.instance = new IEGrimpanMenu(grimpan);
    }
    return this.instance;
  }
}
