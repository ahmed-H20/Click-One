import { useEffect } from "react";

export default function Banner() {
  useEffect(() => {
    // Define ad options before loading the script
    window.atOptions = {
      key: "0e933d76b72c674dc23308293015d687",
      format: "iframe",
      height: 250,
      width: 300,
      params: {},
    };

    // Create script for invoke.js
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "//www.highperformanceformat.com/0e933d76b72c674dc23308293015d687/invoke.js";
    script.async = true;

    const banner = document.getElementById("banner");
    if (banner) {
      banner.innerHTML = ""; // clear old content
      banner.appendChild(script);
    }

    return () => {
      if (banner) banner.innerHTML = "";
    };
  }, []);

  return (
    <div
      id="banner"
      style={{ textAlign: "center", margin: "20px 0", minHeight: "250px" }}
    >
      {/* Ad will load here */}
    </div>
  );
}
