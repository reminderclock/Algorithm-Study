function solution(participant, completion) {
  completion.sort();
  return participant.sort().find((e, index) => e !== completion[index]);
}
