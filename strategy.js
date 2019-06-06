var ConcreteStrategyAdd = /** @class */ (function () {
    function ConcreteStrategyAdd() {
    }
    ConcreteStrategyAdd.prototype.execute = function (a, b) {
        return a + b;
    };
    return ConcreteStrategyAdd;
}());
var ConcreteStrategySubtract = /** @class */ (function () {
    function ConcreteStrategySubtract() {
    }
    ConcreteStrategySubtract.prototype.execute = function (a, b) {
        return a - b;
    };
    return ConcreteStrategySubtract;
}());
var Context = /** @class */ (function () {
    function Context() {
    }
    Context.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Context.prototype.executeStrategy = function (a, b) {
        return this.strategy.execute(a, b);
    };
    return Context;
}());
var context = new Context();
var addStrategy = new ConcreteStrategyAdd();
var subtractStrategy = new ConcreteStrategySubtract();
context.setStrategy(subtractStrategy);
console.log(context.executeStrategy(1, 2));
