import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  title: string;

  @Column('text')
  content: string;

  @Column()
  authorName: string;

  @Column()
  category: string;

  @Column('simple-array')
  tags: string[];

  @Column()
  views: number;

  @Column()
  commentsCount: number;

  @Column({ default: 'draft' })
  status: string;

  @CreateDateColumn()
  publishDate: Date;

  @UpdateDateColumn()
  lastUpdated: Date;
}
