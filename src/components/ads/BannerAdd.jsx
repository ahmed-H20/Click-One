import { useEffect } from "react";

export default function BannerAd() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = `
      atOptions = {
        'key' : 'af65b1c1a249a861126c74a2a35dc488',
        'format' : 'iframe',
        'height' : 50,
        'width' : 320,
        'params' : {}
      };
    `;
    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = "//www.highperformanceformat.com/af65b1c1a249a861126c74a2a35dc488/invoke.js";

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