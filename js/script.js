document.addEventListener('DOMContentLoaded', () => {
    //Min
    //2. Variable names
    let someName;
    let $someName;
    let _someName;
    let someName1;

    // let 1;
    // let .someName;
    // let some Name;
    // let some+Name;
    // let null;

    //3. Comments
    //1
    /*2*/

    //4. Styles
    let camelCase;
    let snake_case;

    //Norm
    //1. Name 
    let userName = prompt('Як тебе можна називати?');
    alert('Привіт, ' + userName);
    //2. Age
    let birthDate = +prompt('В якому році ти народився?');
    const CURRENTYEAR = 2022;
    const userAge = 2022 - birthDate;
    alert('Тобі всього ' + userAge + ' рочків) ');
    //3. Square 
    let squareSide = +prompt('Яка довжина твого квадрата?');
    let squarePerimeter = squareSide * 4;
    alert('Периметр твого квадарта складає ' + squarePerimeter + ' см');

    //Max
    //1. Circle 
    let circleRadius = +prompt('А який ж тоді радіус твого кола?');
    let circleArea = Math.PI * (circleRadius ** 2);
    alert('Площа кола складає ' + circleArea + ' см');
    //2. Speed 
    let travelDistance = +prompt('Як далеко тобі потрібно їхати? (км)');
    let travelTime = +prompt('А скільки у нас часу на це? (годин)');
    let travelSpeed = travelDistance / travelTime;
    alert('Тобі потрібно пересуватися зі швидкістю ' + travelSpeed + ' км/год.');
    //3. Convertion 
    let dollars = +prompt('Скільки доларів ти хочеш перевести?');
    const CONVERTIONRATE = 1.01;
    let euros = dollars * CONVERTIONRATE;
    alert('І у тебе буде' + euros + ' євриків)');

});