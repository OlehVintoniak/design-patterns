interface Strategy {
    execute(a, b);
}

class ConcreteStrategyAdd implements Strategy {
    execute(a: any, b: any) {
        return a + b;
    }
}

class ConcreteStrategySubtract implements Strategy {
    execute(a: any, b: any) {
        return a - b;
    }
}

class Context {

    private strategy : Strategy;

    setStrategy(strategy : Strategy){
        this.strategy = strategy;
    }

    executeStrategy(a, b) {
        return this.strategy.execute(a, b);
    }
}

let context: Context = new Context();
let addStrategy : ConcreteStrategyAdd = new ConcreteStrategyAdd();
let subtractStrategy : ConcreteStrategySubtract = new ConcreteStrategySubtract();
context.setStrategy(subtractStrategy);
console.log(context.executeStrategy(1,2));