export default interface IUser {
    createUser(user_name: string, user_email: string, user_password: string,
    ): Promise<boolean>
    findUser(user_email: string): Promise<object | null>
}