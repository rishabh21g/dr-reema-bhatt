import React from "react";

const Location = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-sm font-semibold italic text-gray-800 mb-4">
        Find Us at Amrita Hospital, Faridabad
      </h2>
      <div className="w-full h-[400px] md:h-[500px] rounded-md overflow-hidden shadow-2xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.7689707318564!2d77.3533526!3d28.4262272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdddfae31ef3b%3A0x370f280dfc5b14de!2sDr%20Reema%20Bhatt-%20Best%20Fetal%20Medicine%20Doctor!5e0!3m2!1sen!2sin!4v1759307030223!5m2!1sen!2sin"
          width="100%"
          height="100%"
          loading="lazy"
          title="Amrita Hospital Faridabad Location"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
