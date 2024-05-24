import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../components/ui/form";
import { handleCreateBlogs } from "../../services/blogs/blogs.service";
import { Input } from "../../components/ui/input";
import { handleGetTypes } from "../../services/type/type.service";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import Editor from "../../components/Editor";
import InputImg from "../../components/InputImg";

const formSchema = z.object({
  title: z.string().min(1, { message: "Vui lòng nhập Tiêu đề" }),
  description: z.string().min(1, { message: "Vui lòng nhập mô tả" }),
  image: z.string({ required_error: "Vui lòng thêm ảnh" }),
  content: z.any(),
  type: z.string({ required_error: "Vui lòng chọn loại bài viết" }),
  price: z.string().optional(),
  timeAt: z.any(),
});

const AdminHome = () => {
  const [isLoading, setIsLoading] = useState(false);
  const currentDate = new Date();
  const [types, setTypes] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getTypes = async () => {
      const res = await handleGetTypes();
      setTypes(res.data);
    };
    getTypes();
  }, []);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      timeAt: currentDate,
    },
  });

  const onSubmit = async (values) => {
    const convertData = {
      ...values,
      type: { id: values.type },
    };
    setIsLoading(true);

    const res = await handleCreateBlogs(convertData);
    
    if (res) {
      navigate("/admin/list-blog");
      setIsLoading(false);
    }
  };

  const isShowPrice =
    form.watch("type") === "963055416245944321" ||
    form.watch("type") === "963055738547077121" ||
    form.watch("type") === "963059320211996673" ||
    form.watch("type") === "966397183073976321" ||
    form.watch("type") === "966397159192330241" ||
    form.watch("type") === "966397118755930113" ||
    form.watch("type") === "963060231356088321";

  return (
    <div className="pt-[150px] w-full flex items-center justify-center px-4 mx-auto xl:max-w-[1410px]">
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
              Tạo bài viết mới
            </h4>
            <FormField
              name="title"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <>
                      <h2 className="small xl:big">
                        Nhập Tiêu đề bài viết{" "}
                        <span className="text-red">*</span>
                      </h2>
                      <Input
                        placeholder="Nhập Tiêu đề bài viết"
                        onChange={(value) => field.onChange(value)}
                        className="w-full bg-white"
                      />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="description"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <>
                      <h2 className="small xl:big">
                        Nhập mô tả bài viết <span className="text-red">*</span>
                      </h2>
                      <Input
                        placeholder="Nhập mô tả"
                        onChange={(value) => field.onChange(value)}
                        className="w-full bg-white"
                      />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="image"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <>
                      <h2 className="small xl:big">
                        Thêm ảnh bìa <span className="text-red">*</span>
                      </h2>
                      <InputImg onChange={field.onChange} />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="type"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <>
                      <h2 className="small xl:big">
                        Chọn loại bài viết <span className="text-red">*</span>
                      </h2>
                      <Select onValueChange={(value) => field.onChange(value)}>
                        <SelectTrigger className="rounded-full">
                          <SelectValue placeholder="Chọn loại bài viết" />
                        </SelectTrigger>
                        <SelectContent>
                          {types.map((item) => (
                            <SelectItem key={item.id} value={item.id}>
                              {item.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {isShowPrice && (
              <FormField
                name="price"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <>
                        <h2 className="small xl:big">Nhập Giá (VND)</h2>
                        <Input
                          type="number"
                          placeholder="Nhập giá"
                          onChange={(value) => field.onChange(value)}
                          className="w-full bg-white"
                        />
                      </>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              name="content"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <>
                      <h2 className="small xl:big">
                        Nhập nội dung <span className="text-red">*</span>
                      </h2>
                      <Editor onChange={(value) => field.onChange(value)} />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center mt-[70px] justify-end">
              <Button
                type="submit"
                disabled={isLoading}
                className={`rounded-full px-20 ${
                  isLoading && "bg-line hover:bg-line"
                }`}
              >
                {isLoading ? <div className="loading" /> : "Tạo"}
              </Button>
            </div>
          </div>
        </motion.form>
      </Form>
    </div>
  );
};

export default AdminHome;
