import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type CateDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  @Prop()
  @ApiProperty({
    title: 'name',
    description: 'The name of a cat',
    example: 'Kitty',
    type: String,
  })
  @IsString()
  name: string;

  @Prop()
  @ApiProperty({
    title: 'age',
    description: 'The age of a cat',
    example: 2,
    type: Number,
  })
  @IsNumber()
  age: number;

  @Prop()
  @ApiProperty({
    title: 'breed',
    description: 'The breed of a cat',
    example: 'Persian',
    type: String,
  })
  @IsString()
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
