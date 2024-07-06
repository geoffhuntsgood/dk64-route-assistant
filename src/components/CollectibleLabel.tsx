import { Collectible } from "../enums";

export const CollectibleLabel = ({
  type,
  value
}: {
  type: Collectible,
  value: number
}) => {
  return (
    <>
      <div style={{
        float: "right",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        height: "18px",
        padding: "2px",
        borderRadius: "0 3px 3px 0"
      }}>
        {value === 0 ? "✔" : value}
      </div>
      <img style={{
        float: "right",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        padding: "2px",
        borderRadius: "3px 0 0 3px"
      }} height={18} src={type} />
    </>
  );
};
