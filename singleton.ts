class Singleton {

    // Private constructor and instance
    private static instance : Singleton;
    private constructor() { console.log('Created!'); }

    static getInstance() : Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public someAction() {
        console.log('Some action');
    }
}

Singleton.getInstance().someAction();
Singleton.getInstance().someAction();
Singleton.getInstance().someAction();