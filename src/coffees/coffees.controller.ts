import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  //@Get('flavors')
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `This action returns all coffees. Limit: ${limit}, offset: ${offset}`;
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
