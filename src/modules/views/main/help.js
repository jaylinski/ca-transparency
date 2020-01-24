import { html } from './../../utils/dom.js';

export default (manifest, i18n) => html`
  <div class="c-section__content c-help">
    <h1 class="c-help__headline">${i18n.getMessage('helpHeadline')}</h1>
    <p>${i18n.getMessage('helpText')}</p>
    <ul>
      <li><a href="${manifest.homepage_url}/issues" target="_blank">GitHub Issues</a></li>
      <li><a href="https://addons.mozilla.org/firefox/addon/ca-transparency/" target="_blank">Firefox Add-on</a></li>
    </ul>
  </div>
`;
