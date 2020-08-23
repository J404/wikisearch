import * as Express from 'express';

const app: Express.Application = Express();

const port: number = (process.env.PRODUCTION === 'false') ? 5000 : 3000;

app.get('/', (req: Express.Request, res: Express.Response): void => {
    res.send('yay server');
});

app.listen(port);
console.log(`Server is listening on port ${port}`);