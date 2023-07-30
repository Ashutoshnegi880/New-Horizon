import { Test, TestingModule } from '@nestjs/testing';
import { StableDiffusionController } from './stable-diffusion.controller';

describe('StableDiffusionController', () => {
  let controller: StableDiffusionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StableDiffusionController],
    }).compile();

    controller = module.get<StableDiffusionController>(StableDiffusionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
