import { controller, inject, get, DarukContext } from 'daruk';
import { UserService } from '@/service/UserService';

@controller()
export class TestController {

  @inject('UserService')
  public userService: UserService;

  @get('/test')
  public async index(ctx: DarukContext) {
    const user = await this.userService.getOneUser();
    ctx.body = `hello ${user.user_name}`;
  }
}
