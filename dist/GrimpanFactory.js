import ChromeGrimpan from "./ChromeGrimpan.js";
import { ChromeGrimpanHistory, IEGrimpanHistory } from "./GrimpanHistory.js";
import { ChromeGrimpanMenu, IEGrimpanMenu } from "./GrimpanMenu.js";
import IEGrimpan from "./IEGrimpan.js";
export class AbstractGrimpanFactory {
    static createGrimpan() {
        throw new Error("하위 클래스에서 구현하셔야 합니다.");
    } // 추상 클래스로 정의해야함.
    static createGrimpanMenu(grimpan, dom) {
        throw new Error("하위 클래스에서 구현하셔야 합니다.");
    }
    static createGrimpanHistory(grimpan) {
        throw new Error("하위 클래스에서 구현하셔야 합니다.");
    }
}
export class ChromeGrimpanFactory extends AbstractGrimpanFactory {
    static createGrimpan() {
        return ChromeGrimpan.getInstance();
    }
    static createGrimpanMenu(grimpan, dom) {
        return ChromeGrimpanMenu.getInstance(grimpan, dom);
    }
    static createGrimpanHistory(grimpan) {
        return ChromeGrimpanHistory.getInstance(grimpan);
    }
}
export class IEGrimpanFactory extends AbstractGrimpanFactory {
    static createGrimpan() {
        return IEGrimpan.getInstance();
    }
    static createGrimpanMenu(grimpan, dom) {
        return IEGrimpanMenu.getInstance(grimpan, dom);
    }
    static createGrimpanHistory(grimpan) {
        return IEGrimpanHistory.getInstance(grimpan);
    }
}
