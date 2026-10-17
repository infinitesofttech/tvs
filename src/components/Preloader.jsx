import { useEffect } from 'react';

export default function Preloader() {
  return (
    <div className="preloader-area text-center position-fixed top-0 bottom-0 start-0 end-0" id="preloader">
      <div className="loader position-absolute start-0 end-0">
        <img src="/assets/images/favicon.svg" alt="favicon" />
        <div className="waviy position-relative">
          <span className="d-inline-block">Talent</span>
          <span style={{ color: '#BAE40E' }} className="d-inline-block">Vista</span>
        </div>
      </div>
    </div>
  );
}
