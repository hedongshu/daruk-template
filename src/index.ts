import { DarukServer } from 'daruk';
import './config/connection';

const port = process.env.NODE_ENV !== 'production' ? 3000 : 3001;

(async () => {
    const app = DarukServer({
        rootPath: __dirname,
        middlewareOrder: ['koa-ejs', 'koa-favicon']
    });

    await app.loadFile('./middlewares');
    await app.loadFile('./glues');
    await app.loadFile('./controllers');
    await app.loadFile('./services');
    await app.binding();

    app.listen(port);
    app.logger.info(`app listen port ${port}`);
})();
