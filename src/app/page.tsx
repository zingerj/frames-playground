import { Metadata } from "next";
import Image from "next/image";

{
  /* <meta property="fc:frame" content="vNext" />
<meta property="fc:frame:image" content="http://...image-question.png" />
<meta property="fc:frame:button:1" content="Green" />
<meta property="fc:frame:button:2" content="Purple" />
<meta property="fc:frame:button:3" content="Red" />
<meta property="fc:frame:button:4" content="Blue" /> */
}

export const metadata: Metadata = {
  metadataBase: new URL("https://frames-playground.vercel.app"),
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "/public/ff.png",
    "fc:frame:button:1": "This",
    "fc:frame:button:2": "is",
    "fc:frame:button:3": "so",
    "fc:frame:button:4": "cool",
  },
};

export default function Home() {
  return (
    <div className="grid place-items-center h-screen">
      <Image
        src="https://emojicdn.elk.sh/🖼️"
        alt="A frame"
        width={100}
        height={100}
      />
    </div>
  );
}
