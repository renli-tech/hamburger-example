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
export default class User extends BaseEntity {
  @ObjectIdColumn()
  @Field(() => ID)
  id: string;

  @Field()
  @Column()
  username: string;

  @Field()
  @CreateDateColumn()
  dateJoined: Date;
}
