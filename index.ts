// Typescript

let 이름: string = "kim";
//이름 = 123;   // 문자로 타입을 지정하면 숫자는 못들어옴

// 타입은 아래 애들과 + bigint가 있다.
let 숫자: number = 123;
let 불: boolean = true;
let 빈값: null = null;
let 언디파인드: undefined = undefined;
let 어레이: string[] = ["kim", "park"]; // string배열 생성
let 오브젝트: { name: string; age: number } = { name: "kim", age: 12 };

// union 타입 - 하나의 타입이 아닌 여러 타입을 변수에 지정
// 아래와 같이 string타입도 number타입도 받을 수 있음
let 유니언타입: string | number = 123;
유니언타입 = "union";

// 타입은 변수에 선언하여 필요할 때 꺼내쓸 수 있음
// 보통 타입변수명은 첫글자를 대문자로 시작함
type Name = string | number;

let ㅇㅇ: Name = 123;
ㅇㅇ = "324";

// 함수에서도 타입을 지정할 수 있음
// 매개변수 타입을 number로 지정하고, return 값의 타입을 string으로 지정할 수 있음
function 함수(x: number): string {
  return x + "번";
}

함수(3);

// Array에 쓸수있는 tuple 타입
// String[] 처럼 배열 전체의 타입을 지정할 수도 있지만
// 배열 내부에 들어가는 객체의 타입도 따로 지정할 수 있음
type Member = [number, boolean];
let john: Member = [123, true];

// object에 타입지정해야할 속성이 너무 많으면 타입을 한번에 묶어서 지정할 수도 있음
type Info = {
  [key: string]: string;
};

let nadan: Info = { name: "jo", age: "123" };

// class도 타입 지정 가능
class User {
  userNm: string;
  constructor(userNm: string) {
    this.userNm = userNm;
  }
}

//------------------------------------------------------------------------

/******************************************************************
                            원시 타입
******************************************************************/

// typescript에서 타입을 따로 지정하지 않아도 할당되는 변수값에 따라 타입이 자동으로 지정됨

let 회원들 = "park"; // 이렇게 변수를 할당하면 변수의 타입에 맞게 자동으로 타입이 설정됨.
//  회원들 = 123; 이렇게 '회원들' 변수에 number로 재할당하면 에러를 발생시킴.

// Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.

const myName: string = "배찬";
const myAge: number = 29;
const myLoc: string = "서울시 성북구";

// Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.

const myFavSong: { song: string; singer: string } = {
  song: "서른즈음에",
  singer: "김광석",
};

// Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.

let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

/******************************************************************
                Union Type / Any Type / Unknown Type
******************************************************************/

// Union Type : 하나의 타입이 아닌 여러 타입을 변수에 지정

let 회원1: number | string = "kim";
회원1 = 123;

// 그렇다면 배열에서 string으로만 number로만 해서 하나의 타입으로 통일 시켰는데 여러가지 타입으로 하고싶으면?

let 어레이1: (number | string)[] = [1, "2", 3]; // 만약 소괄호를 안해주면 number | string[] 은 number와 string[] 배열로 들어올 수 있다는 뜻
let 오브젝트1: { a: string | number } = { a: 123 };

// Any Type : 타입이 아무거나 들어와도된다는 뜻으로 javascript에서 썼던 것처럼 쓰는 것인데
// 그러면 typescript를 쓰는 이유가 없어지지만 용도는 타입지정해두었던 것을 타입을 풀어줄 때 사용한다고 함
let 애니: any;
애니 = 123;
애니 = [];

let 노운 = 애니;

// Unknown type : 모든 자료형을 허용해줌 ( Any type과 비슷 ) 그런데 any타입보다 안전함
// 안전한 이유는 unknown 타입을 다른 타입을 가지는 변수에 할당하면 에러를 발생시킴 ( Any와 Unknown 는 var 와 const 같은 느낌이랄까? )
// any 타입은 위에처럼 할당 시 어떤 타입이 들어와도 허락해줌
let 언노운: unknown;

// let 노운 :string = 언노운; // 이렇게 unknown 타입인데 다른 타입을 가지고 있는 변수에 할당하면 에러발생

//언노운 - 1 // unknown 타입은 숫자가 아니므로 연산을 할 수 없음. - typescript에서는 같은 타입끼리 연산하도록 엄격하게 관리

// tip. 타입스크립트에서는 연산할 때도 타입이 굉장히 엄격함

let 연산예제: string | number;
// 연산예제 + 1; // 이런 경우 number에서는 괜찮지만 '연산예제'변수에는 string도 들어갈 수 있으므로 연산이 안됩니다.

let 나이1: unknown = 1;
// 나이1 - 1; // number타입이여야 숫자처럼 연산할 수 있기때문에 unknown타입인 나이1은 number타입과 연산이 안됩니다.

// Q1. 다음 변수 4개에 타입을 지정해봅시다.
// age 변수엔 undefined 말고 숫자도 들어올 수 있습니다.
let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | undefined | number | boolean)[] = [user, age, married];

// Q2. 학교라는 변수에 타입지정해보십시오.

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

/******************************************************************
                          함수 function
******************************************************************/

// 함수 function
// 1. 길고 복잡한 코드를 한 단어로 축약할 때 사용
// 2. input을 넣으면 연산하여 output이 나오는 역할로 사용

// 함수(매개변수:타입) { return }     매개변수 타입을 지정할 수 있다.
function 함수1(x: string) {
  return x + "번째";
}
함수1("3");

// 함수(매개변수:타입) :타입 { return }     매개변수와 return값 모두 타입을 지정할 수 있다.
function 함수2(x: number): number {
  return x * 2;
}
함수2(3);

// void 함수 : return이 없는 함수
function 함수3(x: number): void {
  x + 1;
}

함수3(3);

/******************************************************************
                                ? ( | undefined )
******************************************************************/

// 타입이 지정된 매개변수가 있으면 함수 호출 시 매개변수를 꼭 넣어주어야한다.
// 하지만 파라미터를 옵션으로 선택하게 할 수 있는 방법이 있다
// 변수? :number 는
// 변수: number | undefined 와 같음
// 함수(파라미터? :타입){ };

function 함수4(x?: number): void {
  // x+3;  그냥 x+3 하면 x는 선택적이라 undefined로 될 수 있기 때문에 narrowing을 사용하여 구분한다.

  // narrowing하여 if문으로 분기처리 한다.
  if (x) {
    x + 3;
  } else {
  }
}
함수4(3);
함수4();

// ?는 object 속성 안에서도 사용가능

type ddd = {
  name?: string;
  // name : string | undefined 와 같으므로
};

const ccc: ddd = {
  name: "aaa",
};

// Q1. 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 이름"을 출력해주고
//     아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.

function sayHi(name?: string): void {
  if (name) {
    console.log("안녕하세요 " + name);
  } else {
    console.log("이름이 없습니다.");
  }
}

/* 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
숫자 또는 문자 이외의 자료가 들어오면 안됩니다. */

function positionNumber(x: string | number): number {
  if (typeof x == "string") {
    return x.length;
  } else {
    return x.toString().length;
  }
}
positionNumber("3");
positionNumber(2);

/* 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다. 
2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다. 
3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다. */

function 결혼가능확률(
  월소득: number,
  집보유여부: boolean,
  매력점수: string
): string | void {
  let 점수: number = 0;

  점수 += 월소득;

  if (집보유여부) {
    점수 += 500;
  }

  if (매력점수 === "상") {
    점수 += 100;
  }

  if (점수 >= 600) {
    return "결혼가능";
  }
}

결혼가능확률(100, true, "상");

/******************************************************************
                      narrowing 과 assertion
******************************************************************/

// narrowing : type이 하나의 타입으로 확정되지 않은 경우 연산에 오류가 발생할 수 있기 때문에 이를 방지하기 위한 방식
// 변수의 타입이 불확실하면 if문 등으로 narrowing 해주어야 조작이 가능합니다.
function 내함수(x: number | string) {
  let 내배열: number[] = [];
  // 내배열[0] = x;            // string이 들어갈 수 있기 때문에 오류가 발생

  if (typeof x === "number") {
    내배열[0] = x;
  }
}

// narrowing으로 판정해주는 키워드 & 문법
// 1. typeof 변수
// 2. 속성명 in 오브젝트자료
// 3. 인스턴스 instanceof 부모
// 현재 변수의 타입이 뭔지 특정 지을 수 있으면 다 narrowing으로 인정해줍니다.

// 만약 narrowing으로 타입특정을 하기 싫다면 assertion 문법도 있습니다.
function 내함수1(x: number | string) {
  let 내배열: number[] = [];
  // 내배열[0] = x;            // string이 들어갈 수 있기 때문에 오류가 발생

  내배열[0] = x as number; // 타입이 number 혹은 string 처럼 애매한 경우 number로 특정해주고 싶을 때 사용
  //내배열[1] = x as boolean;  // 대신 이런식으로 아예 다른 타입으로 변경하는거는 안됨.
}

내함수1("ddsfa"); // 대신 assertion 문법을 사용하면 이 경우에 에러를 발생시키지 않음.
// ▲ 위와 같은 경우가 있기도 하고 if문 같은 게 좀 더 직관적이므로 as보다는 if문으로 narrowing하자.
// *tip. 예전의 as 는 <number>타입 이런식으로 사용했다고함.

