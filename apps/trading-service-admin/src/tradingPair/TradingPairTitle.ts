import { TradingPair as TTradingPair } from "../api/tradingPair/TradingPair";

export const TRADINGPAIR_TITLE_FIELD = "baseCurrency";

export const TradingPairTitle = (record: TTradingPair): string => {
  return record.baseCurrency?.toString() || String(record.id);
};
