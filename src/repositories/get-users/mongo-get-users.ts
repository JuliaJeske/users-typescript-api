import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "julia",
        lastName: "jeske",
        email: "julia@gmail.com",
        password: "1234",
      },
    ];
  }
}