// *tip. 위의 ts파일을 테스트해보고 싶을 경우에는 html파일을 하나 만들고
//       ts파일을 컴파일한 js파일을 html에 import시키고 html로 테스트한다.

/* Q1. 숫자여러개를 array 자료에 저장해놨는데
가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
이걸 클리닝해주는 함수가 필요합니다. 
클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
[1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
모르는 부분은 구글검색해도 봐드림 */

function cleaning(혼합배열: (string | number)[]): number[] {
  let 숫자배열: number[] = [];

  혼합배열.forEach((element: string | number) => {
    if (typeof element === "string") {
      숫자배열.push(parseInt(element));
    } else {
      숫자배열.push(element);
    }
  });

  return 숫자배열;
}

// console.log(cleaning(['1',2,'3']));

/* Q2. 

let 철수쌤 = { subject : 'math' } 
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }

지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다. 
과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다. 

철수쌤같은 선생님 object 자료를 집어넣으면 
그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
그리고 타입지정도 엄격하게 해보도록 합시다. 

만들함수( { subject : 'math' } )  //이 경우 'math'를 return
만들함수( { subject : ['science', 'art', 'korean'] } ) //이 경우 'korean'을 return
만들함수( { hello : 'hi' } )  //이 경우 타입에러 나면 됩니다 

*/

function 과목리턴함수(오브젝트: { subject: string | string[] }): string {
  if (typeof 오브젝트.subject === "string") {
    return 오브젝트.subject;
  } else if (Array.isArray(오브젝트.subject)) {
    return 오브젝트.subject[오브젝트.subject.length - 1];
  } else {
    return "없음";
  }
}

document.write(과목리턴함수({ subject: ["science", "art"] }));

/* *tip. instanceof Array 로도 배열을 체크할 수 있는데
  isArray와 instanceof의 차이점 
  1. isArray는 ES5부터 추가됨.
  2. isArray는 iframe에서 작동하지만 instanceof는 그렇지 않음 ( multi contenxt에서는 instanceof로 체크할 수 없음)
  3. 속도의 경우에도 isArray가 조금 더 빠르다는 소문이 있음.

  isArray를 쓰자
*/

/******************************************************************
                      type alias ( 타입변수 )
******************************************************************/

// type alias : 자주 사용할 타입을 미리 선언해두고 필요할 때 가져오기
// 타입변수 명명법
// 1. 대문자로 시작 2. Type 키워드를 붙임

type AnimalType = string | number | undefined;
type AnimalType1 = { name: string; age: number };

let 동물: AnimalType;
let 동물1: AnimalType1 = { name: "coda", age: 5 };

/******************************************************************
                            readonly
******************************************************************/

// const 키워드는 재할당은 불가능한데 object타입의 경우 object 내부에서 변경되는거까진 막지못함
// 하지만 typescript를 사용하면 object 자료 수정도 막을 수 있음.

const 출생지역 = { region: "seoul" };
출생지역.region = "busan"; // busan

// object 자료수정 막기 - readonly 를 사용 ( 읽기전용 )

type GirlFriend = {
  readonly name: string;
};

const 여친: GirlFriend = {
  name: "엠버",
};

// 여친.name = '유라'    // 이 경우 readonly 였기 때문에 수정이 안됨.

// tip. 위와 같이 타입스크립트에서 발생하는 에러는 에디터 & 터미널에서만 발생하며
//      실제로 컴파일 되는 index.js를 실행시키면 에러는 발생하지 않음.

// 커스텀한 type 변수는 union type으로 합치기도 가능합니다.

type Name1 = string;
type Age1 = number;
type Persion1 = Name1 | Age1;

/******************************************************************
                            & 연산자 ( extend )
******************************************************************/

// 또한 &연산자로 object 타입을 extend(합치기) 할 수 있습니다.

type PositionX = { x: number };
type PositionY = { y: number };

type NewPosition = PositionX & PositionY; // {x : number, y : number};

let position: NewPosition = { x: 10, y: 20 }; // 이런 식으로 사용 가능

// *tip. type 변수는 재선언 불가능
// type PositionX = { x: string};

// Q1. object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?

type PositionZ = { x: string };
type NewPosition1 = PositionX & PositionZ;

//let position1 :NewPosition1 = { x: 10 };  // 이미 선언되었기 때문에 에러발생

/* Q2. 다음 조건을 만족하는 타입을 만들어봅시다. 
1. 이 타입은 object 자료형이어야합니다.
2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  
type alias로 만들어보셈  */

type Q2Type = { color?: string; size: number; readonly position: number[] };

let 테스트용변수: Q2Type = {
  size: 123,
  position: [1, 2, 3],
};

// 테스트용변수.position = [1,2,3,4]; // 이런식으로 변경 불가능 하지만 아래와 같이는 가능함..
테스트용변수.position.push(4);
// console.log(테스트용변수);

/* Q3. 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 

1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. */

type InfoType = { name: string; phoneNumber: string | number; email: string };
let 회원가입정보: InfoType = {
  name: "kim",
  phoneNumber: "010-4204-1023",
  email: "abc@naver.com",
};

/* 다음을 만족하는 type alias를 만들어보십시오.

1. 숙제3와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
3. 멋있게 숙제3에서 만들어둔  type alias를 재활용해봅시다. */

type TeenType = { teenager: boolean };
type Q4Type = InfoType & TeenType;

/******************************************************************
                            Literal Type
******************************************************************/

// Literal Type : 더 엄격한 타입 지정 가능, 원하는 문자열만 받을 수 있음

let 이름2: string; // string 타입만 가능
let 이름3: 123; // 이렇게하면 123만 들어올 수 있음

//이름3 = 456;      // 얘도 안됨
//이름3 = '123';    // 쟤도 안됨

let 접니다: "대머리" | "솔로";
접니다 = "대머리";
접니다 = "솔로";
//접니다 = '잘생김'   // 잘생김은 없기 때문에 에러발생

// 함수도 되나 테스트 해봅시다.
function 리터럴함수테스트(a: "hello"): 1 | 0 {
  a;
  return 1;
}
리터럴함수테스트("hello");

// 가위,바위,보 중 1개만 입력가능하고 return할 때 가위,바위,보만 담을 수 있는 배열을 return 해주는 함수

function 리터럴가위바위보(
  손: "가위" | "바위" | "보"
): ("가위" | "바위" | "보")[] {
  let 리턴값: ("가위" | "바위" | "보")[] = [];
  리턴값.push(손);
  return 리턴값;
}

// console.log(리터럴가위바위보('바위')[0]);

// literal 타입을 이용하면 const 변수와 유사하게 사용 가능
let 저는요: "대머리" | "솔로"; // 저는요 let변수 에는 대머리와 솔로만 할당 가능
const 저는 = "bae"; // 저는 const변수 에는 bae만 할당됨

// literal 타입의 문제점
var 자료1 = {
  name: "kim",
};

function 내함수2(a: "kim") {
  a;
}

내함수2("kim"); // 이건 괜찮음
//내함수2(자료1.name);  // 그렇다면 이건 왜 에러가 날까요?
/*자료1.name의 타입은 string입니다. 
                        그런데 내함수2의 a는 타입이 'kim'이예요 그래서 안되는겁니다. */

/* 물론 해결방법이 있습니다. as const 키워드를 사용하면 됩니다.
  as const 
  1. object value값을 그대로 리터럴 타입으로 지정해줍니다. string타입이 아닌 kim 타입으로 지정해줌
  2. object 속성들에 모두 readonly를 붙여준 효과

    var 자료2 = {
      readonly name : 'kim'
    } as const 

  as const 키워드를 사용하면 object 자료를 완전히 잠글 수 있음
*/

var 자료2 = {
  name: "kim",
} as const;

// 자료2.name = 123;   // 이렇게하면 readonly를 부여하지 않아도 as const 키워드 때문에 readonly가 부여됨
내함수2(자료2.name);

/******************************************************************
                            함수 Type alias
******************************************************************/

type 함수타입5 = (a: string) => number; // 파라미터 a는 string타입이구요 함수의 return타입은 number로 하겠습니다.
// 이 때 return 생략 가능
// 함수 type alias 부착하려면 함수표현식으로 써야함.

let 함수5: 함수타입5 = function () {
  return 10;
};

// object안에 함수 만들기
let 회원정보: 회원정보타입 = {
  name: "kim",
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {},
};
회원정보.plusOne(1);
회원정보.changeName();

/* 
Q1. 위 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오. 
- plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.
- changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다. 
- type 키워드를 쓰든 말든 알아서 합시다. 
*/
type 회원정보타입 = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

/*
Q2. 다음 함수2개를 만들어보고 타입까지 정의해보십시오.

- cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.

- removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 

- 함수에 타입지정시 type alias를 꼭 써보도록 합시다. 

*/

type CutZeroType = (a: string) => string;
type RemoveDashType = (a: string) => number | string;

let cutZero: CutZeroType = (a) => {
  if (a.substring(0, 1) == "0") {
    return a.substring(1);
  } else {
    return a;
  }
};

//console.log(cutZero('010'));

let removeDash: RemoveDashType = (a) => {
  if (a.indexOf("-") > -1) {
    return Number(a.replace(/-/gi, ""));
  } else {
    return a;
  }
};

//console.log(removeDash('010-4442-4512'));   // 숫자에서 문자로 바뀌면서 0이 날아가는거 감안해야함
//console.log(typeof removeDash('010-4442-4512'));
//console.log(typeof removeDash('01044424512'));

