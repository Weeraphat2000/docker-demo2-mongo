import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { log } from 'console';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Docker demo2')
    .setDescription('The Docker demo2 API description')
    .setVersion('1.0')
    .addBearerAuth() // Add Bearer Auth
    .build();
  config.servers = [
    { url: 'http://localhost:8009' },
    { url: 'http://localhost:8010' },
  ];
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT || 8009;
  log(`Server running on http://localhost:${port}`);

  await app.listen(port);
}
bootstrap();
