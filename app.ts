function hole_sorting(array: Array<number>): Array<number>{
    const low_priority_values: Array<number> = [1, 2, 3, 7, 5];
    const medium_priority_values: Array<number> = [4, 6, 9, 0];
    // const high_priority_values: Array<number> = [8];

    let low_priority: Array<number> = [];
    let medium_priority: Array<number> = [];
    let high_priority: Array<number> = [];

    for (let key in array){

        if (low_priority_values.indexOf(array[key]) !== -1){
            low_priority.push(array[key]);
        } else if (medium_priority_values.indexOf(array[key]) !== -1){
            medium_priority.push(array[key]);
        } else {
            high_priority.push(array[key]);
        }

    }

    low_priority.sort();
    medium_priority.sort();
    high_priority.sort();

    return low_priority.concat(medium_priority).concat(high_priority);
}

const array: Array<number> = [2, 5, 7, 6, 8, 9, 0, 1, 3, 4];
console.log(hole_sorting(array));