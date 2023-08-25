//your code here!

const itemList=document.getElementById('infi-list');
function addItem() {
    const newItem = document.createElement("li");
    newItem.textContent = "Item " + (itemList.children.length + 1);
    itemList.appendChild(newItem);
  }
window.addEventListener("scroll", function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      addItem();
      addItem();
    }
  });

