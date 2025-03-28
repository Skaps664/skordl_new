"use client";

import React from 'react';
import Script from 'next/script';

interface ClutchWidgetProps {
  companyId?: string;
  height?: number;
  scale?: number;
}

const ClutchWidget: React.FC<ClutchWidgetProps> = ({ 
  companyId = '2500131',
}) => {
  return (
    <div>
      {/* <h3 className="font-bold mb-4">Clutch Reviews</h3> */}
      <Script
        src="https://widget.clutch.co/static/js/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Attempt to initialize the widget
          const widgetElement = document.querySelector('.clutch-widget');
          if (window.clutchwp && window.clutchwp.init && widgetElement) {
            window.clutchwp.init(widgetElement as HTMLElement);
          }
        }}
      />
      <div 
        className="clutch-widget" 
        data-url="https://widget.clutch.co" 
        data-widget-type="2"
        data-nofollow="true" 
        data-expandifr="true"
        data-clutchcompany-id={companyId}
      />
    </div>
  );
};

export default ClutchWidget;