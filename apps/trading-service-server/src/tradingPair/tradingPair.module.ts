import { Module } from "@nestjs/common";
import { TradingPairModuleBase } from "./base/tradingPair.module.base";
import { TradingPairService } from "./tradingPair.service";
import { TradingPairController } from "./tradingPair.controller";
import { TradingPairResolver } from "./tradingPair.resolver";

@Module({
  imports: [TradingPairModuleBase],
  controllers: [TradingPairController],
  providers: [TradingPairService, TradingPairResolver],
  exports: [TradingPairService],
})
export class TradingPairModule {}
