import { ObjectType, Directive, Field, ID } from "type-graphql";

@Directive("@extends")
@Directive(`@key(fields: "id")`)
@ObjectType()
export default class Product {
  @Directive("@external")
  @Field(() => ID)
  id: string;
}
