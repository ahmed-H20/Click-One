import { useEffect } from "react";

export default function Banner() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = `
      atOptions = {
        'key' : '0e933d76b72c674dc23308293015d687',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
      };
    `;
    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = "//www.highperformanceformat.com/0e933d76b72c674dc23308293015d687/invoke.js";

    document.getElementById("banner").appendChild(script1);
    document.getElementById("banner").appendChild(script2);
  }, []);

  return (
    <>
      <div id="banner" style={{ textAlign: "center", margin: "20px 0" }}>
        {/* الإعلان هيتحمل هنا */}
      </div>
    </>
    
  );
}