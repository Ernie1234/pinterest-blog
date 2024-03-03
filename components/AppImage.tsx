import Image from "next/image";

type TImage = {
  src: string;
  alt: string;
};

export default function AppImage({ src, alt }: TImage) {
  return (
    <Image
      src={src}
      alt={alt}
      width="0"
      height="0"
      sizes="100vw"
      className="w-full h-auto"
    />
  );
}
