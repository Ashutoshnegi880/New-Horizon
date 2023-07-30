import { Injectable } from '@nestjs/common';
import { generateImageDto } from './generate-image-dto';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { getDataFolderPath, persistData } from './utils/file.utils';
@Injectable()
export class StableDiffusionService {
    constructor(private readonly httpService: HttpService) {}

    async generateImage(generateImage: generateImageDto) {
        const engine_id = "stable-diffusion-512-v2-0"
        const result = await this.httpService.post(
            `https://api.stability.ai/v1/generation/${engine_id}/text-to-image`,
            {
                cfg_scale: 7,
                clip_guidance_preset: "FAST_BLUE",
                height: 512,
                width: 512,
                // sampler: "K_DPM_2_ANCESTRAL",
                samples: 1,
                steps: 75,
                text_prompts: [
                    {
                        text: generateImage.prompt,
                        weight: 1
                    }
                ],
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'image/png',
                    Authorization: process.env.API_KEY,
                },
                responseType: 'arraybuffer'
            },
        );

        const data = await lastValueFrom(result);
        const filePath = `${getDataFolderPath()}/${Date.now()}.png`
        persistData(Buffer.from(data.data), filePath)
        
        return filePath
    }
}
