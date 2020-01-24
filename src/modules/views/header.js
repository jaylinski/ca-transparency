import { html } from './../utils/dom.js';

export default (i18n) => html`
  <div class="c-logo">
    <div><img src="/assets/logo.svg" alt="CA Transparancy Logo" /></div>
  </div>
  <div class="c-header">
    <div class="c-header__title">${i18n.getMessage('extensionName')}</div>
  </div>
`;
