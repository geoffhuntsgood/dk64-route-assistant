import { Collectible } from "../enums";

export const CollectibleLabel = ({
  type,
  value
}: {
  type: Collectible,
  value: number
}) => (
  <>
    <div style={{ float: "right" }}>{value === 0 ? "✔" : value}</div>
    <img style={{ float: "right" }} height={20} width={15} src={type} />
  </>
);
