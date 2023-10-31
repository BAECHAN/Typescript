declare let 이름: string;
declare let 숫자: number;
declare let 불: boolean;
declare let 빈값: null;
declare let 언디파인드: undefined;
declare let 어레이: string[];
declare let 오브젝트: {
    name: string;
    age: number;
};
declare let 유니언타입: string | number;
declare type Name = string | number;
declare let ㅇㅇ: Name;
declare function 함수(x: number): string;
declare type Member = [number, boolean];
declare let john: Member;
declare type Info = {
    [key: string]: string;
};
declare let nadan: Info;
declare class User {
    userNm: string;
    constructor(userNm: string);
}
declare let 회원들: string;
declare const myName: string;
declare const myAge: number;
declare const myLoc: string;
declare const myFavSong: {
    song: string;
    singer: string;
};
declare let project: {
    member: string[];
    days: number;
    started: boolean;
};
declare let 회원1: number | string;
declare let 어레이1: (number | string)[];
declare let 오브젝트1: {
    a: string | number;
};
declare let 애니: any;
declare let 노운: any;
declare let 언노운: unknown;
declare let 연산예제: string | number;
declare let 나이1: unknown;
declare let user: string;
declare let age: undefined | number;
declare let married: boolean;
declare let 철수: (string | undefined | number | boolean)[];
declare let 학교: {
    score: (number | boolean)[];
    teacher: string;
    friend: string | string[];
};
declare function 함수1(x: string): string;
declare function 함수2(x: number): number;
declare function 함수3(x: number): void;
declare function 함수4(x?: number): void;
declare type ddd = {
    name?: string;
};
declare const ccc: ddd;
declare function sayHi(name?: string): void;
declare function positionNumber(x: string | number): number;
declare function 결혼가능확률(월소득: number, 집보유여부: boolean, 매력점수: string): string | void;
declare function 내함수(x: number | string): void;
declare function 내함수1(x: number | string): void;
declare function cleaning(혼합배열: (string | number)[]): number[];
declare function 과목리턴함수(오브젝트: {
    subject: string | string[];
}): string;
declare type AnimalType = string | number | undefined;
declare type AnimalType1 = {
    name: string;
    age: number;
};
declare let 동물: AnimalType;
declare let 동물1: AnimalType1;
declare const 출생지역: {
    region: string;
};
declare type GirlFriend = {
    readonly name: string;
};
declare const 여친: GirlFriend;
declare type Name1 = string;
declare type Age1 = number;
declare type Persion1 = Name1 | Age1;
declare type PositionX = {
    x: number;
};
declare type PositionY = {
    y: number;
};
declare type NewPosition = PositionX & PositionY;
declare let position: NewPosition;
declare type PositionZ = {
    x: string;
};
declare type NewPosition1 = PositionX & PositionZ;
declare type Q2Type = {
    color?: string;
    size: number;
    readonly position: number[];
};
declare let 테스트용변수: Q2Type;
declare type InfoType = {
    name: string;
    phoneNumber: string | number;
    email: string;
};
declare let 회원가입정보: InfoType;
declare type TeenType = {
    teenager: boolean;
};
declare type Q4Type = InfoType & TeenType;
declare let 이름2: string;
declare let 이름3: 123;
declare let 접니다: '대머리' | '솔로';
declare function 리터럴함수테스트(a: 'hello'): 1 | 0;
declare function 리터럴가위바위보(손: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[];
declare let 저는요: '대머리' | '솔로';
declare const 저는 = "bae";
declare var 자료1: {
    name: string;
};
declare function 내함수2(a: 'kim'): void;
declare var 자료2: {
    readonly name: "kim";
};
declare type 함수타입5 = (a: string) => number;
declare let 함수5: 함수타입5;
declare let 회원정보: 회원정보타입;
declare type 회원정보타입 = {
    name: string;
    age: number;
    plusOne: (x: number) => number;
    changeName: () => void;
};
declare type CutZeroType = (a: string) => string;
declare type RemoveDashType = (a: string) => number | string;
declare let cutZero: CutZeroType;
declare let removeDash: RemoveDashType;
declare type 숙제3함수타입 = (a: string, func1: CutZeroType, func2: RemoveDashType) => number | string;
declare let 만들함수: 숙제3함수타입;
declare let 제목: Element | null;
declare let 제목3: Element;
declare let 제목4: Element | null;
declare let 링크2: HTMLAnchorElement | null;
declare let 링크: Element | null;
declare let 버튼: Element | null;
declare let 이미지: Element | null;
declare let a태그: NodeListOf<Element>;
declare class Person {
    name: string;
    constructor(a: string);
    펄슨함수(a: string): string;
}
declare let 사람1: Person;
declare let 사람2: Person;
interface Square {
    color: string;
    width: number;
}
declare let 네모: {
    color: string;
    width: number;
};
interface Student {
    name: string;
}
interface Teacher {
    name: string;
    age: number;
}
declare let 학생: Student;
declare let 선생: Teacher;
interface Student1 {
    name: string;
}
interface Teacher1 extends Student1 {
    age: number;
}
declare let 학생1: Student1;
declare let 선생1: Teacher1;
declare type Animal1 = {
    name: string;
};
declare type Cat1 = {
    age: number;
} & Animal1;
declare let 고영희1: Cat1;
interface Student2 {
    name: string;
}
interface Student2 {
    score: number;
}
declare let 배찬: Student2;
declare type Aniaml2 = {
    name: string;
};
declare type Cat2 = {
    name: number;
} & Aniaml2;
interface Product {
    brand: string;
    serialNumber: number;
    model: string[];
}
declare let 상품: Product;
interface Cart {
    product: string;
    price: number;
}
declare let 장바구니: Cart[];
interface NewCart extends Cart {
    card: boolean;
}
declare type NewCart2 = Cart & {
    card: boolean;
};
declare let 새로운장바구니: NewCart2[];
interface MathObj {
    plus: (a: number, b: number) => number;
    minus: (a: number, b: number) => number;
}
declare let calcurator: MathObj;
declare function 함수6(...a: number[]): void;
declare let arr: number[];
declare let arr2: number[];
declare let arr3: number[];
declare let arr4: (string | number)[];
declare let 변수1: string, 변수2: number;
declare type 오브젝트2타입 = {
    student2: boolean;
    age2: number;
};
declare let 오브젝트2: 오브젝트2타입;
declare let 함수7: ({ student2, age2 }: 오브젝트2타입) => void;
declare let maxNum: (...num: number[]) => number;
declare type UserInfoType = {
    user: string;
    comment: number[];
    admin: boolean;
};
declare function 함수8({ user, comment, admin }: UserInfoType): void;
declare let array2: [number, string, boolean];
declare function 함수9([a, b, c]: [number, string, boolean]): void;
declare type 어레이10 = (number | string | boolean)[];
declare function 함수10([a, b, c]: 어레이10): void;
declare function 함수11(a: string | undefined): void;
declare type Fish = {
    swim: string;
};
declare type Bird = {
    fly: string;
};
declare function 함수12(animal: Fish | Bird): void;
declare let 날짜: Date;
declare type Car = {
    wheel: '4개';
    color: string;
};
declare type Bike = {
    wheel: '2개';
    color: string;
};
declare function 함수13(x: Car | Bike): void;
declare function 함수14(): never;
declare function 함수15(parameter: string): void;
declare let 함수16: () => never;
declare class User2 {
    name: string;
    constructor();
}
declare class User3 {
    name: string;
}
declare class User4 {
    name: string;
    constructor(a: string);
}
declare let bch: User4;
declare class User5 {
    name: string;
    constructor(a: string);
    함수(): void;
}
declare let 유저5: User5;
declare class User6 {
    name: string;
    private familyName;
    constructor(a: string);
}
declare let 유저6: User6;
declare class User7 {
    name: string;
    private familyName;
    constructor(a: string);
    이름변경함수(): void;
}
declare let 유저7: User7;
declare class User8 {
    x: number;
}
declare class NewUser8 extends User8 {
}
declare let 사람: NewUser8;
declare class User9 {
    private x;
    protected y: number;
    xIsPrivate(): void;
}
declare class NewUser9 extends User9 {
    doThis(): void;
}
declare let 사람9: NewUser9;
declare class User10 {
    static x: number;
    y: number;
}
declare class User11 {
    static x: number;
    y: number;
}
declare class User12 {
    static skill: string;
    intro: string;
}
declare let 철수12: User12;
declare let 철수121: User12;
declare class User13 {
    private static x;
    static y: number;
    static addOne(addNum: number): void;
    static printX(): void;
}
declare class Square {
    width: number;
    height: number;
    color: string;
    constructor(width: number, height: number, color: string);
    draw(): void;
}
declare let 네모2: Square;
declare function 함수17(x: unknown[]): unknown;
declare let a: unknown;
declare function 함수18<MyType>(x: MyType[]): MyType;
declare let a2: number;
declare let b2: string;
declare function 함수19<MyType extends number>(x: MyType): number;
interface LengthCheck {
    length: number;
}
declare function 함수20<MyType extends LengthCheck>(x: MyType): number;
declare let a3: number;
declare function 제네릭숙제1<제네릭타입 extends string | string[]>(문자: 제네릭타입): void;
declare type Animal3 = {
    name: string;
    age: number;
};
declare let data3: string;
declare function 제네릭숙제2<Mytype>(json데이터: string): Mytype;
declare let 제네릭숙제2Result: Animal3;
declare class Person4<T> {
    name: T;
    constructor(a: T);
}
declare let a4: Person4<string>;
declare let 멍멍: string[];
declare let 멍멍2: (string | boolean)[];
declare let 멍멍3: [string, boolean];
declare let 멍멍4: [string, boolean?];
declare let 멍멍6: [string, boolean?, number?];
declare function 함수21(...x: [number, string]): void;
declare function 함수22(x: number, y: string): void;
declare let arr5: number[];
declare let arr6: [number, number, ...number[]];
declare let 사먹은음식: [string, number, boolean];
declare let 사먹은음식2: [string, number, ...boolean[]];
declare function tuple숙제3(...rest: [string, boolean, ...(number | string)[]]): void;
declare function tuple숙제4(...rest: (string | number)[]): [string[], number[]];
declare class Car2 {
    model: string;
    price: number;
    constructor(a: string);
}
declare let 붕붕이2: Car2;
interface CarType3 {
    model: string;
    price: number;
}
declare class Car3 implements CarType3 {
    model: string;
    price: number;
    constructor(a: string);
}
declare let 붕붕이3: Car3;
interface StringOnly {
    name: string;
    age: string;
    location: string;
}
declare let user14: StringOnly;
interface StringOnly2 {
    [key: string]: string;
}
declare let user15: StringOnly2;
interface StringOnly3 {
    [key: number]: string;
}
declare let user16: StringOnly3;
declare let css: {
    'font-size': {
        'font-size': {
            'font-size': number;
        };
    };
};
interface MyCssType {
    'font-size': {
        'font-size': {
            'font-size': 14;
        };
    };
}
interface MyCssType2 {
    'font-size': MyCssType2 | number;
}
declare let css2: MyCssType2;
declare let obj: {
    name: string;
    age: number;
};
interface Person5 {
    age: number;
    name: string;
}
declare type Person5Keys = keyof Person5;
declare let temp: Person5Keys;
declare let temp2: Person5Keys;
interface Person6 {
    [key: string]: Number;
}
declare type Person6keys = keyof Person6;
declare type Car4 = {
    color: boolean;
    model: boolean;
    price: boolean | number;
};
declare type TypeChanger<MyType> = {
    [key in keyof MyType]: string;
};
declare type 새로운타입 = TypeChanger<Car4>;
declare type Age<T> = T;
declare let 배찬나이: Age<String>;
declare type Age2<T> = T extends string ? string : unknown;
declare let 배찬나이2: Age2<string>;
declare let 배찬나이언노운: Age2<number>;
declare type FirstItem<T> = T extends any[] ? T[0] : any;
declare let temp3: FirstItem<[string, number, boolean]>;
declare type Bus = {
    color: string;
    model: boolean;
    price: number;
};
declare type BusTypeChanger<BusType> = {
    [key in keyof BusType]: string | number;
};
declare type 새로운버스타입 = BusTypeChanger<Bus>;
declare type MyType3 = {
    color: string;
    model: boolean;
    price: number;
};
declare type FreeChanger<MyType, T> = {
    [key in keyof MyType]: T;
};
declare type 원하는타입으로변환 = FreeChanger<MyType3, boolean>;
declare type 사람<T> = T extends infer R ? R : unknown;
declare type 사람10 = 사람<string>;
declare let infer테스트: 사람<string>;
declare type 타입추출<T> = T extends (infer R)[] ? R : unknown;
declare type 타입추출테스트 = 타입추출<string[]>;
declare type 타입추출2<T> = T extends (() => infer R) ? R : unknown;
declare type 타입추출2테스트 = 타입추출2<() => void>;
declare type b = ReturnType<() => void>;
declare type FirstArrayType<T> = T extends [string, ...any] ? T[0] : unknown;
declare let arr7: FirstArrayType<[string, number]>;
declare let arr8: FirstArrayType<[boolean, number]>;
declare type 함수파라미터타입뽑기<T> = T extends ((x: infer R) => any) ? R : any;
declare let 파라미터타입: 함수파라미터타입뽑기<(x: number) => void>;
