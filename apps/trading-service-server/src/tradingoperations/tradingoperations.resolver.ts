import * as graphql from "@nestjs/graphql";
import { TradingOperationsService } from "./tradingoperations.service";

export class TradingOperationsResolver {
  constructor(protected readonly service: TradingOperationsService) {}
}
