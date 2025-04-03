import { User } from "../entities/User";
import IUser from "./Interfaces/IUserRepository";
import { AppDataSource } from "../data-source";
const userRepository = AppDataSource.getRepository(User)
class UserRepository implements IUser {

    public async createUser(user_name: string, user_email: string, user_password: string): Promise<boolean> {
        await userRepository.create()
    }

    public async findUser(user_email: string): Promise<object | null> {
        await userRepository.find({

        })
    }








}