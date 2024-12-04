import { Controller, Get, Post, Body } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Cat } from 'src/schemas/cat.schema';
import { Model } from 'mongoose';
import { De } from 'src/schemas/d.schema';

@Controller('cat')
export class CatController {
  constructor(
    // Cat ตรงนี้ต้องตรงกับชื่อที่เราใช้ใน forFeature ใน cat.module.ts ตรง name: 'Cat'
    @InjectModel('Cat') private readonly catModel: Model<Cat>,
    @InjectModel(De.name) private readonly dModel: Model<De>,
  ) {}

  @Post()
  create(@Body() createCatDto: Cat) {
    console.log('create');
    const createCate = new this.catModel(createCatDto);
    return createCate.save();
  }

  @Get()
  findAll() {
    console.log('find all');
    return this.catModel.find();
  }

  @Post('d')
  createD(@Body() d: De) {
    console.log('createD');
    const createCate = new this.dModel(d);
    return createCate.save();
  }

  @Get('d')
  findAllD() {
    console.log(process.env.MONGO_URI);
    console.log('find all d');
    return this.dModel.find();
  }
}
