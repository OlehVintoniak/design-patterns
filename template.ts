  abstract class PaymentProcessor {
    // Template method
    public processPayment(): void {
      console.log("1. Start template method.");

      this.validate();

      console.log("2. Validated.");

      this.charge();

      console.log("3. End template method.");
    }
  
    public abstract validate();
    public abstract charge();
  }

  class Visa extends PaymentProcessor {
    validate(): void {
      console.log('Visa specific validation.');
    }
  
    charge(): void {
      console.log('Charge from visa credit card.');
    }
  }
  
  class MasterCard extends PaymentProcessor {
    validate(): void {
      console.log('MasterCard specific validation.');
    }
  
    charge(): void {
      console.log('Charge from MasterCard.');
    }
  }

  const visa = new Visa();
  const masterCard = new MasterCard();

  visa.processPayment();
  masterCard.processPayment();