"use client";

import React from 'react';
import Script from 'next/script';

interface ClutchWidgetProps {
  companyId?: string;
  backgroundColor?: string;
  customClass?: string;
}

const ClutchWidget: React.FC<ClutchWidgetProps> = ({ 
  companyId = '2500131',
  backgroundColor = 'transparent', // Default transparent
  customClass = '' // Allow additional custom classes
}) => {
  return (
    <div 
      className={`clutch-widget-container ${customClass}`} 
      style={{ backgroundColor }}
    >
      <Script
        src="https://widget.clutch.co/static/js/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
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
        style={{ 
          border: 'none', 
          overflow: 'hidden' 
        }}
      />
    </div>
  );
};

export default ClutchWidget;