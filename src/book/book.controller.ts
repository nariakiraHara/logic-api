import { Controller, Get } from '@nestjs/common';
import { BooksResponse } from './book';

@Controller('books')
export class BooksController {
  @Get()
  findAll(): BooksResponse {
    return [
      {
        id: '1',
        title: 'マリアビートル',
        author: '伊坂幸太郎',
        publishDate: '2022/07/17',
      },
    ];
  }
}
