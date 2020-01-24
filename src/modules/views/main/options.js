import { html } from './../../utils/dom.js';

export default (store, i18n) => {
  const reload = () => browser.runtime.reload();

  return html`
    <div class="c-options c-section__content">
      <table cellspacing="0" cellpadding="0">
        <tbody>
          <tr>
            <th>
              <label for="replay_notification">foo i18n</label>
              <small>foo i18n sub</small>
            </th>
            <td>
              <!-- TODO Use a more visually appealing on-off switch:
                   https://material.angular.io/components/slide-toggle/overview -->
              <input
                @change="${store.actions.updateOptions}"
                type="checkbox"
                id="replay_notification"
                data-option="replayNotification"
                role="switch"
                .checked=${store.options.foo}
                ?checked=${store.options.foo}
                aria-checked="${store.options.foo ? 'true' : 'false'}"
              />
            </td>
          </tr>
        </tbody>
      </table>
      - Warn me when the CA of a website changes
      - Warn me when a new CA is used
    </div>
  `;
};
