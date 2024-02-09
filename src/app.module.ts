import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './Modules/Products.Module';

@Module({
  imports: [ProductsModule],
})
export class AppModule {}
