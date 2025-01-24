import React from "react";
import { contactsInfo } from "../constants";

const ContactInfoContainer = () => {
  return (
    <div className='flex items-center justify-center gap-x-16  mt-24'>
      {contactsInfo.map((item, index) => (
        <div
          className='text-secondary text-xl flex items-center gap-x-16'
          key={item.id}
        >
          {item.text}
          {contactsInfo.length !== index + 1 && (
            <span className='w-[2px] h-10 bg-secondary block' />
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactInfoContainer;
