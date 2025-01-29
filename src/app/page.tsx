import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        alignItems:'center',
        justifyContent: "center",
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection:'column',
        marginTop: '10%',
        gap: 60
      }}
    >
        <Image src="/giffy.gif" alt="Next.js logo" width={800} height={500} />
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
          <text style={{ fontStyle: "oblique" }}>
            {`Success is going from failure to failure without losing your
            enthusiasm.
            `}
          </text>
          <text
            style={{
              fontWeight: 1000,
            }}
          >
            {` Winston Churchill nailed it—attitude is everything😉`}
          </text>
        </div>
      {/* </main> */}
    </div>
  );
}
