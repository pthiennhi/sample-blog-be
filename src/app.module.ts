import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsModule } from './blogs/blogs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './blogs/entities/blog.entity';

@Module({
  imports: [
    BlogsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 6543,
      password: 'Nhi0903@',
      username: 'thiennhi',
      entities: [Blog],
      database: 'sample-blog',
      synchronize: true,
      logging: true,
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