/*
Q3. 함수에 함수를 집어넣고 싶습니다.
숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다. 
이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면

1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다. 

이 함수는 어떻게 만들면 될까요?

둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.
*/
type 숙제3함수타입 = (
  a: string,
  func1: CutZeroType,
  func2: RemoveDashType
) => number | string;

let 만들함수: 숙제3함수타입 = (a, func1, func2) => {
  return func2(func1(a));
};

//console.log(만들함수('010-1111-2222', cutZero, removeDash));

/******************************************************************
            타입스크립트로 HTML 변경과 조작할 때 주의점
******************************************************************/

let 제목 = document.querySelector("#title");

//제목.innerHTML = '반가워요';
// ▲ HTML을 직접 조작하게 되면 에러가 발생함.
// 선택자로 선택한 요소가 없을 수도 있기 때문에 null일 수 있음

// 이런 경우 narrowing을 해주어야함
// HTML 조작시 narrowing하는 방법 5가지

// 첫번째 방법 : if문
if (제목 != null) {
  제목.innerHTML = "반가워요";
}

// 두번째 방법 : instanceof 연산자 , 가장 많이 쓸 예정
if (제목 instanceof Element) {
  제목.innerHTML = "반가워요";
}

// 세번째 방법 : as 키워드 사용하기 , 타입사기치는방법인데 좋아보이지 않지만 사용하는 곳이 따로 있음
let 제목3 = document.querySelector("#title") as Element; // 무조건 Element로 인식시킴
제목3.innerHTML = "반가워요;";

// 네번째 방법 : 오브젝트에 ? 붙이기
let 제목4 = document.querySelector("#title");
if (제목4?.innerHTML != undefined) {
  제목4.innerHTML = "반가워요";
}
// 제목에 innerHTML이 있으면 true, 없으면 undefined 뱉으셈 : optional chaining ( 2020년 이후 문법)

// #tip. 2020년 이후 문법이라고 해서 지원하지 않는 브라우저는 어떻게 하지 생각할 수 있지만
// tsconfig.js에서 target: es5로 해놔서 컴파일되는 js파일은 es5 문법 컴파일됩니다.
// 못믿겠으면 index.js파일 들어가서 확인해 보던가

// 다섯번째 방법 : tsconfig.json파일에서 strictNullChecks : false로 변경하여 자유롭게 작성하기

// =================================================================================

// 링크 변경하기
// 1. 선택자를 a태그로 확실하면 href 속성이 무조건 있으므로 에러가 안남.
let 링크2 = document.querySelector("a");
if (링크2 instanceof Element) {
  링크2.href = "https://kakao.com";
}

// 2. 만약 클래스명으로 선택하여 a태그가 아닌 요소를 가져오면 href속성이 없을 수도 있으므로
// HTMLAnchorElement인지 체크 필요함.
let 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
  링크.href = "https://kakao.com";
}

// Q1. 버튼을 누르면 이미지를 바꿔봅시다.
let 버튼 = document.querySelector("#button");
let 이미지 = document.querySelector("#image");

버튼?.addEventListener("click", () => {
  if (이미지 instanceof HTMLImageElement) {
    이미지.src = "new.jpg";
  }
});

/* Q2. 바꾸고 싶은 html 요소가 많습니다.

<a class="naver" href="naver.com">링크</a>
<a class="naver" href="naver.com">링크</a>
<a class="naver" href="naver.com">링크</a> 
3개의 링크가 있는데 이 요소들의 href 속성을 전부 https://kakao.com으로 바꾸고 싶은 겁니다.

자바스크립트 코드를 어떻게 짜야할까요? */

let a태그 = document.querySelectorAll(".naver");

// 첫번째 방법 forEach
a태그.forEach((a) => {
  if (a instanceof HTMLAnchorElement) {
    a.href = "https://kakao.com";
  }
});

// 두번째 방법 for문
for (let i = 0; i < 3; i++) {
  let a = a태그[i];
  if (a instanceof HTMLAnchorElement) {
    a.href = "https://daum.net";
  }
}

/******************************************************************
                      class도 타입지정 가능
******************************************************************/

class Person {
  name: string;
  constructor(a: string) {
    // 복제되는게 항상 object타입이므로 return 타입을 지정할 필요없음
    this.name = a;
  }

  펄슨함수(a: string): string {
    // prototype 함수도 타입지정해서 쓰셈
    return "안녕" + a;
  }
}

let 사람1 = new Person("kim");
let 사람2 = new Person("park");
//console.log(사람2);
console.log(사람1.펄슨함수("배찬22"));

/******************************************************************
                            interface
******************************************************************/

// type 키워드와 같이 interface 키워드도 비슷한 역할을 합니다.
// 일단 interface 문법은 아래와 같습니다. 작성법은 object처럼 작성하면 됨

// type Square = { color : string, width : number}
interface Square {
  color: string;
  width: number;
}

let 네모 = { color: "red", width: 100 };

// 그렇다면 interface와 type은 뭐가 다른걸까요?

interface Student {
  name: string;
}

interface Teacher {
  name: string;
  age: number;
}

let 학생: Student = { name: "kim" };
let 선생: Teacher = { name: "kim", age: 20 };

// interface의 장점 : 1. extends로 상속 가능

interface Student1 {
  name: string;
}

interface Teacher1 extends Student1 {
  age: number;
}

let 학생1: Student1 = { name: "kim" };
let 선생1: Teacher1 = { name: "kim", age: 20 };

// 그렇다면 type은 extends 안되냐 => 유사한 기능은 있습니다.
// & 기호 ( intersection type ) 을 사용

type Animal1 = { name: string };
type Cat1 = { age: number } & Animal1;

let 고영희1: Cat1 = { name: "고영희", age: 2 };

// 다른 차이점도 있습니다.
// type은 중복선언이 불가능하지만, interface는 중복선언이 가능합니다.

interface Student2 {
  name: string;
}

interface Student2 {
  score: number;
}

// interface의 장점 : 2. 중복선언이 가능하다.
// 중복선언을하면 속성이 합쳐집니다.

let 배찬: Student2 = { name: "baechan", score: 62 };

// Q. 그렇다면 엄격한 type을 냅두고 interface를 사용하는 이유는 무엇인가?
// A. 외부 라이브러리 같은 경우 interface 키워드를 많이 씁니다.
// Why. 추후에 타입을 커스텀하기 쉬워지므로 외부라이브러리에서는 interface키워드를 많이 씀
// R. 만약 내가 만든 type이 다른 사람들이 많이 커스텀 할 수 있는 type이면 interface키워드를 써보자

// interface 사용할 때 주의점으로 extends를 쓸 때는 중복속성이 발생하면 에러를 발생시킴

// interface Student3 {
//   name : string;
// }

// interface Teacher3 extends Student3 {
//   name: number;
// }

// 그렇다면 type 에서 & 쓸 때 중복속성이 발생하면 어떻게 되나요?

type Aniaml2 = { name: string };
type Cat2 = { name: number } & Aniaml2;

// let 고영희2:Cat2 = {name : 'kim'};

// 선언할 때는 에러가 나지 않습니다만 사용할 때 에러가 납니다.
// string이면서 number 타입을 가지는 속성은 없으므로 name속성은 never 타입으로 나옴

/*
(숙제1) interface 이용해서 간단하게 타입을 만들어봅시다

let 상품 = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }
이런 변수가 있는데 interface 키워드로 타입지정 이쁘게 하고 싶습니다. 어떻게 코드를 짜면 될까요?

무슨 타입일지는 알아서 기입합시다. 
*/
interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

let 상품: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

/*

(숙제2) array 안에 object 여러개가 필요합니다.

쇼핑몰 장바구니를 구현하려고 하는데 

let 장바구니 = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 
이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정해야할까요? 

오늘 배운 interface 문법을 써봅시다.

 */

interface Cart {
  product: string;
  price: number;
}

let 장바구니: Cart[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

/*
(숙제3) 위에서 만든 타입을 extends 해봅시다.

갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다. 

{ product : '청소기', price : 7000, card : false }
위에서 만든 interface를 extends 해서 이 object의 타입을 만들어보십시오.
*/

interface NewCart extends Cart {
  card: boolean;
}
type NewCart2 = Cart & { card: boolean }; // type 키워드 & 연산자를 사용하면 이렇게!

let 새로운장바구니: NewCart2[] = [
  { product: "청소기", price: 7000, card: false },
  { product: "삼다수", price: 800, card: true },
];

//console.log("새로운장바구니", 새로운장바구니);

/*
(숙제4) object 안에 함수를 2개 넣고 싶은데요 

1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다. 

2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다. 

이 object 자료를 어떻게 만들면 될까요? 

interface를 이용해서 object에 타입지정도 해보십시오. 
*/

// ***************틀린 문제니 다시 해보기

interface MathObj {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let calcurator: MathObj = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};

//console.log(" 5+2 = " + calcurator.plus(5,2) + ", 5-2 = " + calcurator.minus(5,2));

/******************************************************************
                  rest 파라미터 && destructuring문법
******************************************************************/

// 일단 javascript 문법인 rest 파라미터는 ...spread operator 문법과는 다릅니다.

// rest parameter는 파라미터를 여러개로 랜덤하게 들어올 수 있습니다.
// spread operator는 [] 배열을 벗겨주세요.

function 함수6(...a: number[]) {
  // rest parameter도 type지정 해야함
  console.log(a); // [1, 5, 3, 5, 6]
}

함수6(1, 5, 3, 5, 6); // rest파라미터로 함수를 만들어주면 전달인자(argument)의 수가 정해지지 않은 경우에도 함수를 사용할 수 있다.
// 이 경우 전달인자(argument)들을 rest parameter에 전달할 때 전부 []에 담아서 보낸다.

// 잠깐!   ...spread operator : 배열을 벗겨주세요

let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr2, ...arr];

