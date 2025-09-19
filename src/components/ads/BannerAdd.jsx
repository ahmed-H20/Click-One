import { useEffect } from "react";

export default function BannerAd() {
  useEffect(() => {
    // set global variable
    window.atOptions = {
      key: "68d870f6fb9497091b5abd54fb292cd5",
      format: "iframe",
      height: 60,
      width: 468,
      params: {},
    };

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "//www.highperformanceformat.com/68d870f6fb9497091b5abd54fb292cd5/invoke.js";
    script.async = true;

    const banner = document.getElementById("banner-ad");
    if (banner) {
      banner.appendChild(script);
    }
  }, []);

  return (
      <div
        id="banner-ad"
        style={{ textAlign: "center", margin: "20px 0" }}
      />
  );
}
