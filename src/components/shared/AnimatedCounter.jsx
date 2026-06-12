import useAnimatedNumber from "../../hooks/useAnimatedNumber";
import { formatPKR } from "../../utils/formatCurrency";

export default function AnimatedCounter({ value }) {
  const animated = useAnimatedNumber(typeof value === "number" ? value : 0);
  return <>{formatPKR(animated)}</>;
}