// console.log(arr3);  // [4, 5, 1, 2, 3]

// destructuring 문법

let arr4 = ["안녕", 100]; // 배열 안에 있는 데이터를 변수로 빼고 싶으면
let [변수1, 변수2] = ["안녕", 100]; // 생김새를 맞춰주고 변수로 쉽게 저장됨.
//console.log(변수1, 변수2);

// object 자료도 가능합니다.

//let { student2 , age2 } = {student2 : true, age2 : 20};     // 이런식으로 1대1 매칭하면 됩니다.

// destructuring 문법을 이용하면 아래와 같이 코딩할 수 있습니다.
// 오브젝트 타입 안에있는 속성을 변수에 그대로 담아 사용할 수 있습니다.

type 오브젝트2타입 = { student2: boolean; age2: number };

let 오브젝트2: 오브젝트2타입 = { student2: true, age2: 20 };

let 함수7 = ({ student2, age2 }: 오브젝트2타입) => {
  console.log(student2, age2);
};

함수7(오브젝트2);

/*
(숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다. 

최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다. 

(조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.

(조건2) Math.max() 사용금지 반복문이나 쓰셈 
*/

let maxNum = (...num: number[]) => {
  let maxValue = 0;

  num.forEach((item) => {
    maxValue < item ? (maxValue = item) : null;
  });

  return maxValue;
};

//console.log(maxNum(6,3,7,2));

/*
(숙제2) 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 

함수( { user : 'kim', comment : [3,5,4], admin : false } )
어떻게 코드를 짜야할까요?

(조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.

(조건2) 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력해줘야합니다.
*/

type UserInfoType = { user: string; comment: number[]; admin: boolean };

function 함수8({ user, comment, admin }: UserInfoType): void {
  console.log(user, comment, admin);
}

함수8({ user: "kim", comment: [3, 5, 4], admin: false });

/*
(숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 

함수( [40, 'wine', false] )
어떻게 코드를 짜야할까요?

(조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.

(조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.
*/

let array2: [number, string, boolean] = [40, "wine", false];

function 함수9([a, b, c]: [number, string, boolean]): void {
  console.log(a, b, c);
}

함수9(array2);

// 아래는 코딩애플님이 작성하신 답
type 어레이10 = (number | string | boolean)[];

function 함수10([a, b, c]: 어레이10) {
  console.log(a, b, c);
}

함수10([40, "wine", false]);

/******************************************************************
                 Narrowing 할 수 있는 방법 더 알아보기
******************************************************************/

// 1. && 연산자로 null & undefined 타입 체크하기

function 함수11(a: string | undefined) {
  if (a && typeof a === "string") {
    // undefined면 if문 실행안됨. string이면 if문 실행됨.
  }
}

// 2. in 키워드로 object narrowing 가능 - 속성명 in 오브젝트자료
// 단점 : 같은 속성명을 가지는 타입이 있으면 narrowing 할 수 없음.

type Fish = { swim: string };
type Bird = { fly: string };

function 함수12(animal: Fish | Bird) {
  if ("swim" in animal) {
  }
}

// 3. instanceof 로 object narrowing 가능
// 오브젝트 instanceof 부모Class

let 날짜 = new Date();
if (날짜 instanceof Date) {
}

// 4.

// 아래의 경우 Car 타입과 Bike 타입은 in 키워드와 instance 키워드로 narrowing 할 수 없음
// 같은 속성을 가지는 타입인 경우 in키워드로 narrowing 불가
// 부모클래스가 없는 타입인 경우 instanceof로 narrowing 불가

// 애초에 비슷한 object면 하나로 만드는게 낫지 않았을까 싶지만
// 아래의 경우가 있다고 가정을 하자면
// object타입마다 literal type을 만들어두면 narrowing할 수 있음.

type Car = {
  wheel: "4개"; // 이런식으로 literal type을 만들어두면 속성과 속성값까지 맞는 타입은 단일적이므로 이렇게 narrowing가능
  color: string;
};
type Bike = {
  wheel: "2개";
  color: string;
};

function 함수13(x: Car | Bike) {
  if (x.wheel == "4개") {
    console.log("이 차는 " + x.color);
  } else {
    console.log("이 바이크는 " + x.color);
  }
}

함수13({ wheel: "4개", color: "blue" });

/******************************************************************
                            never 타입
******************************************************************/

// function의 return값의 type에는 never를 쓸 수 있는데 조건이 있음.
// 조건1. return 값이 없어야함.
// 조건2. endpoint가 없어야함.( 함수가 끝나지 않아야함 )

function 함수14(): never {
  // 조건2에 나오는 끝나지 않는 함수란?
  throw new Error(); // 예외처리 하거나

  while (true) {
    // while(true)처럼 계속 돌거나
  }

  // 근데 사실 never타입은 사용할 일이 없음. => 왜냐하면 void타입이 있거든
  // 하지만 간혹 never타입이 튀어나오는 경우가 있음

  // return undefined  : 기본적으로 함수는 default값으로 return undefined를 가지고 있지만 숨겨져 있음.
}

// never타입이 튀어나오는 경우
// 1. 뭔가 이상한 narrowing

function 함수15(parameter: string) {
  if (typeof parameter == "string") {
    console.log(parameter); // parameter는 string타입만 들어올 수 있는데 else문을 쓰면 else문은 낭비되는 코드임.
  } else {
    console.log(parameter); // 이 경우 parameter는 never타입임.
  }
}

// 2. 어떤 함수표현식은 return타입이 자동으로 never
let 함수16 = () => {
  throw new Error();
}; // 이 경우에도 return 값은 never타입이 됩니다.

// 아무튼 never타입은 쓸 일이 없지만 ( 보통 void ) 등장할 수도 있다는 것만 알아두자.

/******************************************************************
객체지향 언어에서 제공하는 접근제어자 : public, private, static, protected 
******************************************************************/

// typescript 에서도 public, private, static, protected 접근제어자를 사용 가능

// javascript 에서도 static은 사용가능.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/static

// 뭐 일단 클래스 부터 만들어 봅시다.

class User2 {
  name;

  constructor() {
    this.name = "kim";
  }
}

// 잠깐 constructor를 만드는 이유를 짚고 넘어가겠습니다.

//  위와 같이 클래스를 생성할 때 constructor 안에 name = 'kim'으로 지정할 수 있는데
class User3 {
  name = "kim";
}
// User3처럼 constructor없이 name = 'kim'으로 해도 결과는 같습니다.
// 그렇다면 constructor를 왜 사용함? => class를 function 처럼 매개변수를 줄 수 있어 constructor 메서드에서 활용할 수 있음.

class User4 {
  name;

  constructor(a: string) {
    this.name = a;
  }
}

let bch = new User4("bae");
// console.log(bch);

// 다시 본론으로 넘어와서 public 키워드부터 봅시다.
// 1. public 키워드

class User5 {
  public name = "kim"; // public 키워드 : public키워드가 붙은 속성은 어디서든지 사용 가능하며,
  // 생략 가능 ( 변수는 기본적으로 public )
  constructor(a: string) {
    this.name = a;
  }

  public 함수() {
    // 이렇게 클래스 안에 있는 메서드에도 public 붙이기 가능
    alert("배찬바보");
  }
}

let 유저5 = new User5("park");
유저5.name = "안녕"; // public 키워드인 name속성은 어디서든 접근가능
// 유저5.함수();

// 이제 private 키워드를 봐볼까요?
// 2. private 키워드

class User6 {
  name: string;
  private familyName: string = "kim"; // 여기서 familyName은 외부에서 변경되지 않았으면함. 이럴 때 private 키워드를 사용
  // private 키워드를 붙이면 class {} 안에서만 사용가능
  constructor(a: string) {
    this.name = a + this.familyName; // name을 꺼낼 때 familyName인 kim도 같이 출력해주고 싶음
  }
}

let 유저6 = new User6("민수");
//console.log(유저6.familyName); // private키워드로 familyName을 외부에서 변경하는거를 막음. 대신 갖다 쓸수 있음
//유저6.familyName = 'bae';       // 화면에서는 변경이 되지만 typescript에서는 에러를 발생시키고있음.
console.log(유저6);

// 만약 private 키워드를 가진 familyName을 변경하고 싶으면? => 변경함수를 제작한다.

class User7 {
  name: string;
  private familyName: string = "kim"; // 여기서 familyName은 외부에서 변경되지 않았으면함. 이럴 때 private 키워드를 사용

  constructor(a: string) {
    this.name = a + this.familyName; // name을 꺼낼 때 familyName인 kim도 같이 출력해주고 싶음
  }

  이름변경함수() {
    this.familyName = "park";
  }
}

let 유저7 = new User7("민수");
유저7.이름변경함수();
//console.log(유저7);   // User7 {familyName: 'park', name: '민수kim'}

// private 키워드는 데이터를 외부로부터 보호하고 싶을 때 자주 사용됨.

// 아! 그리고 public 키워드를 쓰면 this.어쩌구 생략 가능.

// class Person1 {
//   constructor(public name:string, public age:number){

