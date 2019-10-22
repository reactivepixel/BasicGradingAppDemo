const fs = require('fs');

const files = [];
fs.readdirSync(__dirname).forEach((dirItem) => {
  // skip index file
  if (dirItem === 'index.js') return;

  // skip directories
  if (!dirItem.indexOf('.')) return;

  // trim extension
  const name = dirItem.substr(0, dirItem.indexOf('.'));

  files.push({
    path: `${__dirname}/${name}.js`,
    name,
  });
});

module.exports = files;
