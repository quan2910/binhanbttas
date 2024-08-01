import fb from "../../images/footer-img/fb.png";
import tt from "../../images/footer-img/tt.png";
import { v4 as uuidv4 } from "uuid";

export const SOCIAL_MEDIA = [
  {
    id: uuidv4(),
    href: "https://www.facebook.com/tmdvbinhanbt?mibextid=LQQJ4d",
    title: "Facebook",
    icon: fb,
  },
  {
    id: uuidv4(),
    href: "https://www.tiktok.com/@culaocautour",
    title: "Tiktok",
    icon: tt,
  },
];
