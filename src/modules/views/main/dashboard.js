import { html } from './../../utils/dom.js';

export default (store, i18n) => html`
  <div class="c-section__content c-dashboard">
    <p>CAs:</p>
    <ul>
      ${Object.entries(store.data.certificateAuthorities).map(
        (item) =>
          html`
            <li>${item[0]}</li>
          `
      )}
    </ul>
  </div>
`;
