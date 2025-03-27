"use client";

import React, { useEffect } from 'react';

const ClutchWidget: React.FC = () => {
  useEffect(() => {
    // Diagnostic logging
    console.log('ClutchWidget component mounted');

    // Dynamic script loading
    const script = document.createElement('script');
    script.src = 'https://widget.clutch.co/static/js/widget.js';
    script.async = true;
    script.onload = () => {
      console.log('Clutch script loaded');
      // Attempt to manually trigger widget
      if (window.clutchwp && window.clutchwp.init) {
        const widget = document.querySelector('.clutch-widget');
        if (widget) {
          console.log('Attempting to initialize widget');
          window.clutchwp.init(widget as HTMLElement);
        } else {
          console.error('No clutch-widget element found');
        }
      } else {
        console.error('clutchwp not available');
      }
    };
    script.onerror = () => {
      console.error('Failed to load Clutch script');
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full">
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
    </div>
  );
};

export default ClutchWidget;