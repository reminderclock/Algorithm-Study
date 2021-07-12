
// 로직
function solution(new_id) {
    const id = new_id
        .toLowerCase() // 소문자로 변환
        .replace(/[^\w\d-_.]/g, '') // 문자, 숫자 ,- , _, .을 제외한것 "" 으로 대체
        .replace(/\.{2,}/g, '.') // .이 최소 2이상이면 . 으로 대체
        .replace(/^\.|\.$/g, '') //가장 앞이나 뒤에 .이 있으면 ''으로 대체
        .padEnd(1, 'a') // 1 길이의 지정문자열 추가
        .slice(0, 15) // 1부터 15 길이 까지 자름
        .replace(/\.$/g, '')    // 마지막 . 있으면 "" 대체
    return id.padEnd(3, id[id.length-1]) 
}
console.log(solution("...!@BaT#*..y.abcdefghijklm"));