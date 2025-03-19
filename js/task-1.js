const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);
items.forEach(item => {
  const title = item.querySelector('.title').textContent;
  console.log(`Category: ${title}`);
  const itemItem = item.querySelectorAll('.item-item');
  console.log(`Elements: ${itemItem.length}`);
});