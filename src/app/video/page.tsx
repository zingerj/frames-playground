import Image from "next/image";

export default function Video() {
  return (
    <div className="grid place-items-center h-screen">
      <Image
        priority
        src="https://emojicdn.elk.sh/📺"
        alt="A frame"
        width={100}
        height={100}
      />
    </div>
  );
}
