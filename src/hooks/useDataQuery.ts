import { useQuery } from 'react-query';
import axios from 'axios';
import type { Data } from '../components/Chart/Chart';

const fetchCovidData = () => {
    return axios.get('https://api.apify.com/v2/datasets/Gm6qjTgGqxkEZTkuJ/items?format=json&clean=1&token=4sn38aTqdvLb9gCZfjy2Gwudj').then(response => response.data);
  }

const useDataQuery = () => {
    const { isLoading, data, error } = useQuery<Data[], Error>('covidData', 
    fetchCovidData,
    {
        cacheTime: 24*60*60*1000,
        staleTime: 5*60*1000
    }
    );

    return { isLoading, data, error};
}

export default useDataQuery;


 