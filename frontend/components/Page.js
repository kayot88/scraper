import { useState, useEffect } from 'react';
import { ScrapeProvider } from './ScrapeContext';


// Custom Hook!
function useScrapes() {
  // Intial State inside our hook
  const [scrapes, setScrapes] = useState({
    twitters: []
  });
  // fetch function
  async function fetchScrapes() {
    const res = await fetch(`http://localhost:6767/data`);
    const data = await res.json();
    setScrapes(data);
  }
  // didMount/Did Update
  useEffect(() => {
    fetchScrapes();
  }, []);
  return { scrapes, fetchScrapes };
}



export default function Page({ children }) {
  const hookInfo = useScrapes();
  // console.log(hookInfo);
  return (
    <ScrapeProvider value={hookInfo}>
      <div className="page">{children}</div>
    </ScrapeProvider>
  );
}
