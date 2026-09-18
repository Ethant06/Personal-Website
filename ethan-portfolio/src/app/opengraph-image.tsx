import { ImageResponse } from "next/og";

export const alt = "Ethan Tandio — CS @ UW Seattle";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          justifyContent: "flex-end",
          backgroundColor: "#070b12",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            height: 3,
            width: 72,
            backgroundColor: "#7ebfd0",
            marginBottom: 28,
          }}
        />
        <div
          style={{
            color: "#e8eef6",
            fontSize: 72,
            fontWeight: 600,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
          }}
        >
          Ethan Tandio
        </div>
        <div
          style={{
            color: "#8b9cb3",
            fontSize: 28,
            marginTop: 18,
            letterSpacing: "-0.02em",
          }}
        >
          CS + Applied Math @ UW Seattle
        </div>
      </div>
    ),
    size,
  );
}
