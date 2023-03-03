import {Module} from '@nestjs/common'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose' 

@Module({
  imports: [],
  controllers: [AppController,MongooseModule.forRoot('mongodb://localhost:27017/superadmin')],
  providers: [AppService],
})
export class AppModule {}
