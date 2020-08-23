import * as Express from 'express';
import * as Path from 'path';

require('dotenv').config();

const app: Express.Application = Express();

const port: number = (process.env.PRODUCTION === 'false') ? 5000 : 3000;

if (process.env.PRODUCTION === 'true') {
    app.use(Express.static(Path.join(__dirname, '../build')));
}

app.listen(port);
console.log(`Server is listening on port ${port}`);