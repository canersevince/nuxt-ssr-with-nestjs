import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import {IsEmail} from "class-validator";

@Entity({
    name: 'jobs',
})
export class Job {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 255})
    company: string;

    @Column({length: 255})
    title: string;

    @Column({length: 5000})
    content: string;

    @Column()
    location: string;

    @Column()
    type: string;

    @Column()
    searchingFor:string;

    @Column()
    @IsEmail()
    companyEmail: string;

    @Column()
    companyWebsite: string;

    @Column({nullable: false})
    created: Date;

    @Column()
    endDate: Date;

    @Column()
    highlight: boolean;

    @Column()
    tags:string

    @Column()
    active: boolean;
}

export class CompanyFillableFields {
    company: string;
    title: string;
    searchingFor:string;
    content: string;
    companyEmail: string;
    companyWebsite: string;
    highlight: string;
}
