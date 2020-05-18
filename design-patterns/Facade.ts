// 它在与复杂程序库和 API 协作时特别有用。

class Facade {
  protected subSystem1: SubSystem1;

  protected subSystem2: SubSystem2;

  constructor(
    subSystem1: SubSystem1 | null = null,
    subSystem2: SubSystem2 | null = null
  ) {
    this.subSystem1 = subSystem1 || new SubSystem1();
    this.subSystem2 = subSystem2 || new SubSystem2();
  }

  public operation(): string {
    let result = "Facade initializes subSystems:\n";
    result += this.subSystem1.operation1();
    result += this.subSystem2.operation1();
    result += "Facade orders subSystems to perform the action:\n";
    result += this.subSystem1.operationN();
    result += this.subSystem2.operationZ();

    return result;
  }
}

class SubSystem1 {
  public operation1(): string {
    return "SubSystem1: Ready!\n";
  }

  // ...

  public operationN(): string {
    return "SubSystem1: Go!\n";
  }
}

class SubSystem2 {
  public operation1(): string {
    return "SubSystem2: Get ready!\n";
  }

  // ...

  public operationZ(): string {
    return "SubSystem2: Fire!";
  }
}

function clientCode(facade: Facade) {
  // ...

  console.log(facade.operation());

  // ...
}

const subSystem1 = new SubSystem1();
const subSystem2 = new SubSystem2();
const facade = new Facade(subSystem1, subSystem2);
clientCode(facade);
