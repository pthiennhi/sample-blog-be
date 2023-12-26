import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from './entities/blog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogsService {

  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>,
  ) { }


  create(createBlogDto: CreateBlogDto) {
    const blog:Blog = new Blog();

    blog.title = createBlogDto.title;
    blog.content = createBlogDto.content;
    blog.authorName = createBlogDto.authorName;
    blog.category = createBlogDto.category;
    blog.tags = createBlogDto.tags;
    blog.views = createBlogDto.views;
    blog.commentsCount = createBlogDto.commentsCount;
    blog.status = createBlogDto.status;
    blog.publishDate = createBlogDto.publishDate;
    blog.lastUpdated = createBlogDto.lastUpdated;

    return this.blogRepository.save(blog);

  }

  findAll(): Promise<Blog[]> {
    return this.blogRepository.find();
    
  }

  findOne(id: number) : Promise<Blog> {
    return this.blogRepository.findOneBy({id});
  }

  update(id: number, updateBlogDto: UpdateBlogDto): Promise<Blog> {
    const blog:Blog = new Blog();
    blog.title = updateBlogDto.title;
    blog.content = updateBlogDto.content;
    blog.authorName = updateBlogDto.authorName;
    blog.category = updateBlogDto.category;
    blog.tags = updateBlogDto.tags;
    blog.views = updateBlogDto.views;
    blog.commentsCount = updateBlogDto.commentsCount;
    blog.status = updateBlogDto.status;
    blog.publishDate = updateBlogDto.publishDate;
    blog.lastUpdated = updateBlogDto.lastUpdated;

    return this.blogRepository.save(blog);

  }

  remove(id: number): Promise<{affected?: number}> {
    return this.blogRepository.delete(id);
  }
}
