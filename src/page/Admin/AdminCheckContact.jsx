import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { handleGetContact } from "../../services/users/user.service";
import EmptyData from "../../components/EmptyData";
const AdminCheckContact = ({ token }) => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    const getContact = async () => {
      const res = await handleGetContact();
      if (res) setContact(res.data);
    };

    getContact();
  }, []);

  if (token === undefined) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <div className="pt-[150px] w-full px-4 mx-auto xl:max-w-[1410px]">
      <h2 className="text-center mb-10 font-bold md:font-bold text-[#ffb3c6] heading-5 md:heading-4">
        Phản hồi từ người truy cập
      </h2>
      <div className="flex flex-col gap-3">
        {contact.length > 0 ? (
          <>
            {contact.map((item) => (
              <div
                key={item.id}
                className="w-full bg-[#ffb3c6]/20 px-8 py-5 gap-2 flex flex-col rounded-2xl"
              >
                <p className="small xl:big">
                  Tên người gửi:{" "}
                  <span className="font-normal">{item.username}</span>
                </p>
                <p className="small xl:big">
                  Số điện thoại:{" "}
                  <span className="font-normal">{item.phone}</span>
                </p>
                <p className="small xl:big">
                  Email: <span className="font-normal">{item.email}</span>
                </p>
                <p className="small xl:big">
                  Nội dung: <span className="font-normal">{item.question}</span>
                </p>
              </div>
            ))}
          </>
        ) : (
          <EmptyData />
        )}
      </div>
    </div>
  );
};

export default AdminCheckContact;
