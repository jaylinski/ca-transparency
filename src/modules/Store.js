export default class Store extends EventTarget {
  constructor({ data, options }) {
    super();

    this.data = data;
    this.options = options;

    // Default values.
    this.route = 'dashboard';

    // Actions
    this.actions = {
      updateOptions: async (event) => {
        const option = event.target.dataset.option;
        this.options[option] = event.target.checked;
        this.commit('options', this.options); // Make sure that the DOM will be re-rendered.

        if (option === 'replayNotification') {
          try {
            const permissionGranted = await browser.permissions.request({ permissions: ['notifications'] });
            if (!permissionGranted) this.options[option] = false;
          } catch (error) {
            this.options[option] = false;
            console.error(error);
          }
        }

        await this.options.saveToStorage();
        this.commit('options', this.options);
      },
    };
  }

  /**
   * Commit a new state to the store.
   *
   * @param key
   * @param callback
   * @returns {*}
   */
  commit(key, callback) {
    if (typeof callback === 'function') {
      this[key] = callback(this[key], this);
    } else {
      this[key] = callback;
    }

    this.dispatchEvent(new CustomEvent('store.updated'));

    return this[key];
  }
}
