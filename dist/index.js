import { ChromeGrimpanFactory } from "./GrimpanFactory";
function main() {
    const factory = ChromeGrimpanFactory;
    const grimpan = factory.createGrimpan();
    const grimpanMenu = factory.createGrimpanMenu(grimpan);
    const grimpanHistory = factory.createGrimpanHistory(grimpan);
    grimpan.initialize();
    grimpanMenu.initialize();
    grimpanHistory.initialize(); // 추가된 부분 (히스토리 기능 추가)
}
main();
//# sourceMappingURL=index.js.map