import { useEffect } from "react";

export default function Banner() {
  useEffect(() => {
    window.atOptions = {
      key: "0e933d76b72c674dc23308293015d687",
      format: "iframe",
      height: 250,
      width: 300,
      params: {},
    };

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "//www.highperformanceformat.com/0e933d76b72c674dc23308293015d687/invoke.js";

    document.getElementById("banner").appendChild(script);
  }, []);

  return (
    <div id="banner" style={{ textAlign: "center", minHeight: "250px" }}>
      {/* الإعلان هيتحمل هنا */}
    </div>
  );
}
