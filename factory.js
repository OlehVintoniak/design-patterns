var LoggerType;
(function (LoggerType) {
    LoggerType[LoggerType["File"] = 0] = "File";
    LoggerType[LoggerType["Console"] = 1] = "Console";
    LoggerType[LoggerType["Db"] = 2] = "Db";
})(LoggerType || (LoggerType = {}));
var FileLogger = /** @class */ (function () {
    function FileLogger() {
    }
    FileLogger.prototype.Log = function () {
        console.log('I am file logger.');
    };
    return FileLogger;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.Log = function () {
        console.log('I am console logger.');
    };
    return ConsoleLogger;
}());
var DbLogger = /** @class */ (function () {
    function DbLogger() {
    }
    DbLogger.prototype.Log = function () {
        console.log('I am database logger.');
    };
    return DbLogger;
}());
var LoggerFactory = /** @class */ (function () {
    function LoggerFactory() {
    }
    LoggerFactory.prototype.CreateLogger = function (loggerType) {
        switch (loggerType) {
            case LoggerType.File:
                return new FileLogger();
            case LoggerType.Console:
                return new ConsoleLogger();
            case LoggerType.Db:
                return new DbLogger();
        }
    };
    return LoggerFactory;
}());
var factory = new LoggerFactory();
var logger = factory.CreateLogger(LoggerType.File);
logger.Log();
