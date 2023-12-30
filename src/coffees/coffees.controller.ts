import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('flavors')
  findAll() {
    return 'This action returns all coffees';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} coffee`;
  }

  @Post()
  //   @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
    // return `This action creates a coffee`;
  }

  // PUT http method update the entire object
  // PATCH http method update the part of the object that we want
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates #${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Body() body) {
    return `This action removes #${id} coffee`;
  }
}
