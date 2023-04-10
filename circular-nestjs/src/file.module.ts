import { Module } from '@nestjs/common';
import { AppController as FileController } from './app.controller';
import { AppService } from './app.service';
import { FileService } from './file.service';
import { AppModule } from './app.module';

@Module({
  imports: [AppModule],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {
  constructor(
    private readonly appService: AppService,
  ) {}

  onApplicationBootstrap() {
    console.log(this.appService.getHello());
  }
}
