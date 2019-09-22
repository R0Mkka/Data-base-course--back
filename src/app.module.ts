import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MorganModule, MorganInterceptor  } from 'nest-morgan';
import { UsersModule } from './lab3/users.module';

import { AppService } from './app.service';

import { AppController } from './app.controller';

@Module({
  imports: [
    UsersModule,
    MorganModule.forRoot(),
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor('combined'),
    },
  ],
})
export class AppModule {}
