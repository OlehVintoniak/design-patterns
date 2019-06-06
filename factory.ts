
enum LoggerType {
    File,
    Console,
    Db
}

interface  Logger {
    Log();
}

class FileLogger implements Logger {
    Log() {
        console.log('I am file logger.');
    }
}

class ConsoleLogger implements Logger {
    Log() {
        console.log('I am console logger.');
    }
}

class DbLogger implements Logger {
    Log() {
        console.log('I am database logger.');
    }
}

class LoggerFactory {
    CreateLogger(loggerType: LoggerType) : Logger {
        switch(loggerType) {
            case LoggerType.File:
                return new FileLogger();
            case LoggerType.Console:
                return new ConsoleLogger();
            case LoggerType.Db:
                return new DbLogger();
        }
    }
}

let factory : LoggerFactory = new LoggerFactory();
let logger : Logger = factory.CreateLogger(LoggerType.File);
logger.Log();