import { Body, Controller, Post, Res, UseInterceptors } from '@nestjs/common';
import { StableDiffusionService } from './stable-diffusion.service';
import { generateImageDto } from './generate-image-dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { createReadStream } from 'fs';

@Controller('stable-diffusion')
export class StableDiffusionController {
    constructor(private readonly service: StableDiffusionService){}
    
    @Post("img-txt")
    @UseInterceptors(FileInterceptor('file'))
    async generateImage(@Body() data:generateImageDto, @Res() res: any){
        const filePath = await this.service.generateImage(data)
        
        const file = createReadStream(filePath)
        file.pipe(res)
    }
}
