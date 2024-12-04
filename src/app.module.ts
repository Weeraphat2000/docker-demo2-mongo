import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatModule } from './cat/cat.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // ทำให้ ConfigModule ใช้ได้ทั่วทั้งแอป
      envFilePath: '.env', // ระบุไฟล์ .env (ค่าเริ่มต้นคือ .env)
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    CatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
