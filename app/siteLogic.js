const fs = require('fs');


const getSiteInfo = (firstname, lastName) => {
  const path = process.env.pathToSitesAvailable;
  const allSites = []
  fs.readdir(path, function (err, items) {
    for (let i = 0; i < items.length; i++) {
      siteInfo = {};
      const file = path + '/' + items[i];

      fs.stat(file, function (err, stats) {
        const name = items[i].replace(/\b.conf\b/g, '')
        const pathTo = path + '/' + items[i];
        const siteInfo = {
          id: i,
          name: name,
          title: items[i],
          size: stats["size"],
          birthtime: stats["birthtime"],
          pathTo: pathTo
        };
        allSites.push(siteInfo);
      });
    }
  });
  return allSites;
};



module.exports = getSiteInfo;