import { Service } from "typedi";
import User from "./user.entity";

@Service()
class UserService {
  async users(): Promise<User[]> {
    return await User.find({});
  }

  async addUser(username: string): Promise<User> {
    const user = User.create({
      username,
    });

    await user.save();

    return user;
  }
}

export default UserService;