//   }
// }

//let 자식 = new Person1('kim', 20);
// console.log(자식); // Person1 {name: 'kim', age: 20}

// protected 전에 extends 문법 잠깐 짚고 넘어가겠습니다.
class User8 {
  x = 10;
}

// NewUser8 클래스는 기존의 User8 클래스를 상속받아서 NewUser8 클래스는 User8의 x속성을 사용할 수 있게 됨.
class NewUser8 extends User8 {}

let 사람 = new NewUser8();
console.log(사람); // NewUser8 {x: 10}

// 3. protected 키워드
// private과 마찬가지로 class{} 안에서만 사용가능

class User9 {
  private x = 10;
  protected y = 5;

  xIsPrivate() {
    console.log(this.x);
  }
}

class NewUser9 extends User9 {
  // x = 9;  // private 키워드를 가진 변수 x를 가진 User9 클래스를 상속받은 NewUser9 클래스에서는 변수 x를 건드릴 수 없음.
  doThis() {
    this.y = 20; // 하지만 protected 키워드를 가지는 변수 y는 건드릴 수 있음.
  }
}

let 사람9 = new NewUser9();
사람9.doThis();
console.log(사람9);

// protected는 extends 된 class 에서는 사용가능하지만 자식들은 사용불가능
// private과 protected의 차이는 extends된 class에서 사용가능유무.

// 4. static 키워드
// 특징1. javascript 에서도 사용가능 ( 다른 키워드는 typescript에서만 사용가능 )

// 특징2. static 키워드를 사용하면 자식클래스에는 안물려주고 부모클래스에서만 사용함.

class User10 {
  static x = 10;
  y = 20;
}

//let 자식10 = new User10();
// console.log(자식10.x); // 이건 x를 못읽음
console.log(User10.x); // 부모클래스에선 가능.

// 특징3. (public / private /protected) + static 이 가능합니다.

class User11 {
  static x: number = 11;
  y: number = 29;
  // private static z:number = 93;
}
User11.x = 15; //  이런식으로 User11 클래스에 직접 접근해서 변수 x를 직접 바꿔줄 수 있게됨.
//let 자식11 = new User11();
console.log(User11.x); // 15

// 하지만 private 키워드를 같이 사용하면 외부에서 접근할 수 없음.
// User11.z = 83;
// console.log(User11.z);

// 실전에서 static을 사용해봅시다!
// 전문가입니다. 는 고정으로 하고 그 앞에 무슨 전문가인지는 바뀌도록 처리해줍시다.

class User12 {
  static skill = "java";
  //intro = this.skill + '전문가입니다.';   // 에러나는 이유는 User12의 자식클래스에서는
  // static 키워드의 skill을 사용할수 없으므로 this 키워드를 사용할 수 없음.
  intro = User12.skill + "전문가입니다."; //그래서 직접 수정해야함.
}

let 철수12 = new User12();
console.log(철수12);

// 그런데 여기서부터는 skill을 바꾸고 싶음
User12.skill = "python"; // default는 public 이므로 이런식으로 skill을 변경할 수 있음.
// 변경되지 않았으면 하는 변수는 private static 키워드를 주도록 합시다.

let 철수121 = new User12();
console.log(철수121);

/*
(숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.

class User {
  private static x = 10;
  public static y = 20;
}
User.addOne(3) //이렇게 하면 x가 3 더해져야함
User.addOne(4) //이렇게 하면 x가 4 더해져야함
User.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함
저렇게 User.addOne() 쓸 때마다 x가 증가하는 함수는 어떻게 만들 수 있을까요? 

그리고 x값을 콘솔창에 출력해주는 printX() 함수도 한번 만들어보십시오.

(조건) private static x = 10; 이 코드 수정금지 
*/
class User13 {
  private static x: number = 10;
  public static y: number = 20;

  static addOne(addNum: number): void {
    User13.x += addNum;
  }
  static printX(): void {
    console.log(User13.x);
  }
}
User13.addOne(3); // 이렇게 쓰려면 static 키워드를 붙여줘야함
User13.printX();

/*
(숙제3) 이런거 어떻게 만들게요 

웹 요소 애니메이팅하는거 이런 것의 기초 격인데 

let 네모 = new Square(30, 30, 'red');
네모.draw()
네모.draw()
네모.draw()
네모.draw()
이렇게 네모.draw()를 할 때마다

index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가

가로 400px 세로 400px 공간 안에 무작위로 배치되어야합니다.
*/

class Square {
  constructor(
    public width: number,
    public height: number,
    public color: string
  ) {}
  draw() {
    let a = Math.random();
    let square = `<div style="position:relative; 
      top:${a * 400}px; 
      left:${a * 400}px; 
      width:${this.width}px; 
      height : ${this.height}px; 
      background:${this.color}"></div>`;
    document.body.insertAdjacentHTML("beforeend", square);
  }
}

let 네모2 = new Square(30, 30, "red");
네모2.draw();
네모2.draw();
네모2.draw();
네모2.draw();

/* 
1. constructor를 이용해서 새로뽑는 object 들은 width, height, color를 입력할 수 있게 만들었습니다.
2. 자식들은 draw()를 쓰면 

(1) 0과 1사이의 무작위 숫자를 뽑습니다. 그걸 변수 a에 저장해둡니다.
(2) <div>를 디자인합니다. 근데 <div>박스의 폭, 높이, 색상은 constructor로 입력한 것들을 활용합니다.
(3) <div> 박스의 위치는 left, right 속성을 이용해서 0~400px 사이로 무작위로 배치합니다.
(4) insertAdjacentHTML 이런거 이용하면 원하는 곳에 html 추가가 가능합니다.

그래서 실제로 자식을 하나 뽑아서 draw() 했더니 진짜 빨간 박스 4개 나옵니다. 

다른 사이즈, 다른 색상으로도 뽑아서 draw() 이것도 가능하겠군요 */

/******************************************************************
        타입도 import export 해서 씁니다 그리고 namespace 
******************************************************************/

// 구글드라이브에 공유

/******************************************************************
              타입을 파라미터로 입력하는 Generic 함수
******************************************************************/

function 함수17(x: unknown[]) {
  return x[0];
}

let a = 함수17([4, 2]);
//console.log(a + 1);   // 누가봐도 a는 4인 number타입이지만 파라미터의 타입을
// unknown이라고 지정을 했기 때문에 에러발생

// 이런 경우 narrowing을 하거나 as 를 쓰면되는데
// 이번에는 제네릭을 써보도록 합시다!

// 함수<타입> 을 입력하여 함수 내부에서 해당 타입을 사용할 수 있도록 함 ( 확장성 있는 함수가 되었네요! )
function 함수18<MyType>(x: MyType[]): MyType {
  return x[0];
}

let a2 = 함수18<number>([4, 2]);
console.log(a2 + 1);
let b2 = 함수18<string>(["4", "2"]);

// 또한 타입은 여러개 넣을 수 있음.

// function 함수19<MyType,Mytype2>( x:MyType[] ) :MyType{
//   return x[0];
// }

// 이번엔 다른 예제를 보겠습니다.

// function 함수19<MyType>( x:MyType ){
//   return x - 1;
// }
//함수19<number>(100); // 이 경우 함수19의 return x-1 에서 에러가 납니다.
// 문제없어 보이지만 함수19<number>(100); 을 주석 처리 하였을 때 함수19를 보면
// x의 타입이 확정되지 않았기 때문에 에러가 발생합니다.
//이런 경우 narrowing을 해줘야하는데 귀찮으니까 아래의 방식인
// 함수19<MyType>에서 MyType을 제한을 두는 방식으로 해봅시다.

// 아래와 같이 제네릭에 extends로 들어올 수 있는 타입에 제한을 두는 방식을 사용합니다.

function 함수19<MyType extends number>(x: MyType) {
  return x - 1;
}
함수19<number>(100);

// 커스텀 타입으로도 타입파라미터를 제한할 수 있습니다.

interface LengthCheck {
  length: number;
}

function 함수20<MyType extends LengthCheck>(x: MyType) {
  console.log(x);
  return x.length;
}

let a3 = 함수20<string[]>(["100"]);
console.log("길이: ", a3);

// 함수 뿐만 아니라 클래스에서도 제네릭을 사용할 수 있습니다. 숙제3에서 확인!

/*
(숙제1) 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 
array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요? 
연습삼아 Generic 이런걸로 만들어봅시다. 굳이 Generic 이런게 필요는 없겠지만요 

(동작 예시)

함수<string>('hello') 이렇게 사용하면 콘솔창에 5가 나와야합니다. 
함수<string[]>( ['kim', 'park'] ) 이렇게 사용하면 콘솔창에 2가 나와야합니다. 
*/

function 제네릭숙제1<제네릭타입 extends string | string[]>(
  문자: 제네릭타입
): void {
  console.log(문자.length);
}

제네릭숙제1<string>("hello");
제네릭숙제1<string[]>(["kim", "park", "bae"]);

/*
(숙제2) Animal 이라는 타입이 있습니다.

interface Animal {
  name : string;
  age : number 
}

let data = '{"name" : "dog", "age" : 1 }'
그리고 data라는 변수도 있습니다. object처럼 생겼지만 따옴표 쳐진 JSON 자료입니다. 

data라는 JSON 자료를 object { } 자료로 변환을 해서 return 해주는 함수를 만들어보십시오.
근데 변환된 object의 타입은 Animal이 되었으면 좋겠는데 어떻게 코드를 짜면 될까요?
오늘 배운 Generic을 이용해서 구현해보도록 합시다.  

(동작 예시)
함수<Animal>(data) 이렇게 쓰면 이 자리에 { name : 'dog' , age : 1 } 
이런 object 자료가 남아야합니다. 근데 타입은 Animal임
*/

