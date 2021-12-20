// Print Array Min and Max
// Iterate through an array of integers and find the smallest and largest values in the array
// and print them

var arr = [6, 19, 2, 45, 10, 92, -3, 0]
function FindMinMax(){
        var max = arr[0]
        var min = arr[0] 
        for(var i = 0; i < arr.length; i++ ){
            if(max > arr[i] ){
                max = max
            }else{
                max = arr[i]
            }
        }
            for(var i = 0; i < arr.length; i++ ){
            if(min < arr[i] ){
                min = min
            }else{
                min = arr[i]
            }
        } 
        console.log(`min: ${min}`)
        console.log(`max: ${max}`)
    }
    FindMinMax()
    
