import Grimpan from "./AbstractGrimpan";
import AbstractGrimpanFactory from "./AbstractGrimpanFactory";
import ChromeGrimpan from "./ChromeGrimpan";
import IEGrimpan from "./IEGrimpan";
class ChromeGrimpanFactory extends AbstractGrimpanFactory {
    static createGrimpan() {
        return ChromeGrimpan.getInstance();
    }
}
class IEGrimpanFactory extends AbstractGrimpanFactory {
    static createGrimpan() {
        return IEGrimpan.getInstance();
    }
}
function main() {
    const grimpan = ChromeGrimpanFactory.createGrimpan();
    grimpan.initialize();
    grimpan.initializeMenu();
}
main();
//# sourceMappingURL=index.js.map