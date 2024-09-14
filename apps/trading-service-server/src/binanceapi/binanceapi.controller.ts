import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { BinanceApiService } from "./binanceapi.service";

@swagger.ApiTags("binanceApis")
@common.Controller("binanceApis")
export class BinanceApiController {
  constructor(protected readonly service: BinanceApiService) {}
}
