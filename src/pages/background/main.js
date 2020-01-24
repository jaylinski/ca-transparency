import Data from './../../modules/Data.js';

const WEB_REQUEST_FILTER = ['*://*/*'];

(async () => {
  const data = new Data();
  await data.getFormStorage();

  async function onHeadersReceivedListener(details) {
    // TODO What happens on a http request with no sec?
    const securityInfo = await browser.webRequest.getSecurityInfo(details.requestId, {
      certificateChain: true,
      rawDER: false,
    });

    for (const certificate of securityInfo.certificates) {
      // Check for the root CA
      // TODO What about custom root CAs?
      if (certificate.isBuiltInRoot) {
        // TODO parse issuer string
        data.certificateAuthorities[certificate.issuer] = true;
      }
    }

    // TODO We don't need await here...
    //      Get rid of await to speed up plugin? Can this lead to race conditions?
    await data.saveToStorage();

    return {};
  }

  // Listen for header events, since those contain TLS information:
  if (!browser.webRequest.onHeadersReceived.hasListener(onHeadersReceivedListener)) {
    browser.webRequest.onHeadersReceived.addListener(onHeadersReceivedListener, { urls: WEB_REQUEST_FILTER }, [
      'blocking',
    ]);
  }
})();
