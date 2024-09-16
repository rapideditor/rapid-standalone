import chalk from 'chalk';
import StaticServer from 'static-server/server.js';

const server = new StaticServer({ rootPath: process.cwd() + '/dist', port: 8080 });
server.start(() => {
  console.log(chalk.yellow(`Listening on ${server.port}`));
});
