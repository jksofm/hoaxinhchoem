import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="lg:px-[200px] px-[80px] py-[36px] lg:py-[50px] flex justify-center items-center gap-36">
      <div className="flex flex-col">
        <div className="flex justify-evenly mb-4">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            className="hover:opacity-90"
            href={"mailto:lequochuypy1998@gmail.com"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50.909"
              height="40"
              viewBox="0 0 50.909 40"
            >
              <path
                id="Icon_ionic-md-mail"
                data-name="Icon ionic-md-mail"
                d="M48.31,5.625H7.1A4.863,4.863,0,0,0,2.25,10.474v30.3A4.863,4.863,0,0,0,7.1,45.625H48.31a4.863,4.863,0,0,0,4.849-4.849v-30.3A4.863,4.863,0,0,0,48.31,5.625Zm-.606,10.3-20,13.333L7.7,15.928V11.08l20,13.333,20-13.333Z"
                transform="translate(-2.25 -5.625)"
                fill="rgba(0,0,0,0.49)"
              ></path>
            </svg>
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            className="hover:opacity-90"
            href={"https://www.instagram.com/hoaxinhchoem/"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
            >
              <path
                id="Icon_zocial-instagram"
                data-name="Icon zocial-instagram"
                d="M3.6,40a4.755,4.755,0,0,1-2.188-1.243A4.4,4.4,0,0,1,.2,36.666C.055,36.111.047,35.588.047,20.151.039,2.808.016,3.761.469,2.784A4.665,4.665,0,0,1,2.743.526C3.752.08,2.767.1,20.243.127l16.1.016.5.172a4.741,4.741,0,0,1,3,3l.172.5.016,16.1c.023,17.883.063,16.546-.508,17.7A4.643,4.643,0,0,1,37.547,39.6c-1.141.563.156.524-17.539.516C6.479,40.105,3.994,40.09,3.6,40Zm31.154-4.76c.641-.453.657-.5.68-3.478.023-2.9.008-3.048-.469-3.509-.43-.422-.633-.446-3.462-.438l-2.579.008-.352.188a1.922,1.922,0,0,0-.578.547l-.234.344-.008,2.587c-.008,1.415.023,2.7.063,2.853a1.46,1.46,0,0,0,.8.985l.391.2,2.712-.023,2.7-.023ZM21.6,27.647a7.757,7.757,0,0,0,5.987-6.018,9.548,9.548,0,0,0,.086-2.54,7.872,7.872,0,0,0-4.01-5.752A8.387,8.387,0,0,0,21.6,12.57c-.149-.016-.461-.063-.7-.1a7.721,7.721,0,0,0-6.972,2.986,7.647,7.647,0,0,0,.149,9.5,7.793,7.793,0,0,0,5.158,2.806A8.157,8.157,0,0,0,21.6,27.647ZM8,22.574a12.4,12.4,0,0,1,1.032-7.933,11.5,11.5,0,0,1,2.337-3.212A12.19,12.19,0,0,1,22,7.959a12.382,12.382,0,0,1,9.957,9.066,12.138,12.138,0,0,1,.32,4.377,8.606,8.606,0,0,1-.32,1.688c-.023.039-.016.07.023.078.3.031,3.337.023,3.392-.016.047-.023.063-3.494.055-8.722l-.023-8.683-.234-.336a1.953,1.953,0,0,0-.586-.516l-.352-.18-14.272.023L5.7,4.754l-.32.211a2.056,2.056,0,0,0-.5.508l-.188.3-.023,8.637c-.008,4.752-.008,8.668.016,8.715a8.411,8.411,0,0,0,1.743.078H8.136Z"
                transform="translate(-0.044 -0.117)"
                fill="rgba(0,0,0,0.49)"
              ></path>
            </svg>
          </Link>

          <Link
            rel="noopener noreferrer"
            target="_blank"
            className="hover:opacity-90"
            href={"https://www.tiktok.com/@hoaxinhchoem"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
            >
              <path
                id="Icon_awesome-facebook-square"
                data-name="Icon awesome-facebook-square"
                d="M35.714,2.25H4.286A4.286,4.286,0,0,0,0,6.536V37.964A4.286,4.286,0,0,0,4.286,42.25H16.54v-13.6H10.915v-6.4H16.54V17.371c0-5.549,3.3-8.614,8.363-8.614a34.077,34.077,0,0,1,4.957.432v5.446H27.069c-2.751,0-3.609,1.707-3.609,3.458V22.25H29.6l-.982,6.4H23.46v13.6H35.714A4.286,4.286,0,0,0,40,37.964V6.536A4.286,4.286,0,0,0,35.714,2.25Z"
                transform="translate(0 -2.25)"
                fill="rgba(0,0,0,0.49)"
              ></path>
            </svg>
          </Link>
        </div>
        <p className="text-center">
          Địa chỉ: Hoàng Quốc Việt, phường Phú Thuận, Quận 7, TP.HCM
        </p>
        <p className="text-center">Số điện thoại: 033 584 7097</p>
        <p className="text-center">Email: lequochuypy1998@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
