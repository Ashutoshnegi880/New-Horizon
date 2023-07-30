import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StableDiffusionModule } from './stable-diffusion/stable-diffusion.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [StableDiffusionModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
