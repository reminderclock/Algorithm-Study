function timeConversion(s) {
    /*
     * Write your code here.
     */
    if(s.includes('PM')){
        let time = s.substr(0,8).split(':');
        time[0] = 12+parseInt(time[0]);        
        return time.join(':');
    }
    else if(s.includes('AM')) {
        let timeA = s.substr(0,8).split(':');
        if(parseInt(timeA[0])===12){
            timeA[0] = '00';
            return timeA.join(':');
        }
        return timeA.join(':');
    }
}
let a = '12:40:22AM'
console.log(timeConversion(a));