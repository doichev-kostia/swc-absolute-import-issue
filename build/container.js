function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
export class MyContainer {
    print() {
        console.log(this.message);
    }
    constructor(message){
        _define_property(this, "message", void 0);
        this.message = message;
    }
}

//# sourceMappingURL=container.js.map