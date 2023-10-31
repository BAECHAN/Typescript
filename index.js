"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var 이름 = 'kim';
var 숫자 = 123;
var 불 = true;
var 빈값 = null;
var 언디파인드 = undefined;
var 어레이 = ['kim', 'park'];
var 오브젝트 = { name: 'kim', age: 12 };
var 유니언타입 = 123;
유니언타입 = 'union';
var ㅇㅇ = 123;
ㅇㅇ = '324';
function 함수(x) {
    return x + "번";
}
함수(3);
var john = [123, true];
var nadan = { name: 'jo', age: '123' };
var User = (function () {
    function User(userNm) {
        this.userNm = userNm;
    }
    return User;
}());
var 회원들 = 'park';
var myName = '배찬';
var myAge = 29;
var myLoc = '서울시 성북구';
var myFavSong = { song: '서른즈음에', singer: '김광석' };
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
var 회원1 = 'kim';
회원1 = 123;
var 어레이1 = [1, '2', 3];
var 오브젝트1 = { a: 123 };
var 애니;
애니 = 123;
애니 = [];
var 노운 = 애니;
var 언노운;
var 연산예제;
var 나이1 = 1;
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
function 함수1(x) {
    return x + '번째';
}
함수1('3');
function 함수2(x) {
    return x * 2;
}
함수2(3);
function 함수3(x) {
    x + 1;
}
함수3(3);
function 함수4(x) {
    if (x) {
        x + 3;
    }
    else {
    }
}
함수4(3);
함수4();
var ccc = {
    name: 'aaa'
};
function sayHi(name) {
    if (name) {
        console.log('안녕하세요 ' + name);
    }
    else {
        console.log('이름이 없습니다.');
    }
}
function positionNumber(x) {
    if (typeof x == 'string') {
        return x.length;
    }
    else {
        return x.toString().length;
    }
}
positionNumber('3');
positionNumber(2);
function 결혼가능확률(월소득, 집보유여부, 매력점수) {
    var 점수 = 0;
    점수 += 월소득;
    if (집보유여부) {
        점수 += 500;
    }
    if (매력점수 === '상') {
        점수 += 100;
    }
    if (점수 >= 600) {
        return '결혼가능';
    }
}
결혼가능확률(100, true, '상');
function 내함수(x) {
    var 내배열 = [];
    if (typeof x === 'number') {
        내배열[0] = x;
    }
}
function 내함수1(x) {
    var 내배열 = [];
    내배열[0] = x;
}
내함수1('ddsfa');
function cleaning(혼합배열) {
    var 숫자배열 = [];
    혼합배열.forEach(function (element) {
        if (typeof element === 'string') {
            숫자배열.push(parseInt(element));
        }
        else {
            숫자배열.push(element);
        }
    });
    return 숫자배열;
}
function 과목리턴함수(오브젝트) {
    if (typeof 오브젝트.subject === 'string') {
        return 오브젝트.subject;
    }
    else if (Array.isArray(오브젝트.subject)) {
        return 오브젝트.subject[오브젝트.subject.length - 1];
    }
    else {
        return '없음';
    }
}
document.write(과목리턴함수({ subject: ['science', 'art'] }));
var 동물;
var 동물1 = { name: 'coda', age: 5 };
var 출생지역 = { region: 'seoul' };
출생지역.region = 'busan';
var 여친 = {
    name: '엠버'
};
var position = { x: 10, y: 20 };
var 테스트용변수 = {
    size: 123,
    position: [1, 2, 3]
};
테스트용변수.position.push(4);
var 회원가입정보 = {
    name: 'kim',
    phoneNumber: '010-4204-1023',
    email: 'abc@naver.com'
};
var 이름2;
var 이름3;
var 접니다;
접니다 = '대머리';
접니다 = '솔로';
function 리터럴함수테스트(a) {
    a;
    return 1;
}
리터럴함수테스트('hello');
function 리터럴가위바위보(손) {
    var 리턴값 = [];
    리턴값.push(손);
    return 리턴값;
}
var 저는요;
var 저는 = 'bae';
var 자료1 = {
    name: 'kim'
};
function 내함수2(a) {
    a;
}
내함수2('kim');
var 자료2 = {
    name: 'kim'
};
내함수2(자료2.name);
var 함수5 = function () {
    return 10;
};
var 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
    }
};
회원정보.plusOne(1);
회원정보.changeName();
var cutZero = function (a) {
    if (a.substring(0, 1) == '0') {
        return a.substring(1);
    }
    else {
        return a;
    }
};
var removeDash = function (a) {
    if (a.indexOf('-') > -1) {
        return Number(a.replace(/-/gi, ""));
    }
    else {
        return a;
    }
};
var 만들함수 = function (a, func1, func2) {
    return func2(func1(a));
};
var 제목 = document.querySelector("#title");
if (제목 != null) {
    제목.innerHTML = '반가워요';
}
if (제목 instanceof Element) {
    제목.innerHTML = '반가워요';
}
var 제목3 = document.querySelector("#title");
제목3.innerHTML = '반가워요;';
var 제목4 = document.querySelector("#title");
if ((제목4 === null || 제목4 === void 0 ? void 0 : 제목4.innerHTML) != undefined) {
    제목4.innerHTML = '반가워요';
}
var 링크2 = document.querySelector('a');
if (링크2 instanceof Element) {
    링크2.href = 'https://kakao.com';
}
var 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com';
}
var 버튼 = document.querySelector("#button");
var 이미지 = document.querySelector("#image");
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () {
    if (이미지 instanceof HTMLImageElement) {
        이미지.src = "new.jpg";
    }
});
var a태그 = document.querySelectorAll(".naver");
a태그.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    }
});
for (var i = 0; i < 3; i++) {
    var a_1 = a태그[i];
    if (a_1 instanceof HTMLAnchorElement) {
        a_1.href = 'https://daum.net';
    }
}
var Person = (function () {
    function Person(a) {
        this.name = a;
    }
    Person.prototype.펄슨함수 = function (a) {
        return '안녕' + a;
    };
    return Person;
}());
var 사람1 = new Person('kim');
var 사람2 = new Person('park');
console.log(사람1.펄슨함수('배찬22'));
var 네모 = { color: 'red', width: 100 };
;
;
var 학생 = { name: 'kim' };
var 선생 = { name: 'kim', age: 20 };
;
;
var 학생1 = { name: 'kim' };
var 선생1 = { name: 'kim', age: 20 };
var 고영희1 = { name: '고영희', age: 2 };
var 배찬 = { name: 'baechan', score: 62 };
;
var 상품 = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };
;
var 장바구니 = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }];
;
var 새로운장바구니 = [
    { product: '청소기', price: 7000, card: false },
    { product: '삼다수', price: 800, card: true }
];
var calcurator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    }
};
function 함수6() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
함수6(1, 5, 3, 5, 6);
var arr = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr2, true), arr, true);
var arr4 = ['안녕', 100];
var _a = ['안녕', 100], 변수1 = _a[0], 변수2 = _a[1];
var 오브젝트2 = { student2: true, age2: 20 };
var 함수7 = function (_a) {
    var student2 = _a.student2, age2 = _a.age2;
    console.log(student2, age2);
};
함수7(오브젝트2);
var maxNum = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var maxValue = 0;
    num.forEach(function (item) {
        maxValue < item ? maxValue = item : null;
    });
    return maxValue;
};
function 함수8(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
함수8({ user: 'kim', comment: [3, 5, 4], admin: false });
var array2 = [40, 'wine', false];
function 함수9(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
함수9(array2);
function 함수10(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
함수10([40, 'wine', false]);
function 함수11(a) {
    if (a && typeof a === 'string') {
    }
}
function 함수12(animal) {
    if ('swim' in animal) {
    }
}
var 날짜 = new Date();
if (날짜 instanceof Date) {
}
function 함수13(x) {
    if (x.wheel == '4개') {
        console.log('이 차는 ' + x.color);
    }
    else {
        console.log('이 바이크는 ' + x.color);
    }
}
함수13({ wheel: '4개', color: 'blue' });
function 함수14() {
    throw new Error();
    while (true) {
    }
}
function 함수15(parameter) {
    if (typeof parameter == 'string') {
        console.log(parameter);
    }
    else {
        console.log(parameter);
    }
}
var 함수16 = function () {
    throw new Error();
};
var User2 = (function () {
    function User2() {
        this.name = 'kim';
    }
    return User2;
}());
var User3 = (function () {
    function User3() {
        this.name = 'kim';
    }
    return User3;
}());
var User4 = (function () {
    function User4(a) {
        this.name = a;
    }
    return User4;
}());
var bch = new User4('bae');
var User5 = (function () {
    function User5(a) {
        this.name = 'kim';
        this.name = a;
    }
    User5.prototype.함수 = function () {
        alert("배찬바보");
    };
    return User5;
}());
var 유저5 = new User5('park');
유저5.name = '안녕';
var User6 = (function () {
    function User6(a) {
        this.familyName = 'kim';
        this.name = a + this.familyName;
    }
    return User6;
}());
var 유저6 = new User6('민수');
console.log(유저6);
var User7 = (function () {
    function User7(a) {
        this.familyName = 'kim';
        this.name = a + this.familyName;
    }
    User7.prototype.이름변경함수 = function () {
        this.familyName = 'park';
    };
    return User7;
}());
var 유저7 = new User7('민수');
유저7.이름변경함수();
var User8 = (function () {
    function User8() {
        this.x = 10;
    }
    return User8;
}());
var NewUser8 = (function (_super) {
    __extends(NewUser8, _super);
    function NewUser8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NewUser8;
}(User8));
var 사람 = new NewUser8();
console.log(사람);
var User9 = (function () {
    function User9() {
        this.x = 10;
        this.y = 5;
    }
    User9.prototype.xIsPrivate = function () {
        console.log(this.x);
    };
    return User9;
}());
var NewUser9 = (function (_super) {
    __extends(NewUser9, _super);
    function NewUser9() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewUser9.prototype.doThis = function () {
        this.y = 20;
    };
    return NewUser9;
}(User9));
var 사람9 = new NewUser9();
사람9.doThis();
console.log(사람9);
var User10 = (function () {
    function User10() {
        this.y = 20;
    }
    User10.x = 10;
    return User10;
}());
console.log(User10.x);
var User11 = (function () {
    function User11() {
        this.y = 29;
    }
    User11.x = 11;
    return User11;
}());
User11.x = 15;
console.log(User11.x);
var User12 = (function () {
    function User12() {
        this.intro = User12.skill + '전문가입니다.';
    }
    User12.skill = 'java';
    return User12;
}());
var 철수12 = new User12();
console.log(철수12);
User12.skill = 'python';
var 철수121 = new User12();
console.log(철수121);
var User13 = (function () {
    function User13() {
    }
    User13.addOne = function (addNum) {
        User13.x += addNum;
    };
    ;
    User13.printX = function () {
        console.log(User13.x);
    };
    ;
    User13.x = 10;
    User13.y = 20;
    return User13;
}());
User13.addOne(3);
User13.printX();
var Square = (function () {
    function Square(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square.prototype.draw = function () {
        var a = Math.random();
        var square = "<div style=\"position:relative; \n      top:".concat(a * 400, "px; \n      left:").concat(a * 400, "px; \n      width:").concat(this.width, "px; \n      height : ").concat(this.height, "px; \n      background:").concat(this.color, "\"></div>");
        document.body.insertAdjacentHTML('beforeend', square);
    };
    return Square;
}());
var 네모2 = new Square(30, 30, 'red');
네모2.draw();
네모2.draw();
네모2.draw();
네모2.draw();
function 함수17(x) {
    return x[0];
}
var a = 함수17([4, 2]);
function 함수18(x) {
    return x[0];
}
var a2 = 함수18([4, 2]);
console.log(a2 + 1);
var b2 = 함수18(['4', '2']);
function 함수19(x) {
    return x - 1;
}
함수19(100);
function 함수20(x) {
    console.log(x);
    return x.length;
}
var a3 = 함수20(['100']);
console.log("길이: ", a3);
function 제네릭숙제1(문자) {
    console.log(문자.length);
}
제네릭숙제1('hello');
제네릭숙제1(['kim', 'park', 'bae']);
var data3 = '{"name" : "dog", "age" : 1 }';
function 제네릭숙제2(json데이터) {
    return JSON.parse(json데이터);
}
var 제네릭숙제2Result = 제네릭숙제2(data3);
var Person4 = (function () {
    function Person4(a) {
        this.name = a;
    }
    return Person4;
}());
var a4 = new Person4('어쩌구');
a4.name;
var 멍멍 = ['dog', 'cat'];
var 멍멍2 = ['dog', true];
var 멍멍3 = ['dog', true];
var 멍멍4 = ['dog'];
var 멍멍6 = ['dog'];
function 함수21() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
function 함수22(x, y) {
    console.log([x, y]);
}
함수21(1, '바밤바');
함수22(1, '바밤바');
var arr5 = [1, 2, 3];
var arr6 = __spreadArray([4, 5], arr5, true);
var 사먹은음식 = ['라멘과카레', 13000, false];
var 사먹은음식2 = ['동서녹차', 4000, true, false, true, true, false, true];
function tuple숙제3() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    console.log(rest);
}
tuple숙제3('dog', true, 3, 2);
function tuple숙제4() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var result = [[], []];
    rest.forEach(function (item) {
        if (typeof item == 'string') {
            result[0].push(item);
        }
        else {
            result[1].push(item);
        }
    });
    return result;
}
console.log(tuple숙제4('b', 5, 6, 8, 'a'));
var Car2 = (function () {
    function Car2(a) {
        this.price = 1000;
        this.model = a;
    }
    return Car2;
}());
var 붕붕이2 = new Car2('morning');
var Car3 = (function () {
    function Car3(a) {
        this.price = 1000;
        this.model = a;
    }
    return Car3;
}());
var 붕붕이3 = new Car3('morning');
var user14 = {
    name: 'kim',
    age: '22',
    location: 'seoul'
};
var user15 = {
    name: 'kim',
    age: '22',
    location: 'seoul'
};
var user16 = {
    0: 'kim',
    1: '22',
    2: 'seoul'
};
var css = {
    'font-size': {
        'font-size': {
            'font-size': 14
        }
    }
};
;
var css2 = {
    'font-size': {
        'font-size': {
            'font-size': 14
        }
    }
};
var obj = { name: 'kim', age: 20 };
console.log(Object.keys(obj));
var temp = 'age';
var temp2 = 'name';
console.log(temp, temp2);
var 배찬나이;
var 배찬나이2;
var 배찬나이언노운;
var temp3;
var infer테스트;
var arr7;
var arr8;
var 파라미터타입;
