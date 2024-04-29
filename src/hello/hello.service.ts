import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';


@Injectable()
export class HelloService {
    async hello(comment: number=0): Promise<string> {
        const url = 'https://jsonplaceholder.typicode.com/comments' + (comment == 0 ? '':`/${comment}`);
        const response: AxiosResponse = await axios.get(url);
        return response.data;
    }
}
