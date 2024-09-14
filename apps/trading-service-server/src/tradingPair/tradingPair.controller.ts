import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TradingPairService } from "./tradingPair.service";
import { TradingPairControllerBase } from "./base/tradingPair.controller.base";

@swagger.ApiTags("tradingPairs")
@common.Controller("tradingPairs")
export class TradingPairController extends TradingPairControllerBase {
  constructor(protected readonly service: TradingPairService) {
    super(service);
  }
}
