import { Loader } from "@mantine/core";

export default function Loading() {
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000, backdropFilter: "blur(8px)", backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
      <Loader color="blue" size="xl" />
    </div>
  );
}
