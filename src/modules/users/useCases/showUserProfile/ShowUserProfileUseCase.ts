import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user_profile = this.usersRepository.findById(user_id);
    if (!user_profile) {
      throw new Error("user does not exist!");
    }
    return user_profile;
  }
}

export { ShowUserProfileUseCase };
