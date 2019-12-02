const findTheMissing = (target) => {
    let result = [];
    const min = target[0];
    const max = target[target.length - 1];
    let pivotIndex = 1;
    for (let index = min; index < max; index++) {
        let pivotValue = target[pivotIndex];
        let diff = pivotValue - index;
        if (diff > 0) {
            if (index === target[pivotIndex - 1])
                index++;
            result.push(index);
        } else {
            pivotIndex++;
        }
    }
    return result;
}
let source = [1, 2, 3, 9];
console.log(findTheMissing(source));