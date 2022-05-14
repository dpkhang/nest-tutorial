import { ApiProperty } from '@nestjs/swagger';

export class RequestDTO {
  @ApiProperty()
  email: string;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;
}
