import {Controller} from '@nestjs/common';
import {UsersService} from "../user";
import {Cron, CronExpression} from "@nestjs/schedule";

@Controller('task')
export class TaskController {
    constructor(private readonly userService: UsersService) {
    }

    /* normal log task */
    @Cron(CronExpression.EVERY_10_SECONDS)
    loggerNormal() {
        console.log('App online.')
    }
}
