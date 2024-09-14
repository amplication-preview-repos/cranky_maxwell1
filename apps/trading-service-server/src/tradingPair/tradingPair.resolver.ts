import * as graphql from "@nestjs/graphql";
import { TradingPairResolverBase } from "./base/tradingPair.resolver.base";
import { TradingPair } from "./base/TradingPair";
import { TradingPairService } from "./tradingPair.service";

@graphql.Resolver(() => TradingPair)
export class TradingPairResolver extends TradingPairResolverBase {
  constructor(protected readonly service: TradingPairService) {
    super(service);
  }
}
