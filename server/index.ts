import * as Express from 'express';
import * as Path from 'path';
import * as fetch from 'node-fetch';

require('dotenv').config();

const app: Express.Application = Express();

const port: number = (process.env.PRODUCTION === 'false') ? 5000 : 3000;

if (process.env.PRODUCTION === 'true') {
    app.use(Express.static(Path.join(__dirname, '../build')));
} else {
    app.use((req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
        res.header("Access-Control-Allow-Origin", process.env.REACT_SERVER);
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
}

app.get('/search/:query', async (req: Express.Request, res: Express.Response) => {
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(req.params.query)}&format=json`;

    let response;
    try {
        response = await fetch(url);
    } catch (err) {
        console.error(err);
        return;
    }
    
    const result = await response.json();

    res.json(result);
});

app.listen(port);
console.log(`Server is listening on port ${port}`);