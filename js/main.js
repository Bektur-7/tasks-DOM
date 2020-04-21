//<<<<<<<<<<<<<< ИЗМЕНЯЕМ ЧЕРЕЗ JAVASCRIPT >>>>>>>>>>>>

// Выберите при помощи селекторов DOM

// 1 — все HTML-элементы strong и окрасьте их в зеленый цвет

// let elem = document.querySelectorAll('strong');
// for(let i = 0; i < elem.length; i++)
// elem[i].style.color = 'green';


//  2 — найдите все HTML-элементы em и добавьте им класс .selected

// let elem1 = document.querySelectorAll('em')
// for(let i = 0; i < elem1.length; i++)
// elem1[i].classList.add('selected')


// 3 — Найдите все элементы mark, которые находятся в div с классом row и задайте им
// класс .selected

// let marks = document.querySelectorAll('.row mark')
// for(let i = 0; i < marks.length; i++)
// marks[i].classList.add('selected')



// 4 — Найдите все гиперссылки и удалите у них подчеркивания

// let hrefelem = document.querySelectorAll('a')
// for(let i = 0; i < hrefelem.length; i++)
// hrefelem[i].style.textDecoration = 'none'


//  5 — Найдите все HTML-элементы, который содержат слово «Задания» и находятся в
// элементе с классом .container


// 6 — Переключите элементы strong с классом some в состояние без этого класса, а
// тем элементам (strong), у которых небыло этого класса — добавьте.

// let strong1 = document.querySelectorAll('strong')
// for (let i = 0; i < strong1.length; i++)
// strong1[i].classList.toggle('some')



// 7 — среди набора элементов с классом .row удалите класс у второго элемента

// let row = document.getElementsByClassName('row');
// for(let i = 0; i < row.length; i++){
//     row[1].classList.remove('row')
// }


// 8 — прочитайте CSS-свойство color у второй гиперсылки в тексте

// let col = document.querySelectorAll('a')
// let res = window.getComputedStyle(col[1])
// console.log(res.color)