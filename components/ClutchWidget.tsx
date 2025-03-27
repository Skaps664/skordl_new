import { useEffect } from "react";

const ClutchWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.clutch.co/static/js/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="clutch-widget"
      data-url="https://widget.clutch.co"
      data-widget-type="2"
      data-height="45"
      data-nofollow="true"
      data-expandifr="true"
      data-scale="100"
      data-clutchcompany-id="2500131"
    />
  );
};

export default ClutchWidget;
