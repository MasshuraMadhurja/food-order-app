
export function filterData(searchText, restaurants){
    const filterData= restaurants.filter((res)=> res.data.name.includes(searchText))
    return filterData;
   }