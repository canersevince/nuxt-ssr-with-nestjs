import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './modules/main/app.module';
import { setupSwagger } from './swagger';
import { NuxtFilter } from './nuxt/nuxt.filter';
import NuxtServer from './nuxt/';
import config from '../nuxt.config';
import 'dotenv/config'
declare const module: any;
import {ServeStaticModule} from '@nestjs/serve-static';
import {NestExpressApplication} from '@nestjs/platform-express';
import {join} from 'path'
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const nuxt = await NuxtServer.getInstance().run(
      true,
  );
  setupSwagger(app);
  app.enableCors();
  app.useStaticAssets(join(__dirname, '../', 'static'),{prefix: '/public/'})
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new NuxtFilter(nuxt));

  await app.listen(process.env.APP_PORT, process.env.APP_URL, () => {
    console.log('Server listening.')
  });

  if (config.dev && module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
