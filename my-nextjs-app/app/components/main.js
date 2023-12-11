"use client"

import { useEffect } from 'react';

function ManiJs() {
  useEffect(() => {
    require('public/scripts/main.js');
  }, []);

  return null;
}

export default ManiJs;