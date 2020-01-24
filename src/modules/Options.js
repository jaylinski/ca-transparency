export default class Options {
  constructor() {
    this.foo = true;
  }

  async getFormStorage() {
    try {
      const { options } = await browser.storage.local.get('options');
    } catch (e) {
      // There are no options set yet.
      // Since we provide default `null` values this is okay.
    }
  }

  async saveToStorage() {
    await browser.storage.local.set({
      options: {
        foo: this.foo,
      },
    });
  }
}
