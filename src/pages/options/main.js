import Data from './../../modules/Data.js';
import Options from './../../modules/Options.js';

const localStorageData = new Data();
const localStorageOptions = new Options();

async function printDebugInformation() {
  await localStorageData.getFormStorage();
  await localStorageOptions.getFormStorage();
  document.querySelector('#debug').textContent = JSON.stringify(
    {
      manifest: browser.runtime.getManifest(),
      options: localStorageOptions,
      data: localStorageData,
    },
    null,
    '  '
  );
}

document.addEventListener('DOMContentLoaded', printDebugInformation);
