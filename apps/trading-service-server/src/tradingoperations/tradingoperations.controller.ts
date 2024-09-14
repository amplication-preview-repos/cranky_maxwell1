import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TradingOperationsService } from "./tradingoperations.service";

@swagger.ApiTags("tradingOperations")
@common.Controller("tradingOperations")
export class TradingOperationsController {
  constructor(protected readonly service: TradingOperationsService) {}
}
