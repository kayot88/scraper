import { useContext } from 'react';
import { ScrapeContext } from './ScrapeContext';
import { distanceInWords } from 'date-fns';


export default function Data() {
    const { scrapes, fetchScrapes } = useContext(ScrapeContext);
    console.log(scrapes);

    return (
      <div>
        <button type="button" onClick={fetchScrapes}>
          Refresh Data
        </button>
        <h2>Your Data:</h2>
        <ul>
          {scrapes.twitters.map(scrape => (
            <li key={scrape.date}>
              {scrape.count}-
              {distanceInWords(new Date(scrape.date), new Date())}
            </li>
          ))}
        </ul>
        {scrapes.twitters.length}
      </div>
    );
}