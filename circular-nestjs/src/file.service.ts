import { Injectable } from '@nestjs/common';

@Injectable()
export class FileService {
  doSomething(): string {
    return 'Something is has been done 😉';
  }
}
