import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNumber, IsString } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type CateDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  @Prop()
  @IsString()
  name: string;

  @Prop()
  @IsNumber()
  age: number;

  @Prop()
  @IsString()
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
