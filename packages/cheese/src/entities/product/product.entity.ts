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
export default class Product extends BaseEntity {
  @ObjectIdColumn()
  @Field(() => ID)
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  price: number;

  @Field()
  @CreateDateColumn()
  dateAdded: Date;
}
