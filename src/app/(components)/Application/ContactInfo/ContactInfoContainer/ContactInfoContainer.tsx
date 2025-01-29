import React from "react";
import { contactsInfo } from "../constants";

const ContactInfoContainer = () => {
  return (
    <div className='flex items-center justify-center flex-col lg:flex-row gap-y-3'>
      {contactsInfo.map((item, index) => (
        <div
          className='text-secondary text-xl flex items-center gap-x-16 flex-1 justify-center relative max-w-[350px]'
          key={item.id}
        >
          {item.text}
          {contactsInfo.length !== index + 1 && (
            <span className='absolute right-0 w-[2px] h-10 bg-secondary lg:block hidden' />
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactInfoContainer;
