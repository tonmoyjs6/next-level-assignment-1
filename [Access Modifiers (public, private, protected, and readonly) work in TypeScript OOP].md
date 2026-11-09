5. Explain how Access Modifiers (public, private, protected, and readonly) work in TypeScript OOP with examples.

Ans:
Access Modifier is important concept in oop. It define the how property and method can be accessed. In below describe Properly about Accessed modifier:

Public: This can be accessed anywhere in the class outside the class. child class also accessed. public is default modifier in oop. if we not provide any modifier that will be the public modifier.

Private: Private accessed modifier help to secure the important data. When we use Private modifier it can not be accessed outside class as well as child class not accessed.

Protected: Protected modifier when use it can be accessed within the own class and child class. We can not accessed directly to outside the classes.

Readonly: It can be accessed when declared as well inside the constructor. This value can not changed when we declared readonly accessed modifier.

Coding Examples:

class BankAccount{
    public owner:string;
    private balance:number;
    protected bankName:string
    readonly accountNumber:number

    constructor(owner:string,balance:number){
        this.owner=owner
        this.balance=balance
        this.bankName="Pubali Bangladesh Limited"
        this.accountNumber=172890

    }

    public getBalance(){
        return this.balance
    }
}



class AccountHolder extends BankAccount{
    showBankDetails(){
        return this.bankName  // Allowed Because BankName Protected
    }
}


const account= new AccountHolder("Tonmoy",5000)   //Allowed

console.log(account.getBalance()) // allowed because public
account.balance  // error because it is private property

account.bankName // it show error because we not directly accessed the protected property

account.accountNumber=999 //you not changed the readonly property.

