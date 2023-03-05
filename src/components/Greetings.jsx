import React from 'react';

function Greetings({ lang, children }) {
  return (
    <div className="greetings">
      {lang === 'de' && <p>Hallo {children}</p>}
      {lang === 'fr' && <p>Bonjour {children}</p>}
      {lang === 'es' && <p>Buenos dias {children}</p>}
      {lang === 'en' && <p>Good morning {children}</p>}
    </div>
  );
}

export default Greetings;
