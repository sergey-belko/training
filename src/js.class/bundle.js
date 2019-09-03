const Store = require('./store');
const Controller = require('./controller');

function addToGlobal(componentId, component) {
  const APP_ID = 'APP';

  if (!window[APP_ID]) {
    window[APP_ID] = {};
  }

  const appRoot = window[APP_ID];
  if (!appRoot[componentId]) {
    appRoot[componentId] = component;
    if (component.init) {
      component.init();
    }
  }
}

(function () {
  const STORE_ID = 'STORE_ID';
  const CONTROLLER_ID = 'CONTROLLER_ID';
  const store = new Store();
  addToGlobal(STORE_ID, store);
  addToGlobal(CONTROLLER_ID, new Controller(store));
}());
