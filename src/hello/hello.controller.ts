import { Controller, Get } from '@nestjs/common';
import {HelloService} from './hello.service'

@Controller('hello')
export class HelloController {
    constructor(private readonly hello_service: HelloService) {};

    @Get('comments:comment')
    async getHello(comment: number = 0) {
        return this.hello_service.hello(comment);
    }
}
