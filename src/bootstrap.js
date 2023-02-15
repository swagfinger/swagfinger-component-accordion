import React from 'react';
import { createRoot } from 'react-dom/client';

import './main.css';
import { Accordion } from './components/Accordion/Accordion';
import { AccordionExample } from './components/Accordion/AccordionExample';

const mount = (el) => {
  el.render(<AccordionExample />);
};

//dev mode
if (process.env.NODE_ENV === 'development') {
  const container = document.getElementById('component');

  if (container) {
    const root = createRoot(container);
    mount(root);
  }
}

//prod mode
export { Accordion };
