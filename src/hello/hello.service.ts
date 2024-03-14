import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
    async hello() {
        return 'Hello World!';
    }
}
