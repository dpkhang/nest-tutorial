import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';
import { RequestDTO } from '../dtos/request.dto';

@ApiTags('User')
@Controller('api/v1/user/')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  @ApiResponse({
    status: 200,
    description: 'get all',
    type: User,
  })
  async login(): Promise<any> {
    return await this.userService.findAll();
  }

  @Post()
  async create(@Body() user: User): Promise<any> {
    return await this.userService.create(user);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() user: User,
    @Res() res: Response,
  ): Promise<any> {
    const data = await this.userService.update(id, user);
    res.json({
      message: 'ok',
      data,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: number, res: Response): Promise<any> {
    const data = await this.userService.remove(id);
    res.json({
      message: 'ok',
      data,
    });
  }
}
