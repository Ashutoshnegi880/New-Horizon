import { Module } from '@nestjs/common';
import { StableDiffusionService } from './stable-diffusion.service';
import { StableDiffusionController } from './stable-diffusion.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [StableDiffusionService],
  controllers: [StableDiffusionController]
})
export class StableDiffusionModule {}
