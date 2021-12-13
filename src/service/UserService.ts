import { service } from 'daruk';
import {getManager} from 'typeorm';
import {User} from '@/entities/User';

@service()
export class UserService {

  public async getOneUser() {
    const user = await getManager().findOne(User, 1);
    return user;
  }
}
