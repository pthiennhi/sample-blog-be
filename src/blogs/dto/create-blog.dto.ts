import {
  IsArray,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateBlogDto {
  @IsString()
  @MinLength(10)
  @MaxLength(500)
  title: string;

  @IsString()
  @MinLength(10)
  content: string;

  @IsString()
  @MinLength(2)
  @MaxLength(100)
  authorName: string;

  @IsString()
  @MinLength(2)
  @MaxLength(50)
  category: string;

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsInt()
  @IsOptional()
  views: number;

  @IsInt()
  @IsOptional()
  commentsCount: number;

  @IsEnum(['draft', 'published', 'archived'])
  @IsOptional()
  status: string;

  @IsOptional()
  publishDate: Date;

  @IsOptional()
  lastUpdated: Date;
}
