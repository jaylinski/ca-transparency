import help from './main/help.js';
import dashboard from './main/dashboard.js';
import options from './main/options.js';
import { html } from './../utils/dom.js';

function getClass(store, route) {
  return store.route === route ? 'c-nav__link c-nav__link--active' : 'c-nav__link';
}

function showRoute(store, route) {
  return store.route === route ? 'c-section--active' : '';
}

export default (store, i18n, manifest) => html`
  <nav class="c-nav">
    <a
      @click="${() => store.commit('route', 'dashboard')}"
      href="#"
      title="${i18n.getMessage('navDashboard')}"
      class="${getClass(store, 'dashboard')}"
    >
      D
    </a>
    <a
      @click="${() => store.commit('route', 'options')}"
      href="#"
      title="${i18n.getMessage('navOptions')}"
      class="${getClass(store, 'options')}"
    >
      <svg viewBox="0 0 24 24"><use href="/assets/symbols.svg#options"></use></svg>
    </a>
  </nav>
  <main class="c-main">
    <section class="c-section ${showRoute(store, 'dashboard')}">${dashboard(store, i18n)}</section>
    <section class="c-section ${showRoute(store, 'options')}">${options(store, i18n)}</section>
    <section class="c-section ${showRoute(store, 'help')}">${help(manifest, i18n)}</section>
  </main>
`;
