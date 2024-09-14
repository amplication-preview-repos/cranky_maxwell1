/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { TradingPair } from "./TradingPair";
import { TradingPairCountArgs } from "./TradingPairCountArgs";
import { TradingPairFindManyArgs } from "./TradingPairFindManyArgs";
import { TradingPairFindUniqueArgs } from "./TradingPairFindUniqueArgs";
import { CreateTradingPairArgs } from "./CreateTradingPairArgs";
import { UpdateTradingPairArgs } from "./UpdateTradingPairArgs";
import { DeleteTradingPairArgs } from "./DeleteTradingPairArgs";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { TradingPairService } from "../tradingPair.service";
@graphql.Resolver(() => TradingPair)
export class TradingPairResolverBase {
  constructor(protected readonly service: TradingPairService) {}

  async _tradingPairsMeta(
    @graphql.Args() args: TradingPairCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [TradingPair])
  async tradingPairs(
    @graphql.Args() args: TradingPairFindManyArgs
  ): Promise<TradingPair[]> {
    return this.service.tradingPairs(args);
  }

  @graphql.Query(() => TradingPair, { nullable: true })
  async tradingPair(
    @graphql.Args() args: TradingPairFindUniqueArgs
  ): Promise<TradingPair | null> {
    const result = await this.service.tradingPair(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => TradingPair)
  async createTradingPair(
    @graphql.Args() args: CreateTradingPairArgs
  ): Promise<TradingPair> {
    return await this.service.createTradingPair({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => TradingPair)
  async updateTradingPair(
    @graphql.Args() args: UpdateTradingPairArgs
  ): Promise<TradingPair | null> {
    try {
      return await this.service.updateTradingPair({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TradingPair)
  async deleteTradingPair(
    @graphql.Args() args: DeleteTradingPairArgs
  ): Promise<TradingPair | null> {
    try {
      return await this.service.deleteTradingPair(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Order], { name: "orders" })
  async findOrders(
    @graphql.Parent() parent: TradingPair,
    @graphql.Args() args: OrderFindManyArgs
  ): Promise<Order[]> {
    const results = await this.service.findOrders(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
