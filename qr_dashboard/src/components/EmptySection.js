import React from 'react';
import emptysection from '../assets/images/empty.gif';

function EmptySection() {
  return (
    <div className="Dashboard-Spinner flex-column">
      <h2 className="text-center" style={{ textAlign: 'center' }}>
        <img
          className="mt-4"
          style={{ width: '40%' }}
          alt="No Orders"
          src={emptysection}
        />
      </h2>
      <h3
        style={{ textAlign: 'center', fontSize: ' 2rem', marginTop: '50px' }}
        className="text-center">
        No Content!
      </h3>
    </div>
  );
}

export default EmptySection;
