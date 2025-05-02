import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        marginTop: "10%",
        gap: 60,
      }}
    >
      <Image src="/giffy2.gif" alt="Next.js logo" width={500} height={500} />
      <div
        style={{
          width: "70%",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: 3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop:-60
          }}
        >
          <text style={{ fontStyle: "oblique" }}>
            {`Trust your instincts, and make judgements on what your heart tells you. The heart will not betray you.
            `}
          </text>
          <text style={{ fontSize: 40 }}>🫀</text>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop:-70
          }}
        >
          <text
            style={{
              fontWeight: 1000,
            }}
          >
            {`Another text so I can push it`}
          </text>
          <text style={{ fontSize: 40 }}>😉</text>
          <text style={{ fontSize: 40 }}>😉</text>
        </div>
      </div>
    </div>
  );
}
