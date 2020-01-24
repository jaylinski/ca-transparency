const fs = require('fs');
const path = require('path');
const glob = require('glob');

// #######################
// ### Configuration
// #######################

const node_modules = ['lit-html'];

// #######################
// ### Build
// #######################

console.log('Building ...');

fs.mkdirSync('./build');

// Copy files.
console.log('Copying source files ...');
glob('./src/**/*.*', { ignore: './src/modules/npm/**/*' }, (error, files) => {
  files.map((src) => {
    const dest = src.replace('/src/', '/build/');
    mkdirSyncP(path.dirname(dest));
    fs.createReadStream(src).pipe(fs.createWriteStream(dest));
  });
});

// Copy dependencies.
console.log('Copying node modules ...');
node_modules.map((module) => {
  glob(`./node_modules/${module}/**/*.js`, {}, (error, files) => {
    files.map((src) => {
      const dest = src.replace('/node_modules/', '/build/modules/npm/');
      mkdirSyncP(path.dirname(dest));
      fs.createReadStream(src).pipe(fs.createWriteStream(dest));
    });
  });
});

console.log('Build finished!');

// #######################
// ### Utils
// #######################

/**
 * Make directory (sync) with parent dirs.
 *
 * @param {string} dir
 */
function mkdirSyncP(dir) {
  const sep = path.sep;
  const initDir = path.isAbsolute(dir) ? sep : '';
  dir.split(sep).reduce((parentDir, childDir) => {
    const curDir = path.resolve(parentDir, childDir);
    if (!fs.existsSync(curDir)) {
      fs.mkdirSync(curDir);
    }
    return curDir;
  }, initDir);
}
