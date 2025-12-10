//Data Types
//01
const a1 = 123; 
const b1 = 'hello'; 
const c1 = true;

console.log(typeof(a1));
console.log(typeof(b1));
console.log(typeof(c1));

//02
const str = '123';

console.log(Number(str));

//03
const num = 456;
console.log(String(num));

//04
const a = 0; 
const b = 'hello'; 
const c = '';

console.log(Boolean(a))
console.log(Boolean(b))
console.log(Boolean(c))

//05
const d = null;
const e = undefined;

console.log(typeof(d));
console.log(typeof(e));

//06
const str1 = '3.14'; 
const str2 = '42px';
//parseInt = 문자열을 정수로 변환 (소수점 버리기, 유효한 숫자만 읽기, 문자열이 숫자가 아니면 Nan반환)
//parseFloat = 문자열을 부동 소수점 숫자 (소수점 인식-> 실수 반환, 유효한 숫자만 읽기, 10진수만 처리)
console.log(parseInt(str1)); // 소수점 없앰
console.log(parseInt(str2)); // 숫자 뒤에 문자열없앰
console.log(parseFloat(str1)); //숫자 그대로 존재
console.log(parseFloat(str2)); //숫자 뒤에 문자열 없앰

//07
const number = 12;
const boolean = true;
const n = null;
const u = undefined;

console.log(`${number},${boolean},${n},${u}`)
console.log(typeof`$(number)`);
console.log(typeof`$(boolean)`);
console.log(typeof`$(n)`);
console.log(typeof`$(u)`);

//08
const aa = 'hello'; 
const bb = NaN; 
const cc = 123;

console.log(isNaN(aa)); //t
console.log(Number.isNaN(aa)); //f
console.log(isNaN(bb)); //t
console.log(Number.isNaN(bb)); //t
console.log(isNaN(cc)); //f
console.log(Number.isNaN(cc)); //f

//09
const aaa = 1 + '2'; 
const bbb = '3' + 4; 
const ccc = 5 + 6;
console.log(aaa);
console.log(typeof(aaa));
console.log(aaa);
console.log(typeof(aaa));
console.log(aaa);
console.log(typeof(aaa));



