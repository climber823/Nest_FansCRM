import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { databaseConfig } from './config/database.config';

@Module({
  imports: [
    SequelizeModule.forRoot(databaseConfig),
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