type Animal3 = {
  name: string;
  age: number;
};

let data3 = '{"name" : "dog", "age" : 1 }';

function 제네릭숙제2<Mytype>(json데이터: string): Mytype {
  return JSON.parse(json데이터);
}

let 제네릭숙제2Result = 제네릭숙제2<Animal3>(data3);
// return 타입을 지정해주어야 선언한 변수가 Animal3타입으로 나옴

/*
(숙제3) class 를 수정해봅시다.

class Person {
  name;
  constructor(a){
    this.name = a;
  }
}
let a = new Person('어쩌구');
a.name //any 타입이 되었넹 
 
지금 만든 class는 new Person('어쩌구') 라고 분명 문자를 집어넣었는데 any 타입이 name 속성에 부여됩니다.
이게 싫어서 파라미터에 string을 집어넣으면 string 타입
number를 집어넣으면 number 타입
string[]을 집어넣으면 string[] 타입이 되게 하려면 위의 코드를 어떻게 수정해야할까요? 
오늘 배운 Generic을 이용해봅시다. 
*/

class Person4<T> {
  name;
  constructor(a: T) {
    this.name = a;
  }
}
let a4 = new Person4<string>("어쩌구");
a4.name; //any 타입이 되었넹

/******************************************************************
              array 자료에 붙일 수 있는 tuple type
******************************************************************/

let 멍멍: string[] = ["dog", "cat"];
let 멍멍2: (string | boolean)[] = ["dog", true];

// 지금까지 배열에서 타입지정할 때 순서에 상관없이 타입을 지정해 왔었는데
// 보다 구체적으로 순서까지 타입지정을 하고 싶을 경우 tuple을 이용합니다.

let 멍멍3: [string, boolean] = ["dog", true]; // 이런식으로 자리별로 타입을 지정할 수 있음
let 멍멍4: [string, boolean?] = ["dog"]; // 또한 ? 을 이용하여 선택적으로 값이 있을 경우에만 타입을 지정할 수도 있음.

// let 멍멍5: [string,boolean?, number] = ['dog']; // 대신 이렇게하면 number타입은 2번째 타입인지 3번째인지 모르므로
// ?를 주는건 항상 마지막 배열에서부터 줘야함

let 멍멍6: [string, boolean?, number?] = ["dog"]; // 이렇게는 가능하다

// tuple 타입으로 rest 파라미터 받기
function 함수21(...x: [number, string]): void {
  console.log(x);
}

// 함수21의 결과나 함수22의 결과나 같게 나오지만 차이점은 rest parameter로 인한 파라미터의 개수제한의 차이정도?
function 함수22(x: number, y: string): void {
  console.log([x, y]);
}

함수21(1, "바밤바");
함수22(1, "바밤바");

// array 합칠때 spread 연산자 쓰게되면 타입지정은?

let arr5 = [1, 2, 3];
// let arr6 = [4,5,...arr5];
let arr6: [number, number, ...number[]] = [4, 5, ...arr5]; // 이런식으로 spread연산자 + 배열 조합으로 처리합니다.

/*
(숙제1) 여러분이 최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지여부를 array 자료에 담아보고 타입지정까지 해보십시오.
오늘 배운 tuple 타입으로 타입지정합시다. 
쉬워서 답은 생략합니다. 

(예시) [ '동서녹차', 4000, true ] 이런 자료 만들고 타입지정하라는 소리입니다.
*/

let 사먹은음식: [string, number, boolean] = ["라멘과카레", 13000, false];

/*
(숙제2) 이렇게 생긴 자료는 타입지정 어떻게 해야할까요?

let arr = ['동서녹차', 4000, true, false, true, true, false, true]
몇개인지는 모르겠지만 true와 false가 셋째 자료부터 잔뜩 들어올 수 있다고 합니다. 

tuple 타입과 spread 연산자를 써보도록 합시다. 
*/

let 사먹은음식2: [string, number, ...boolean[]] = [
  "동서녹차",
  4000,
  true,
  false,
  true,
  true,
  false,
  true,
];

/*
(숙제3) 함수에 타입지정을 해보도록 합시다.

function 함수(){
  
}
1. 이 함수의 첫째 파라미터는 문자,
2. 둘째 파라미터는 boolean,
3. 셋째 파라미터부터는 숫자 또는 문자가 들어와야합니다. 
그럼 함수에 파라미터를 어떻게 만들고 타입지정은 또 어떻게 해야할까요? 

오늘 배운 tuple 타입과 rest parameter를 사용해봅시다.
*/

function tuple숙제3(...rest: [string, boolean, ...(number | string)[]]) {
  console.log(rest);
}
tuple숙제3("dog", true, 3, 2);

/*
(숙제4) 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.

파라미터 중 문자만 모아서 [] 에 담아주고, 숫자만 모아서 [] 에 담아주는 함수가 필요합니다.
문자 숫자 외의 자료는 입력불가능하고 파라미터 갯수 제한은 일단 없습니다. 
함수 만들어보시고 함수의 파라미터/return 타입지정도 확실하게 해봅시다. 

(동작예시)
함수('b', 5, 6, 8, 'a') 이렇게 사용할 경우 이 자리에 [ ['b', 'a'], [5, 6, 8] ] 이 return 되어야합니다.
*/

function tuple숙제4(...rest: (string | number)[]): [string[], number[]] {
  let result: [string[], number[]] = [[], []];

  rest.forEach((item) => {
    if (typeof item == "string") {
      result[0].push(item);
    } else {
      result[1].push(item);
    }
  });

  return result;
}

console.log(tuple숙제4("b", 5, 6, 8, "a"));

/******************************************************************
        외부 파일 이용시 declare & 이상한 특징인 ambient module
******************************************************************/

// .js 파일에 있는 변수를 .ts파일에서 쓰고 싶을 때 declare 키워드를 씀

// 일반 html css js 파일에서 개발 시 <script> 태그 사용합시다!

// 위의 상황이 아닌 경우 다른 js파일에 있는 변수를 사용하고 싶은 경우
// declare 키워드로 정의합니다.
// declare : 어디선가 이 변수가 선언되어 있으니 아무튼 가져와서 쓰겠습니다.

// declard 키워드가 붙은 코드들은 컴파일되는 js파일에는 변환되지 않습니다.

// declare let dataA:number;
// console.log("sdfsfd",dataA);

// 특히 .js파일로 만든 라이브러리를 사용할 때 변수,함수들을 declare로 재정의하기도함.

// ts파일 -> ts파일로 변수를 가져다 쓰고싶으면 import export 문법씁시다.

// import {a5} from './data';
// console.log(a5);

// 사실 더 간단한 방법이 있습니다.
// typescript는 이상한 특징이 있는데 모든 ts파일은 ambient module(글로벌 모듈)

//console.log(a5);

