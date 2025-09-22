import { useEffect } from "react";

export default function BannerAd() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = `
      atOptions = {
        'key' : 'a94bf5be7147514dd1086e4d1e7c1ef0',
        'format' : 'iframe',
        'height' : 60,
        'width' : 468,
        'params' : {}
      };
    `;
    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = "//www.highperformanceformat.com/a94bf5be7147514dd1086e4d1e7c1ef0/invoke.js";

    document.getElementById("banner-ad").appendChild(script1);
    document.getElementById("banner-ad").appendChild(script2);
  }, []);

  return (
    <>
      <div id="banner-ad" style={{ textAlign: "center", margin: "20px 0" }}>
        {/* الإعلان هيتحمل هنا */}
      </div>
    </>
    
  );
}