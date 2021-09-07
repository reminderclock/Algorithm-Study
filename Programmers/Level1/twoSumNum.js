function solution(numbers) {
  if (numbers.length <= 1) {
    return numbers;
  }
  const arr = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      arr.push(numbers[i] + numbers[j]);
    }
  }
  return Array.from(new Set(arr)).sort((a, b) => a - b);
}
