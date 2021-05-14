/**
 * https://developer.mozilla.org/zh-CN/docs/conflicting/Web/JavaScript/Reference/Operators_7c8eb9475d97a4a734c5991857698560#bitwise_and
 * * @description 二进制运算符
 * * 按位与(AND) a & b 两位都为1才是1   1&1 = 1
 * * 按位或(OR)  a | b 有一个1即位1    1｜0 = 1  0｜1 = 1
 * * 按位异或（与非 XOR） a ^ b 只有一个1    1 ｜ 0 = 1
 * * 按位非(NOT) ~ a 反转操作数的比特位 即0位1 1位0
 * *  AND &
 * *  0 & 1 = 0    1 & 1 = 1  1 & 0 = 0       0 & 0 = 0
 * *  OR ｜
 * *  0 ｜ 1 = 1   1 ｜ 1 = 1  1 ｜ 0 = 1      0 | 0 = 0
 * *  XOR ^
 * *  0 ^ 1 = 1    1 ^ 1 = 0   1 ^ 0 = 1      0 ^ 0 = 0
 * *  add =>
 * *  one bit XOR^
 * *  0 + 1 = 1   1 + 1 = 0（进位1） 1 + 0 = 1  0 + 0 = 0
 * *  double bit
 * *  101 + 001 = 111 进位
 * *  101 & 101 = 101
 * *
 * *
 * *
 * function sum(a,b) {
 *  if (b === 0) return a
 *  return sum(a^b, (a&b) <<1)
 * }
 *
 */
