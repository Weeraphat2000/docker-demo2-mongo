import { Module } from '@nestjs/common';

import { CatController } from './cat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from 'src/schemas/cat.schema';
import { De, DSchema } from 'src/schemas/d.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }]),
    MongooseModule.forFeature([{ name: De.name, schema: DSchema }]),
  ],
  controllers: [CatController],
  providers: [],
})
export class CatModule {}
