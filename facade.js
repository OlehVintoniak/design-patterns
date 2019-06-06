// Subsystem 1
var TV = /** @class */ (function () {
    function TV() {
    }
    TV.prototype.turnOn = function () {
        console.log("TV turning on...");
    };
    TV.prototype.turnOff = function () {
        console.log("TV turning off...");
    };
    return TV;
}());
// Subsystem 2
var PopcornMaker = /** @class */ (function () {
    function PopcornMaker() {
    }
    PopcornMaker.prototype.turnOn = function () {
        console.log("PopcornMaker turning on...");
    };
    PopcornMaker.prototype.turnOff = function () {
        console.log("PopcornMaker turning off...");
    };
    PopcornMaker.prototype.pop = function () {
        console.log("Popping corn...");
    };
    PopcornMaker.prototype.isPopcornReady = function () {
        return true;
    };
    return PopcornMaker;
}());
// Subsystem 3
var SoundSystem = /** @class */ (function () {
    function SoundSystem() {
    }
    SoundSystem.prototype.setVolume = function (sound) {
        this.sound = sound;
        console.log("The volume has been setted to " + sound + ".");
    };
    SoundSystem.prototype.getVolume = function () {
        return this.sound;
    };
    return SoundSystem;
}());
// Facade
var HomeTheaterFacade = /** @class */ (function () {
    function HomeTheaterFacade() {
        this.tv = new TV();
        this.popcornMaker = new PopcornMaker();
        this.soundSystem = new SoundSystem();
    }
    HomeTheaterFacade.prototype.watchMovie = function () {
        this.popcornMaker.turnOn();
        this.tv.turnOn();
        if (this.popcornMaker.isPopcornReady()) {
            this.popcornMaker.pop();
        }
        if (this.soundSystem.getVolume() !== 10) {
            this.soundSystem.setVolume(10);
        }
        console.log("Watching...");
    };
    return HomeTheaterFacade;
}());
// Client code
var homeTheater = new HomeTheaterFacade();
homeTheater.watchMovie();
