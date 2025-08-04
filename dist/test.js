function main(ob) { }
const obj = {
    name: "hello",
    xyz: "abc",
    getName() {
        return this.name;
    },
};
main(obj);
class AC {
    // private name: string;
    hello;
    constructor(hello) {
        // this.name = name;
        this.hello = hello;
    }
}
const ac = {
    hello: "world",
};
function main2(obj) { }
main2({ hello: "zerocho" });
export {};
//# sourceMappingURL=test.js.map