import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

// PartialType extends all atributes of the parameter class and set them as optional
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
