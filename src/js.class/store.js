export default class Store {
  constructor() {
    this.name = 'AAA;';
    this.index = 0;
  }

  update() {
    this.index = this.index + 1;
  }
}

export function State() {
  this.name = '';
}
