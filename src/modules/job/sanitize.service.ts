import {Injectable} from "@nestjs/common";
import {Escape} from "class-sanitizer";

@Injectable()
class HTMLSanitizer {
    @Escape()
    ctx: string;

    constructor(ctx: string) {
        this.ctx = ctx;
    }
    getSanitized(){
        return this.ctx
    }
}

@Injectable()
export class SanitizeService {
    constructor() {
    }
    sanitizeHTML(ctx){
        const sanitizedHTML = new HTMLSanitizer(ctx)
        return sanitizedHTML.getSanitized()
    }
}
