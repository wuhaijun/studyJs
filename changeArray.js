
/***
 *练习 （3）将数组的第一个元素放到数组的尾端。例如 [1 2 3 4 5] ==> [2 3 4 5 1]
 *
 ****/






var arr = [0,1,2,3,4,5,6];
var result = [];
for (var k = 0, length = arr.length; k < length; k++) {
    if(k<length-1){
        result.push(arr[k+1]);
    }
}
result.push(arr[0]);

console.log(result);