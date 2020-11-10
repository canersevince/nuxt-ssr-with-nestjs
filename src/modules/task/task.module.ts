import {Module} from '@nestjs/common';
import {TaskController} from './task.controller';
import {UserModule} from "../user";

@Module({
    controllers: [TaskController],
    imports: [
        UserModule
    ],
    providers: []
})
export class TaskModule {
}
