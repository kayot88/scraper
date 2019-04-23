export function uniqueVal(scrapes) {
  scrapes.reduce((acc, scrape) => {
    if (acc.find(el => el.count === scrape.count)) {
      // console.log('works');
      return [...acc, scrape];
    }
    return acc;
  }, []);
}

// var2 
// export function uniqueVal(scrapes) {
//   return scrapes.filter((item, i, arr)=>{
//     if (i === 0) return true;
//     const lastItem =arr[i-1]
//     return (item.count === lastItem.count)
//   })
// }
