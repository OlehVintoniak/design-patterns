enum UserStatusEnum {
    Ready, Completed
}

class User {
    private memento: UserMemento;
    private firstName: string;
    private lastName: string;
    private status: UserStatusEnum;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        // set initial status 
        this.status = UserStatusEnum.Ready;
        this.memento = new UserMemento(UserStatusEnum.Ready);
    }

    startProcessing() {
        // do some processing, api calls etc.
        this.status = UserStatusEnum.Completed;
    }

    revertState() {
        this.status = this.memento.status;
    }

    getStatus(): UserStatusEnum {
        return this.status;
    }
}

class UserMemento {
    readonly status: UserStatusEnum;

    constructor(status: UserStatusEnum) {
        this.status = status;
    }
}

let user = new User('John', 'Siera');

console.log(`Initial status: ${user.getStatus().toString()}`);

try {
    user.startProcessing();
    throw 'Critical error.';
}
catch(e) {
    user.revertState();
}

console.log(`Status after the failure: ${user.getStatus().toString()}`);