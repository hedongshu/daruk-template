import { controller, DarukContext, get, inject, injectable, Next } from 'daruk';
import CommentsModel from '../services/CommentsModel';

@controller()
class Index {
    @inject('CommentsModel') private CommentsModel!: CommentsModel;
    @get('/')
    public async index(ctx: DarukContext, next: Next) {
        let { page = 1, limit = 5 } = ctx.query;
        page = page - 1;
        const [comments, counts] = await this.CommentsModel.findAllAndCount(page, limit);
        await ctx.render('index', {
            comments,
            counts,
            page,
            limit
        });
    }
    @get('/test')
    public async test(ctx: DarukContext, next: Next) {
        const a = ctx.query.a;
        let res = await this.CommentsModel.test();
        res = await this.CommentsModel.test();
        res = await this.CommentsModel.test();
        ctx.body = res + ',' + a;
    }
}
