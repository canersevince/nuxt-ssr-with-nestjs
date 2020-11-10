import {Module} from '@nestjs/common';
import {TypeOrmModule, TypeOrmModuleAsyncOptions} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule, ConfigService} from './../config';
import {AuthModule} from './../auth';
import {ScheduleModule} from '@nestjs/schedule';
import {TaskModule} from "../task/task.module";
import {JobModule} from "../job/job.module";
@Module({
    imports: [
            TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
                return {
                    type: configService.get('DB_TYPE'),
                    url: configService.get('MONGOURI'),
                    useNewUrlParser: true,
                    entities: [__dirname + './../**/**.entity{.ts,.js}'],
                    synchronize: true,
                } as TypeOrmModuleAsyncOptions;
            },
        }),
        ScheduleModule.forRoot(),
        ConfigModule,
        AuthModule,
        TaskModule,
        JobModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
