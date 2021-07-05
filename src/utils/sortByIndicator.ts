import type { Data } from '../components/Chart/Chart';

const sortByIndicator = (objs: Data[] | undefined, indicator: string) => {
    
  if (objs !== undefined && objs.length >= 2){
    const compare = (a: Data, b: Data) => {
       // @ts-ignore - it won't be undefined
      if ( a[indicator] < b[indicator] ){
          return -1;
        }
        // @ts-ignore
        if ( a[indicator] > b[indicator] ){
          return 1;
        }
        return 0;
      }
      console.log("compare", compare);
    return objs?.sort(compare);
  }
  return objs;
}

export default sortByIndicator;