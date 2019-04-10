function addItem(item) {
  const newItem = `<li><span class="shopping-item">${item}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`;
  $('.shopping-list').append(newItem);
}

$(function() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const item = $('#shopping-list-entry').val();
    addItem(item);
  });
  $('.shopping-item-toggle').on('click', function(event) {
    $(this).closest('li').toggleClass('shopping-item shopping-item__checked');
  });
  $('.shopping-item-delete').on('click', function(event) {
    $(this).closest('li').remove('li');
  });  
});


$(document).ready()
