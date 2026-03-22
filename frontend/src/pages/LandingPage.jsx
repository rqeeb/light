import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f14_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f14_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="relative z-10 w-full flex items-center justify-center min-h-screen px-6">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-[#d65a38]/30 blur-[140px]" />

        <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 h-[220px] w-[220px] rounded-full bg-[#ef8b63]/40 blur-[60px]" />
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-10 py-12 text-center max-w-2xl w-full ">
          <p className="text-sm tracking-[0.3em] text-[#7a6d62] mb-4">
            WELCOME TO
          </p>

          <h1 className="font-display text-6xl md:text-8xl leading-[1.05] tracking-tight text-[#2f2926]">
            Zonnect
          </h1>

          <p className="mt-6 text-[#7a6d62] text-lg md:text-xl max-w-xl mx-auto">
            A minimalist chat app designed to reduce eye strain with soft, dim
            colors.
          </p>

          <div className="mt-10 flex items-center justify-center">
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 rounded-full bg-[#c45d41] text-[#f3eadf] hover:opacity-90 transition"
            >
              Get Started (beta)
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
