import { Directive, Field, ObjectType, ID } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
} from "typeorm";

@Entity()
@Directive(`@key(fields: "id")`)
@ObjectType()
export default class Review extends BaseEntity {
  @ObjectIdColumn()
  @Field(() => ID)
  id: string;

  @Field()
  @Column()
  reviewContent: string;

  @Column()
  userId: string;

  @Column()
  productId: string;

  @Field()
  @CreateDateColumn()
  dateAdded: Date;
}
