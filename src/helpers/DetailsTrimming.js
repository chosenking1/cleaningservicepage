import React, { useState, useEffect } from 'react';

const CleaningDetails = ({ details }) => {
  const [formattedDetails, setFormattedDetails] = useState('');

  useEffect(() => {
    const formatText = (text) => {
      if (!text) return ''; // Handle undefined or null text

      const lines = text.split('\n');
      let html = '';
      let inList = false;

      for (let line of lines) {
        line = line.trim();
        if (!line) continue; // Skip empty lines

        if (line.endsWith(':')) {
          if (inList) {
            html += '</ul>';
            inList = false;
          }
          html += `<h2>${line.slice(0, -1)}</h2><ul>`;
          inList = true;
        } else if (inList) {
          html += `<li>${line}</li>`;
        }
      }

      if (inList) {
        html += '</ul>';
      }

      return html;
    };

    setFormattedDetails(formatText(details));
  }, [details]);

  return <div dangerouslySetInnerHTML={{ __html: formattedDetails }} />;
};

export default CleaningDetails;
