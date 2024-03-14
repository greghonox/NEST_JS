import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';


@Injectable()
export class HelloService {
    async hello() {
        const url = 'https://jsonplaceholder.typicode.com/comments'
        const response: AxiosResponse = await axios.get(url);
        return response.data;
    }
}
