import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import vn from "../../images/flag/vn.png";
import uk from "../../images/flag/uk.png";
import ko from "../../images/flag/ko.jpg";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
const TransLanguage = () => {
  const locales = {
    vi: { title: "VI", flag: vn },
    en: { title: "EN", flag: uk },
    kr: { title: "KR", flag: ko },
  };
  const { i18n } = useTranslation();

  return (
    <Select onValueChange={(e) => i18n.changeLanguage(e)} defaultValue="vi">
      <SelectTrigger className="w-[80px] px-1 gap-1 rounded-full bg-transparent">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Object.keys(locales).map((locale) => (
            <SelectItem key={locale} value={locale.toString()}>
              <div className="text-[12px] flex gap-1 h-6 py-0 px-2 big text-secondary bg-transparent items-center">
                <img
                  src={locales[locale].flag}
                  alt=""
                  width={30}
                  height={30}
                  className="rounded-full h-4 w-4"
                />
                {locales[locale].title}
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default TransLanguage;
