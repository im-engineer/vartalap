import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose'
import {InjectModel} from '@nestjs/mongoose'
import { Isuperadmin } from './interfaces/superadmin.interface';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }


}
