// Some legacy interface
interface IOldInterface {
    OldAction();
}

// New modern interface
interface INewIntrface {
    NewAction();
}

class OldImplementation implements IOldInterface {
    OldAction() {
        console.log('This is old action.');
    }
}

class Adapter implements INewIntrface {

    private oldImplementation : OldImplementation;
    constructor() {
        this.oldImplementation = new OldImplementation();
    }

    NewAction() {
        this.oldImplementation.OldAction();
    }
}

let newImplementation : Adapter = new Adapter();
newImplementation.NewAction();