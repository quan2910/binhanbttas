import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { blockInvalidChar } from "../../utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { handleSendContact } from "../../services/users/user.service";
import { useTranslation } from "react-i18next";

const formSchema = z.object({
  username: z.string().min(1, { message: "Vui lòng nhập tên" }),
  email: z.string().email({ message: "Email không chính xác!" }),
  phone: z.string().min(1, { message: "Vui lòng nhập số điện thoại liên hệ" }),
  question: z.string().min(1, { message: "Vui lòng thông tin muốn phản hồi" }),
});

const FormContact = () => {
  const { t } = useTranslation();
  const [isSent, setIsSent] = useState(false);
  const [content, setContent] = useState();

  useEffect(() => {
    const handleCloseNoti = setTimeout(() => {
      setIsSent(false);
    }, 2000);

    return () => clearTimeout(handleCloseNoti);
  }, [isSent]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      question: "",
    },
  });
  const onSubmit = async (values) => {
    const res = await handleSendContact(values);
    setIsSent(true);
    if (res) {
      setContent(<p className="text-green big">{t("contactForm.success")}</p>);
    } else {
      setContent(<p className="text-red big">{t("contactForm.fail")}</p>);
    }
  };

  return (
    <Form {...form}>
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex justify-between w-full"
      >
        <div className="w-full rounded-[20px] bg-bg p-8 flex flex-col gap-3">
          <h4 className="heading-4 font-bold text-secondary mb-5">
            {t("contactForm.info")}
          </h4>
          <FormField
            name="username"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={t("contactForm.name")}
                    onChange={(value) => field.onChange(value)}
                    className="w-full bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={t("contactForm.email")}
                    onChange={(value) => field.onChange(value)}
                    className="w-full bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="phone"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={t("contactForm.phone")}
                    onChange={(value) => field.onChange(value)}
                    className="w-full bg-white"
                    onKeyDown={blockInvalidChar}
                    type="number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="question"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <textarea
                    placeholder={t("contactForm.ques")}
                    onChange={(value) => field.onChange(value)}
                    className="w-full border border-line bg-white h-[150px] lg:h-[300px] px-3 py-2 text-sm placeholder:text-sm text-text focus-visible:outline-primary/50 rounded-xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex w-full gap-5 items-center justify-end">
            {isSent && content}
            <Button type="submit" className="rounded-full px-20">
              {t("contactForm.send")}
            </Button>
          </div>
        </div>
      </motion.form>
    </Form>
  );
};

export default FormContact;
