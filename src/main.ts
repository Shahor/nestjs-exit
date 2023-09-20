import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  /**
   * We could attach a handler to `unhandledRejection` to handle this.
   * But it seems NestJS already does that and exits the process as we should.
   */
  throw new Error('foobar');
}
bootstrap();
