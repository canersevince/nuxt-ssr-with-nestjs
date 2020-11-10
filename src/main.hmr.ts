import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './modules/main/app.module';
import { setupSwagger } from './swagger';
import NuxtServer from "./nuxt/index";
import 'dotenv/config'
import {NuxtFilter} from "./nuxt/nuxt.filter";
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const nuxt = await NuxtServer.getInstance().run(
      true,
  );
  setupSwagger(app);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new NuxtFilter(nuxt));

  await app.listen(process.env.APP_URL, process.env.APP_PORT, () => {
    console.log('Server listening.')
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
