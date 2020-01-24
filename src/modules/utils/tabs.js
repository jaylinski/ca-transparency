/**
 * Get the active tab from the active window.
 *
 * @returns {Promise}
 */
async function getActiveTab() {
  const tabs = await browser.tabs.query({ active: true, currentWindow: true });
  return tabs[0];
}

export { getActiveTab };
