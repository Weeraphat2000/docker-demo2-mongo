import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Docker, NestJS, MongoDB, Docker Compose and Mongoose!';
  }
}
