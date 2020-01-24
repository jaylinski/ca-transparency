export default class Data {
  constructor() {
    this.certificateAuthorities = {};
  }

  async getFormStorage() {
    try {
      const { data } = await browser.storage.local.get('data');
      this.certificateAuthorities = data.certificateAuthorities || {};
    } catch (e) {
      // There is no data set yet.
      // Since we provide default values this is okay.
    }
  }

  async saveToStorage() {
    await browser.storage.local.set({
      data: {
        certificateAuthorities: this.certificateAuthorities,
      },
    });
  }
}
