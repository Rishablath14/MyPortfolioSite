import React from 'react'

const FooterBottom = () => {
  return (
    <div className="footer-strip w-full py-10">
      <p className="text-center text-white/45 text-sm tracking-[0.18em] uppercase">
        © {new Date().getFullYear()}. All rights reserved by Rishab Lath
      </p>
    </div>
  );
}

export default FooterBottom
