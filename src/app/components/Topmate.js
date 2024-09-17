"use client";
import Script from "next/script";

const Topmate = () => {
  return (
    <>
    <Script
    src="https://topmate-embed.s3.ap-south-1.amazonaws.com/v1/topmate-embed.js"
    user-profile="https://topmate.io/embed/profile/rishab_lath?theme=D5534D"
    btn-style='{"backgroundColor":"#00000091","color":"#fff","border":"1px solid #fff"}'
    embed-version="v1"
    button-text="Let's Connect"
    position-right="12px"
    position-bottom="12px"
    custom-padding="0px"
    custom-font-size="12px"
    custom-font-weight="500"
    custom-width="120px"
    async=""
    defer=""
  />  
    </>
  );
};
export default Topmate