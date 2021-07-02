import type { Data } from '../components/Chart/Chart';

const sortByIndicator = (objs: Data[] | undefined, indicator: string) => {
    
    const compare = (a: Data, b: Data) => {
        if ( a[indicator] < b[indicator] ){
            return -1;
          }
          if ( a[indicator] > b[indicator] ){
            return 1;
          }
          return 0;
    }

    return objs?.sort(compare);
}

export default sortByIndicator;