/*
님들이 코드를 짜다보면 외부 자바스크립트 파일을 이용하는 경우가 있을 겁니다.
import 문법으로 가져다가 쓰면 되는데
근데 안타깝게도 그 파일이 Typescript로 작성된게 아니라 JavaScript 로 작성된 파일이면
무수한 에러가 여러분들을 기다리고 있습니다. 
당연히 타입지정이 안되어있으니까요. 
 
예를 들어서 data.js 라는 파일이 있다고 칩시다.
그리고 index.ts 파일에서 저기 있던 a라는 변수를 쓰고싶으면 어떻게 합니까.

(data.js)

var a = 10;
var b = {name :'kim'};


(index.ts)

console.log(a + 1);
 
 
간단한 html css js 개발시엔 index.html에 저 파일 두개를 첨부하면 됩니다. 
(index.html)

<script src="data.js"></script>
<script src="index.js"></script>  //index.ts에서 변환된 js 파일
이게 원래 프론트엔드에서 import하는 방법입니다. 
아무튼 콘솔창에 11 잘 나옵니다. 
근데 타입스크립트 파일에선 a가 정의가 안되었다고 에러가 나는군요.
 
 
왜냐면 저거 <script> 태그로 자바스크립트 파일 2개를 연결해서 쓰는건 html 입장이고
ts 입장에서는 a라는 변수를 import 해온 적이 없기 때문에 에러가 나는 것입니다.
컴파일러가 징징대는걸 제압해봅시다. 
 
 
 
 
 
 
declare 키워드로 재정의하기 
 
declare 쓰면 이미 정의된 변수나 함수를 재정의할 수 있습니다.
물론 타입도 포함해서 재정의가 가능합니다. 
 
 
(data.js)

var a = 10;
var b = {name :'kim'};
(index.ts)

declare let a :number;
console.log(a + 1);

declare 우측에 let a 같은 변수 정의 집어넣으면 됩니다.
"a 라는 변수를 이 파일에서 잠깐 정의해주세요" 라는 뜻입니다. 
"a 라는 변수는 분명 어딘가에 있긴 하니까 그만 징징대세요" 라는 뜻이 더 맞습니다. 
그래서 js파일 변수를 가져다 쓰는데 '타입에러나 변수없다는 에러'를 방지하고 싶으면 
징징대는걸 막을 수 있는 공갈젖꼭지 declare 키워드를 씁시다. 
 
(특징) declare 이게 붙은 코드들은 js로 변환되지 않습니다.
그냥 컴파일러에게 힌트를 주는 역할의 코드라서 그렇습니다. 
 
 
 
 
그래서 자바스크립트로만 작성된 외부 라이브러리들을 쓸 때도 나름 유용합니다.
타입스크립트 버전이 없다면 직접 declare로 타입작성하면 됩니다. 
ts 파일들은 변수만들 때 타입까먹어도 자동으로 타입지정이 되어있으니 굳이 쓸 이유는 없습니다
 
근데 여러분이 tsconfig.json 안에 allowJs 옵션을 true로 켜두면
js파일도 타입지정이 알아서 implicit 하게 됩니다. 
리액트 같은 프로젝트에서 유용 
 
 
 
 
Q. 그럼 .ts 파일에 있던 변수를 .ts 파일에서 쓰고 싶어도 declare 필요함?
A. ts 파일은 그냥 import export 문법을 쓰면 되는 것이지 뭐하러 고민하고 계십니까


 
TS의 이상한 특징 : Ambient Module 
 
타입스크립트가 제공하는 이상한 기능이 있습니다.
바로 import export 없이도 타입들을 다른 파일에서 가져다쓸 수 있다는 점인데 
그니까 a.ts 에 있던 변수나 타입정의를 b.ts 에서도 아무런 설정없이 그냥 가져다쓸 수 있습니다. 
 
(data.ts)

type Age = number;
let 나이 :Age = 20;

(index.ts)

console.log(나이 + 1) //가능
let 철수 :Age = 30; //가능

지금 같은 폴더에 아무데나 data.ts 만들고 타입, 변수 이런거 넣어보십시오.
그럼 index.ts에서도 data.ts에 있던 변수와 타입을 자유롭게 사용가능합니다.
import export 그런거 안해도 같은 폴더에 있는 ts 파일은 그냥 사용가능합니다. 
왜냐면 그냥 ts 파일에 대충 입력한 변수와 타입들은 전부 global 변수 취급을 받습니다. 
전역으로 쓸 수 있는 파일을 전문용어로 ambient module 이라고 칭합니다.
(타입스크립트에서 let name 이라는 이름의 변수생성이 안되는 이유를 여기서 찾을 수 있습니다. 어디선가 기본으로 let name 이미 쓰고있음)
 
 
 
반면에 import 혹은 export 키워드가 들어간 ts 파일은 다릅니다. 
import / export 키워드가 적어도 하나 있으면 그 파일은 로컬 모듈이 되고
거기 있는 모든 변수는 export를 해줘야 다른 파일에서 사용가능합니다. 
그래서 타입스크립트 파일이 다른 파일에 영향끼치는걸 막고싶으면 export 키워드를 강제로 추가하면 됩니다. 
 
(data.ts)
export {};
type Age = number;
let 나이 :Age = 20;

(index.ts)

console.log(나이 + 1) //불가능
let 철수 :Age = 30; //불가능
이러면 data.ts에 있던 파일은 더 이상 글로벌 모듈 (ambient module)이 되지 않으며 
다른 파일에서 함부로 가져다쓸 수 없습니다. import export 써야함 
 
대체 왜 이딴식인가 생각을 해보면 옛날 js 파일과의 호환성 때문에 그런 것 같은데 약간 불편할 때가 많습니다. 
타입스크립트 불편한 점 개선한 타입스크립투 나와야함 
 
declare global
 
ts 파일에 import export 문법이 없으면 글로벌 모듈이 됩니다.
ts 파일에 import export 문법이 있으면 로컬 모듈입니다. 
근데 로컬 모듈에서 갑자기 전역으로 변수를 만들고 싶을 때가 있습니다.
실은 별로 없는데 아무튼 있다고 가정합시다. 
따로 설정 없어도 프로젝트 내의 모든 파일에서 이용가능한 타입을 만들고 싶으면 이걸 붙여서 만드시면 됩니다. 
 
(data.ts)

let a = 10;
declare global {
  type Dog = string;
}
export{}

이런 코드를 로컬 파일에 적어두시면 모든 파일에서 Dog 타입을 이용가능합니다.
이것도 일종의 namespace 문법인데 여기다 적은건 global 이라는 이름의 namespace에 추가된다고 보시면 됩니다. 
그리고 global namespace는 모든 파일에서 기본적으로 이용이 가능하고요. 
아무튼 로컬 모듈에서 전역변수 만들고 싶을 때 씁시다.

*/

/******************************************************************
                            .d.ts파일
******************************************************************/

// .d.ts파일이란? 타입정의 보관용 파일입니다. ( d는 declare )
// .d.ts파일은 다른 ts파일에서 import해서 사용할 수 있음
// 모든 타입을 정리해놓은 레퍼런스용 .d.ts파일을 생성하기

// tsconfig.json 파일에서 아래 속성을 추가합니다.
// "declaration": true, //컴파일시 .d.ts 파일도 자동으로 함께생성 (현재쓰는 모든 타입이 정의된 파일)

// .d.ts파일은 global 모듈이 아니라 항상 local 모듈이라 항상 export해서 써야합니다.
// 물론 .d.ts파일을 글로벌 모듈로 만들수도있습니다.
// tsconfig.json파일에서 아래 속성을 추가합니다.
// "typeRoots" : ["./폴더명"]
// 해당 경로 안에 common폴더를 하나 더 만들어서 common폴더 안에 있는 ts파일들의 타입들은 글로벌 모듈로 인식합니다.
// 만약 "typeRoots" : ["./types"]로 선언하면
// /types/common/ ~ : common폴더를 임의로 만들어서 그 안에 ts파일을 넣어주면 됩니다.

// 외부라이브러리 쓸 때 타입정의가 안되어있으면 사용할 수가 없는데 이런 경우 타입정의를 하나씩 해주어야함
// 근데 귀찮으니까 우리는 Definitely Typed github 리포지토리 에서 검색해서 추가해도됩니다.
// 아니면 Typescript 공홈 가서 검색해서 추가해도됩니다.
// 참고로 jquery는 npm i @types/jquery 로 터미널에서 명령어 하시면 되실거예요
// 대신 tsconfig.json파일에서 typeRoots 따로 설정해놓으면 자동으로 @types 포함 안해주니까 typeRoots는 꺼두도록합니다.

/******************************************************************
                          implements 키워드
******************************************************************/

/* 
interface는 object타입지정할 때 쓴다고 했는데 사실은 용도가 하나 더 있습니다.
class 타입을 확인하고 싶을 때에도 interface 문법을 사용할 수 있습니다.
대신 implements 키워드도 필요함 */

class Car2 {
  model: string;
  price: number = 1000;
  constructor(a: string) {
    this.model = a;
  }
}
let 붕붕이2 = new Car2("morning");

// class Car2로부터 만들어지는 object들은 model과 price 속성을 가지는데
// model, price 속성을 가지고 있는지 타입으로 확인하고 싶으면 interface + implements로 확인합니다.

interface CarType3 {
  model: string;
  price: number;
  // score:number
}

class Car3 implements CarType3 {
  model: string;
  price: number = 1000;
  constructor(a: string) {
    this.model = a;
  }
}
let 붕붕이3 = new Car3("morning");

/* class 이름 우측에 implements를 쓰고 interface 이름을 쓰면 Car3가 CarType3에 있는 속성을 다 가지고 있는지
확인가능합니다. 혹여나 빠진 속성이 있으면 에러로 알려줍니다.

'Car3' 클래스가 'CarType3' 인터페이스를 잘못 구현합니다.
'score' 속성이 'Car3' 형식에 없지만 'CarType3' 형식에서 필수입니다.ts(2420) 

implements 는 interface 에 들어있는 속성을 가지고 있는지 확인만하라는 뜻입니다.
class에다가 타입을 할당하고 변형시키는 키워드는 아닙니다.

interface CarType {
  model : string,
  tax : (price :number) => number;
}

class Car implements CarType {
  model;   ///any 타입됨
  tax (a){   ///a 파라미터는 any 타입됨 
    return a * 0.1
  }
}

지금 CarType을 implements 했냐고 써봤습니다.
근데 CarType에 있던 model : string 이런게 반영되는건 아닙니다. class 안에서의 model은 any 타입임
class 함수도 마찬가지로 함수에 있던 number 타입이 전혀 반영되지 않습니다. 
결론은 implements는 class의 타입을 체크하는 용도지 할당하는게 아님을 명심합시다. 

*/

/******************************************************************
                       object index signatures
******************************************************************/

/*
object 자료에 타입을 미리 만들어주고 싶은데
1. object 자료에 어떤 속성들이 들어올 수 있는지 아직 모르는 경우
2. 타입지정할 속성이 너무 많은 경우
index signatures 를 사용하면 편리합니다.


*/

interface StringOnly {
  name: string;
  age: string;
  location: string;
}

let user14: StringOnly = {
  name: "kim",
  age: "22",
  location: "seoul",
};

// 위와 같이 하나하나 다 타입을 지정하기 귀찮으면 모든 속성을 string 이라고 한번에 타입지정 가능합니다.

interface StringOnly2 {
  [key: string]: string; // index signature 문법
  //,[key :string] :string | number     // 이런식으로도 가능
  // age: number                        // 아니면 몇개의 속성만 따로 타입을 줄 수도 있습니다.
}

let user15: StringOnly2 = {
  name: "kim",
  age: "22",
  location: "seoul",
};

