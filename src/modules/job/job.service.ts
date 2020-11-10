import {Injectable, NotAcceptableException} from "@nestjs/common";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {Job} from "./job.entity";

@Injectable()
export class JobService {
    constructor(
        @InjectRepository(Job)
        private readonly userRepository: Repository<Job>,
    ) {}


}
