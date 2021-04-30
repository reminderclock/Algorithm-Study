function solution(absolutes, signs) {
  return absolutes.reduce(
    (prev, acc, idx) => prev + acc * (signs[idx] ? 1 : -1),
    0
  )
}