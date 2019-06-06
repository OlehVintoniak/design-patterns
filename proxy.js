var SimpleDbReader = /** @class */ (function () {
    function SimpleDbReader() {
    }
    SimpleDbReader.prototype.ReadRecords = function () {
        console.log('I am reading...');
    };
    return SimpleDbReader;
}());
var SequreDbReader = /** @class */ (function () {
    function SequreDbReader() {
        this.reader = new SimpleDbReader();
    }
    SequreDbReader.prototype.ReadRecords = function () {
        console.log('Check permissions!');
        this.reader.ReadRecords();
    };
    return SequreDbReader;
}());
var sequreReader = new SequreDbReader();
sequreReader.ReadRecords();
