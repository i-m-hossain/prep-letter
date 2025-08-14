function mergeTwoSortedArrays(list1, list2){
    const result = [];
    let i=0, j=0;

    while( i<list1.length  || j<list2.length ){
        if( list1[i] > list2[j] ){
            result.push(list2[j]);
            j++
        }
        if(list1[i] <= list2[j]){
            result.push(list1[i]);
            i++
        }
        if(!list1[i] && list2[j]){
            result.push(list2[j])
            j++;
        }
        if(!list2[j] && list1[i]){
            result.push(list1[i])
            i++
        }
    }
    return result;
}

const result = mergeTwoSortedArrays([10,15,20, 30,30, 30, 300], [5, 7,10, 13, 25, 90, 100]);
console.log(result); // [5, 7, 10, 13, 15, 20, 25, 30, 90, 100]