// 속성명이 숫자인 경우?
interface StringOnly3 {
  [key: number]: string; // key:string이여도 에러는 안남.
  //왜냐하면 0,1,2같은 숫자들은 결국 문자화 되기 때문
}

let user16: StringOnly3 = {
  0: "kim",
  1: "22",
  2: "seoul",
};

//console.log(user16[0]);
// user16이라는 object 안에 속성명을 숫자로 쓰면 배열처럼 사용할 수도 있으며 불러올 때도 마찬가지

// 만약 object 안에 object 있고 그러면 어케할까요?

let css = {
  "font-size": {
    "font-size": {
      "font-size": 14,
    },
  },
};

// 그냥 쓰셔도 css변수에 마우스 올리면 number로 잘 잡혀있습니다.
// 아니면은 이렇게 interface를 생성하고 css:MyCssType으로 타입을 줘도되구요

interface MyCssType {
  "font-size": {
    "font-size": {
      "font-size": 14;
    };
  };
}

// 위와 같이 font-size를 모두 작성할 수 도 있지만 반복적으로 사용되는 경우

interface MyCssType2 {
  "font-size": MyCssType2 | number; // number를 안써주면 아래의 css2 변수에서 에러가 나므로 union 연산자로 number추가
}

let css2: MyCssType2 = {
  "font-size": {
    "font-size": {
      "font-size": 14,
    },
  },
};

/******************************************************************
                       object 타입 변환기
******************************************************************/

let obj = { name: "kim", age: 20 };
console.log(Object.keys(obj));
// Object.keys(객체) : object타입 객체의 key들을 배열에 담음 ( 자바스크립트 문법 )

interface Person5 {
  age: number;
  name: string;
}

type Person5Keys = keyof Person5; // 'age' | 'name'
// keyof 키워드 : 선택한 객체의 key값 리터럴타입들의 유니온타입으로 가져옵니다.

let temp: Person5Keys = "age";
let temp2: Person5Keys = "name";

console.log(temp, temp2);

// 지금보면 잘안쓰일거같긴한데 다른 응용법이 있습니다.

interface Person6 {
  [key: string]: Number; // index signature 되어있는 경우
}

type Person6keys = keyof Person6; // keyof를 사용하면 string | number 타입으로 가져옴
// 근데 string만 가져와야되는데 number는 무엇이냐
// index signature의 타입은 string 혹은 number입니다.
// 애초에 [] 배열이므로 반드시 string 이 아니더라도 number로 들어갈 수 있음.
// 뭔가 타입스크립트의 사용의의에 위반되는게 아닌가 싶습니다 (개인적으로)

// 이번에는 타입 변환기를 만들어보겠습니다.

type Car4 = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};

// Car4의 boolean 타입을 String으로 변환하고 싶습니다.

type TypeChanger<MyType> = {
  [key in keyof MyType]: string;
  // 여기서 keyof MyType은 'color','model','price'로 리터럴타입들은 유니온함.
  // 그 후에 in 키워드로 'color', 'model', 'price'를 하나씩 꺼내서 string타입으로 지정
};

type 새로운타입 = TypeChanger<Car4>; // 모든 key의 타입이 string으로 변환됨.

// 위의 새로운타입라는 타입변수에서 price도 string이 되는데 string | number로 바꿔봅시다.

// 근데 위의 문제를 해결하려면 아래의 문법을 알아야함

// 타입변수에 제네릭으로 확장성있는 타입을 지정해주도록 해봅시다.

type Age<T> = T; // 제네릭은 function, class 뿐만아니라 타입변수에서도 사용가능
let 배찬나이: Age<String>;

// 제네릭으로 파라미터에 string을 집어넣으면 string을 넣고
// string 외의 타입이면 unknown을 넣어주도록 하겠습니다.

// type에서 if문은 삼항연산자로 하시면 됩니다.
// 삼항연산자의 조건식은 extends로 쓰시면 됩니다.

type Age2<T> = T extends string ? string : unknown;
let 배찬나이2: Age2<string>; // 대소문자 조심 String은 안됩니다!
let 배찬나이언노운: Age2<number>;

/* Q. 파라미터로 array타입을 입력하면 array 첫 자료의 타입을 남기고
array 자료가 아니라 다른걸 입력하면 any 타입을 남겨주는 타입은 어떻게 만들면 될까요?
*/

// type FirstItem<T> = T[0]; // 이렇게 쓰면 T의 타입이 확정이 안되었기때문에 에러남
type FirstItem<T> = T extends any[] ? T[0] : any;
// 파라미터로 오는 배열안의 타입을 확정지을 수 없으므로 any[]로 체크하여 배열인지 판단

let temp3: FirstItem<[string, number, boolean]>;

/*
(숙제1) 다음 타입을 변환기를 돌려보십시오.

type Bus = {
  color : string,
  model : boolean,
  price : number
}
동료가 잘못 만든 타입입니다.
color, model, price 속성은 전부 string 또는 number 타입이어야합니다.
1. 변환기 하나 만드시고
2. 기존 Bus 타입을 변환기 돌려서 위 조건을 충족하는 새로운 타입을 하나 만들어보십시오.
*/
type Bus = {
  color: string;
  model: boolean;
  price: number;
};

type BusTypeChanger<BusType> = {
  [key in keyof BusType]: string | number;
};

type 새로운버스타입 = BusTypeChanger<Bus>;

/*
(숙제2) 이런 변환기는 어떻게 만들어야할까요?
object안에 들어있는 모든 속성을
string, number 이렇게 고정된 타입으로 변환해주는게 아니라
내가 원하는 타입을 입력하면 그걸로 변환해주는 범용성 좋은 변환기를 만들어보십시오.
*/

type MyType3 = {
  color: string;
  model: boolean;
  price: number;
};

type FreeChanger<MyType, T> = {
  [key in keyof MyType]: T;
};

type 원하는타입으로변환 = FreeChanger<MyType3, boolean>;

// 제네릭으로 파라미터를 하나 더 줘서 타입변수 선언시 타입도 지정해준다!

/******************************************************************
                            infer 키워드
******************************************************************/

// infer 키워드란? 조건문에서 사용가능하며, 타입을 추출함

// 1. infer키워드 예시1 : 기본적인 infer 키워드
type 사람<T> = T extends infer R ? R : unknown; // T의 타입을 뽑아서 R에 넣어줌
type 사람10 = 사람<string>;
let infer테스트: 사람<string>;

// 실용성 없어보이기 때문에 아래의 예제를 봅시다.
// 2. infer키워드 예시2 : array 내부의 타입만 뽑고 싶은 경우

//                                  ▼ string
type 타입추출<T> = T extends (infer R)[] ? R : unknown;
//                ▲ string[]
type 타입추출테스트 = 타입추출<string[]>; // 타입추출테스트은 string[]이 아닌string타입이 됩니다.

// 3. infer키워드 예시3 : 함수를 넣으면 함수의 return 타입만 뽑고 싶다.

//                                          ▼ void
type 타입추출2<T> = T extends () => infer R ? R : unknown;
//                 ▲ () => void

type 타입추출2테스트 = 타입추출2<() => void>; // 타입변수의 타입은 void가 됩니다.

// 만약 함수를 넣었을 때 함수의 return 타입을 가져오고 싶으면
// 내장타입변수 ReturnType을 씁시다.
type b = ReturnType<() => void>; // b는 void가 됨.

/*
(숙제1) 타입 파라미터로 

1. array 타입을 입력하면
2. array의 첫 자료가 string이면 string 타입을 그대로 남겨주고 
3. array의 첫 자료가 string이 아니면 unknown 을 남겨주려면 어떻게 타입을 만들어놔야할까요?

(동작예시)

let age1 :Age<[string, number]>;
let age2 :Age<[boolean, number]>; 
이러면 age1의 타입은 string, age2의 타입은 unknown이 되어야합니다. (array나 tuple이나 그게 그거임)

이걸 만족하는 type Age를 만들어봅시다.
*/

type FirstArrayType<T> = T extends [string, ...any] ? T[0] : unknown;

let arr7: FirstArrayType<[string, number]>;
let arr8: FirstArrayType<[boolean, number]>;

/*
(숙제2) 함수의 파라미터의 타입을 뽑아주는 기계를 만들어보십시오. 

타입뽑기<(x :number) => void> //이러면 number가 이 자리에 남음
타입뽑기<(x :string) => void> //이러면 string이 이 자리에 남음

아무튼 함수의 파라미터타입이 남아야합니다.
*/

type 함수파라미터타입뽑기<T> = T extends (x: infer R) => any ? R : any;

let 파라미터타입: 함수파라미터타입뽑기<(x: number) => void>;

// 참고로 함수만 들어올 수 있게 제한을 두고 싶으면
// 언제나 T라는 함수파라미터 만들때 위와 같이 extends로 제한을 두면 됩니다.

/** 
  * 에러모음
  
  * ts2339

  일반적인 객체타입이라고 규정했을때,

  function test(obj: object): void {
    const key = 'a'
    console.log(object[key]);
  }
  이런식으로 변수가 객체의 키값이 되는 경우가 있을 수 있다.
  객체의 키 값에 변수로 접근하기 위해서는 새로 인터페이스 혹은 타입을 만들고 인덱싱 방법을 지정해주어야한다

  type literalIndexing = {
    [key: string] : string
}
 https://velog.io/@zeros0623/20191004-TIL

 * ts2454
 */
