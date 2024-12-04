import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type D = HydratedDocument<De>;

@Schema()
export class De {
  @Prop()
  name: string;
}

export const DSchema = SchemaFactory.createForClass(De);
