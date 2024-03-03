import Link from "next/link";
import { IconType } from "react-icons";

interface ICardIcon {
  icon1: IconType;
  icon2: IconType;
  text: string;
  url: string;
}
function CardIcon({ icon1: Icon1, icon2: Icon2, text, url }: ICardIcon) {
  return (
    <Link
      href={url}
      className="flex flex-col justify-center items-center gap-5"
    >
      <Icon1 size={50} />
      <p className="flex justify-center items-center gap-3 text-2xl font-medium">
        {text}
        <span>
          <Icon2 />
        </span>
      </p>
    </Link>
  );
}

export default CardIcon;
