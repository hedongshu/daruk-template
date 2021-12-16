import { DarukContext, inject, injectable, service } from 'daruk';
import Comments from '../../entity/comments';
import { getConnection } from 'typeorm';
function sleep(n: number) {
    return new Promise<void>((r) => {
        setTimeout(() => {
            r();
        }, n);
    });
}

@service()
export default class CommentsModel {
    public ctx!: DarukContext;
    public async findAllAndCount(page = 0, limit = 10) {
        const connection = await getConnection();
        const comments = connection.getRepository(Comments).findAndCount({
            skip: limit * page,
            take: limit,
            order: {
                comments_id: 'DESC'
            }
        });
        return comments;
    }
    public async test() {
        const a = this.ctx.query.a;
        // tslint:disable-next-line:no-magic-numbers
        await sleep(2000);
        return a;
    }
    public async insert(name: string, content: string) {
        const connection = await getConnection();
        const EntityManager = connection.manager;
        const comments = await EntityManager.create(Comments, {
            name,
            content
        });
        return EntityManager.save(comments);
    }
}
