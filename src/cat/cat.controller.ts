import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Cat } from 'src/schemas/cat.schema';
import { Model } from 'mongoose';
import { De } from 'src/schemas/d.schema';
import { ApiOperation } from '@nestjs/swagger';

@Controller('cat')
export class CatController {
  constructor(
    // Cat ตรงนี้ต้องตรงกับชื่อที่เราใช้ใน forFeature ใน cat.module.ts ตรง name: 'Cat'
    @InjectModel('Cat') private readonly catModel: Model<Cat>,
    @InjectModel(De.name) private readonly dModel: Model<De>,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Create cat',
    description: 'Create cat',
  })
  create(@Body() createCatDto: Cat) {
    console.log('create');
    const createCate = new this.catModel(createCatDto);
    return createCate.save();
  }

  @Get()
  @ApiOperation({
    summary: 'Find all cat',
    description: 'Find all cat',
  })
  findAll() {
    console.log('find all');
    return this.catModel.find();
  }

  @Post('d')
  @ApiOperation({
    summary: 'Create d',
    description: 'Create d',
  })
  createD(@Body() d: De) {
    console.log('createD');
    const createCate = new this.dModel(d);
    return createCate.save();
  }

  @Get('d/:id')
  @ApiOperation({
    summary: 'Find d',
    description: 'Find d',
  })
  findD(@Param('id') id: string) {
    console.log(id, 'name');
    console.log(process.env.MONGO_URI);
    console.log('find all d');
    return this.dModel.findById(id);
  }

  @Get('d')
  @ApiOperation({
    summary: 'Find all d',
    description: 'Find all d',
  })
  findAllD() {
    console.log(process.env.MONGO_URI);
    console.log('find all d');
    return this.dModel.find({
      name: { $regex: '5', $options: 'i' }, // "i" หมายถึง case-insensitive
    });
  }
}
