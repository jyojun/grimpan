import Grimpan from "./grimpan.js";
console.log(Grimpan.getInstance() === Grimpan.getInstance());
function main(instance) {
    instance.initialize();
}
main(Grimpan.getInstance());
//# sourceMappingURL=index.js.map