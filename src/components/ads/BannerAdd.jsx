import { useEffect } from "react";

export default function BannerAd() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = `
      atOptions = {
        'key' : '68d870f6fb9497091b5abd54fb292cd5',
        'format' : 'iframe',
        'height' : 60,
        'width' : 468,
        'params' : {}
      };
    `;
    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = "//www.highperformanceformat.com/68d870f6fb9497091b5abd54fb292cd5/invoke.js";

    document.getElementById("banner-ad").appendChild(script1);
    document.getElementById("banner-ad").appendChild(script2);
  }, []);

  return (
    <>
      <h1>Banner Ad small</h1>
      <div id="banner-ad" style={{ textAlign: "center", margin: "20px 0" }}>
        {/* الإعلان هيتحمل هنا */}
      </div>
    </>
    
  );
}