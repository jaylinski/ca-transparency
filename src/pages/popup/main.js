import Data from './../../modules/Data.js';
import Options from './../../modules/Options.js';
import Store from './../../modules/Store.js';
import View from './../../modules/View.js';

(async () => {
  const data = new Data();
  await data.getFormStorage();

  const options = new Options();
  await options.getFormStorage();

  new View({
    root: document.getElementById('app'),
    store: new Store({ data, options }),
  });
})();
