export default class Controller {
  constructor(service, store) {
    this.service = service;
    this.store = store;
  }

  init() {
    const [button] = document.getElementsByClassName('main__button');
    button.addEventListener('onClick', this.update);
  }

  update() {
    const [container] = document.getElementsByClassName('container');
    this.service.update();
    container.innerHTML = this.store.index;
  }
}


export HeroesContainer;
