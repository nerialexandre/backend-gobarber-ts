// import { Express, Router } from "express";
// import { readdirSync } from "fs";

// export default (app: Express): void => {
//   const router = Router();

//   app.use("/", router);

//   readdirSync(`${__dirname}/routes`).map(async (dir) => {
//     readdirSync(`${__dirname}/routes/${dir}`).map(async (file) => {
//       if (!file.endsWith(".map")) {
//         (await import(`./routes/${dir}/${file}`)).default(router);
//       }
//     });
//   });
// };

import { Express, Router } from 'express';
import { readdirSync, statSync } from 'fs';
import path from 'path';

export default (app: Express): void => {
  const router = Router();

  app.use('/', router);

  function getFiles(dir: string, files_?: string[], fileType?: string) {
    const regex = fileType ? new RegExp(`\\${fileType}$`) : '';

    return readdirSync(dir).reduce((allFiles, file) => {
      const name = path.join(dir, file);

      if (statSync(name).isDirectory()) {
        getFiles(name, allFiles, fileType);
      } else if (file.match(regex)) {
        allFiles.push(name);
      }

      return allFiles;
    }, files_ || []);
  }

  const allFiles = getFiles(`${__dirname}/../routes`, [], '.ts|.js');
  allFiles.map(async (file: string) => {
    (await import(file)).default(router);
  });
};
