"use strict";
exports.__esModule = true;
var Singleton = /** @class */ (function () {
    function Singleton() {
        console.log('Created!');
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.someAction = function () {
        console.log('some action');
    };
    return Singleton;
}());
exports.Singleton = Singleton;
Singleton.getInstance().someAction();
Singleton.getInstance().someAction();
Singleton.getInstance().someAction();
