import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
    constructor(private userService: UserService) { }

    @Query('login')
    async handleLogin(
        @Args('userId') userId: string,
        @Args('userPw') userPw: string
    ) {
        return this.userService.loginVertify(userId, userPw)
    }
    @Mutation('register')
    async handleRegister(
        @Args('userId') userId: string,
        @Args('userPw') userPw: string
    ) {
        return this.userService.createUser(userId, userPw)
    }
}