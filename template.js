var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PaymentProcessor = /** @class */ (function () {
    function PaymentProcessor() {
    }
    // Template method
    PaymentProcessor.prototype.processPayment = function () {
        console.log("1. Start template method.");
        this.validate();
        console.log("2. Validated.");
        this.charge();
        console.log("3. End template method.");
    };
    return PaymentProcessor;
}());
var Visa = /** @class */ (function (_super) {
    __extends(Visa, _super);
    function Visa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Visa.prototype.validate = function () {
        console.log('Visa specific validation.');
    };
    Visa.prototype.charge = function () {
        console.log('Charge from visa credit card.');
    };
    return Visa;
}(PaymentProcessor));
var MasterCard = /** @class */ (function (_super) {
    __extends(MasterCard, _super);
    function MasterCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MasterCard.prototype.validate = function () {
        console.log('MasterCard specific validation.');
    };
    MasterCard.prototype.charge = function () {
        console.log('Charge from MasterCard.');
    };
    return MasterCard;
}(PaymentProcessor));
var visa = new Visa();
var masterCard = new MasterCard();
visa.processPayment();
masterCard.processPayment();
