export function getSortedData(sortedData,selectValue){

    if(selectValue === 'Name'){
    return sortedData[0].PostOffice.sort((a, b) => {
        const valueA = a.Name.toLowerCase();
        const valueB = b.Name.toLowerCase();
  
        if (valueA < valueB) {
          return -1;
        }
        if (valueA > valueB) {
          return 1;
        }
        return 0;
      });
    }
    else if( selectValue === "BranchType"){
        return sortedData[0].PostOffice.sort((a, b) => {
            const valueA = a.BranchType.toLowerCase();
            const valueB = b.BranchType.toLowerCase();
      
            if (valueA < valueB) {
              return -1;
            }
            if (valueA > valueB) {
              return 1;
            }
            return 0;
          });
    }
    else if( selectValue === "DeliveryStatus"){
        return sortedData[0].PostOffice.sort((a, b) => {
            const valueA = a.DeliveryStatus.toLowerCase();
            const valueB = b.DeliveryStatus.toLowerCase();
      
            if (valueA < valueB) {
              return -1;
            }
            if (valueA > valueB) {
              return 1;
            }
            return 0;
          });
    }
}