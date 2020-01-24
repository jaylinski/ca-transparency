import footer from './views/footer.js';
import header from './views/header.js';
import main from './views/main.js';
import status from './views/status.js';
import { html, render } from './utils/dom.js';

export default class View extends EventTarget {
  constructor({ root, store }) {
    super();

    this.root = root;
    this.store = store;
    this.store.addEventListener('store.updated', () => this.render());
    this.i18n = browser.i18n;
    this.manifest = browser.runtime.getManifest();

    this.render();
  }

  render() {
    const dom = this.template({
      store: this.store,
      i18n: this.i18n,
      manifest: this.manifest,
    });

    render(dom, this.root);
  }

  template({ store, i18n, manifest }) {
    return html`
      ${header(i18n)} ${status(store, i18n)} ${main(store, i18n, manifest)} ${footer(store, i18n, manifest)}
    `;
  }
}
