import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { user, Prisma } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async loginVertify(Id: string, Pw: string): Promise<boolean> {
        const user = await this.prisma.user.findUnique({ //详细业务逻辑中，进行数据库操作
            where: {
                userId: Id
            }
        });
        if (user) {
            if (user.passWd === Pw) { return true } else { return false }
        } else { return false }
    }
    async createUser(Id: string, Pw: string): Promise<boolean> { //新增用户
        try {
            await this.prisma.user.create({ //对模型操作
                data: {
                    userId: Id,
                    passWd: Pw
                }
            })
            console.log('新增成功')
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
}