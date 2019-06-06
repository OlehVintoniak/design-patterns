// Subsystem 1
class TV {

    turnOn() {
        console.log("TV turning on...");
    }

    turnOff() {
        console.log("TV turning off...");
    }
}

// Subsystem 2
class PopcornMaker {

    turnOn() {
        console.log("PopcornMaker turning on...");
    }
    
    turnOff() {
        console.log("PopcornMaker turning off...");
    }

    pop() {
        console.log("Popping corn...");
    }

    isPopcornReady() : boolean {
        return true;
    }
}

// Subsystem 3
class SoundSystem {

    private sound: number;
    setVolume(sound: number) { 
        this.sound = sound;
        console.log(`The volume has been setted to ${sound}.`);
    }

    getVolume() : number {
        return this.sound;
    }
}

// Facade
class HomeTheaterFacade {

    private tv: TV = new TV();
    private popcornMaker: PopcornMaker = new PopcornMaker();
    private soundSystem: SoundSystem = new SoundSystem();

    public watchMovie() {
        this.popcornMaker.turnOn();

        this.tv.turnOn();

        if (this.popcornMaker.isPopcornReady()) {
            this.popcornMaker.pop();
        }

        if (this.soundSystem.getVolume() !== 10){
            this.soundSystem.setVolume(10);
        }

        console.log("Watching...");
    }
}

// Client code
let homeTheater = new HomeTheaterFacade();
homeTheater.watchMovie();
