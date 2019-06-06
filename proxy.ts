interface DbReader {
    ReadRecords();
}

class SimpleDbReader implements DbReader {
    ReadRecords() {
        console.log('I am reading...');
    }
}

class SequreDbReader implements DbReader {

    private reader : SimpleDbReader;

    constructor() {
        this.reader = new SimpleDbReader();
    }

    ReadRecords() {
        console.log('Check permissions!');
        this.reader.ReadRecords();
        console.log('Has been readed succesfully.');
    }
}

let sequreReader : SequreDbReader = new SequreDbReader();
sequreReader.ReadRecords();