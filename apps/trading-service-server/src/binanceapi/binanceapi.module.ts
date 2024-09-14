import { Module } from "@nestjs/common";
import { BinanceApiService } from "./binanceapi.service";
import { BinanceApiController } from "./binanceapi.controller";
import { BinanceApiResolver } from "./binanceapi.resolver";

@Module({
  controllers: [BinanceApiController],
  providers: [BinanceApiService, BinanceApiResolver],
  exports: [BinanceApiService],
})
export class BinanceApiModule {}
