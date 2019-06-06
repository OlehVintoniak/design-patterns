var OldImplementation = /** @class */ (function () {
    function OldImplementation() {
    }
    OldImplementation.prototype.OldAction = function () {
        console.log('This is old action');
    };
    return OldImplementation;
}());
var Adapter = /** @class */ (function () {
    function Adapter() {
        this.oldImplementation = new OldImplementation();
    }
    Adapter.prototype.NewAction = function () {
        this.oldImplementation.OldAction();
    };
    return Adapter;
}());
var newImplementation = new Adapter();
newImplementation.NewAction();
