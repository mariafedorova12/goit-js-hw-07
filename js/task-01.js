'use strict';

// const listEl = document.querySelectorAll('#categories>li');
// console.log(`В списке ${listEl.length} категории`);

// const totalCountCategories = listEl;
// const ArrayCategories = [...totalCountCategories];

// ArrayCategories.map(category => {
//     console.log(`Категория: ${category.firstElementChild.textContent}`);
//     console.log(`Количество елементов: ${category.lastElementChild.children.length}`);
// })

const categoriesChildrenRef = document.querySelectorAll('#categories li.item');
console.log(`В списке ${categoriesChildrenRef.length} категории.`);


const categoriesOfElements = array => {
    array.forEach((element) => console.log(`Категория:` + element.firstElementChild.textContent + `\nКоличество элементов:` + element.lastElementChild.children.length));
}

categoriesOfElements(categoriesChildrenRef);