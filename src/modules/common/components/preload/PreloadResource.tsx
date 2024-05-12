'use client';
import ReactDOM from 'react-dom';

export default function PreloadResource() {
  ReactDOM.preconnect('https://fonts.googleapis.com', {
    crossOrigin: 'anonymous',
  });
  ReactDOM.prefetchDNS('https://fonts.googleapis.com');

  ReactDOM.preconnect('https://static.cdninstagram.com', {
    crossOrigin: 'anonymous',
  });
  ReactDOM.prefetchDNS('https://static.cdninstagram.com');

  return null;
}
