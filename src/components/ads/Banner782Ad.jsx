import { useEffect } from "react";

export default function BannerAdBig() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = `
      atOptions = {
        'key' : 'dbf909b4dd66c97cdb9a241f76570af4',
		'format' : 'iframe',
		'height' : 90,
		'width' : 728,
		'params' : {}
      };
    `;
    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = "//www.highperformanceformat.com/dbf909b4dd66c97cdb9a241f76570af4/invoke.js";

    document.getElementById("banner-ad782").appendChild(script1);
    document.getElementById("banner-ad782").appendChild(script2);
  }, []);

  return (
    <>
      <div id="banner-ad782" style={{ textAlign: "center", margin: "20px 0" }}>
        {/* الإعلان هيتحمل هنا */}
      </div>
    </>
    
  );
}