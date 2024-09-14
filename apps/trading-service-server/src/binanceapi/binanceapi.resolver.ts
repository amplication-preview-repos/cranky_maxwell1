import * as graphql from "@nestjs/graphql";
import { BinanceApiService } from "./binanceapi.service";

export class BinanceApiResolver {
  constructor(protected readonly service: BinanceApiService) {}
}
