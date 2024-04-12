import { useState, useEffect } from 'react';
import logo from "../../../../public/logo.png"
import blacklogo from "../../../../public/black logo.png"

export default function LogoComponent() {
  const [imageSrc, setImageSrc] = useState<string>(logo.src);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const bodyBackgroundColor = window.getComputedStyle(document.body).backgroundColor;
      setImageSrc(bodyBackgroundColor === 'black' ? logo.src: blacklogo.src  );
    });

    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return <img className="hover:scale-105 w-32 h-10" src={imageSrc} alt="Logo" />;
}
