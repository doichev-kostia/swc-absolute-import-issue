export class MyContainer {
  public message: string;
  constructor(message: string) {
    this.message = message;
  }

  public print() {
    console.log(this.message);
  }
}

