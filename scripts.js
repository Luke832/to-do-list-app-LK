function newItem(){
  // store user input into a variable and then add each user input into a newly created list
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === ''){
    alert('You must write something!')
  } else {
    $('#list').append(li);
  }

// allow user to cross out items on the list with a double click
  function crossOut(){
    li.toggleClass('strike');

    li.on('dblclick', function crossOut(){
      li.toggleClass('strike');
    });
  }

// adding a delete button to allow users to delete items on list
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);
  function deleteListItem(){
    li.addClass('delete');
  }

// allow users to reorder the list
  $('#list').sortable();

}
