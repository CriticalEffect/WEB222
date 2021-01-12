//Create Item Card
function renderItems(items) {
  const itemListDOM = document.getElementById('item-list');
  itemListDOM.innerHTML = '';
  items.forEach(function(item) {
    const liDOM = document.createElement('li');
    liDOM.setAttribute('class', 'card');
    liDOM.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.name}">
      <div class="container">
        <span id='i-name'><b>${item.name}</b></span>
        <div>
          <span id='i-price'>$${(item.price / 100).toFixed(2)} CAD</span>
        </div>
          <p>${item.description}</p>
      </div>
    `;
    itemListDOM.appendChild(liDOM);
  });
};

function filterItems(items, category) {
  return items.filter(function(item) { return item.category === category});
};

function handleNavbarClick() {
  const allButton = document.getElementById('all');
  const switchesButton = document.getElementById('mswitch');
  const accessoriesDOM = document.getElementById('accessories');

  allButton.addEventListener('click', function() {
    renderItems(window.pData);
  })

  switchesButton.addEventListener('click', function() {
    renderItems(filterItems(window.pData, 'mSwitch'));
  })

  accessoriesDOM.addEventListener('click', function() {
    renderItems(filterItems(window.pData, 'accessories'));
  });
};

function initApp() {
  renderItems(window.pData);
  handleNavbarClick();
};

initApp();