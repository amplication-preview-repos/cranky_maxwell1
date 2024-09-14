import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TradingPairServiceBase } from "./base/tradingPair.service.base";

@Injectable()
export class TradingPairService extends TradingPairServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
