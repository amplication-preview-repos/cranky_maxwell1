import { Module } from "@nestjs/common";
import { TradingOperationsService } from "./tradingoperations.service";
import { TradingOperationsController } from "./tradingoperations.controller";
import { TradingOperationsResolver } from "./tradingoperations.resolver";

@Module({
  controllers: [TradingOperationsController],
  providers: [TradingOperationsService, TradingOperationsResolver],
  exports: [TradingOperationsService],
})
export class TradingOperationsModule {}
