$("#searchInput").on('keyup', function() {
  var searchValue = $(this).val().toUpperCase();
  if (searchValue == '') {
    $("#fruits li").hide()
  }
  else if (searchValue.length > 0) {
    searchAndFilter(searchValue);
  } else {
    $("#podcasts li").hide();
  }
});

function searchAndFilter(searchTerm) {
  $("#podcasts li").each(function() {
    var currentText = $(this).text().toUpperCase();
    if (currentText.indexOf(searchTerm) >= 0) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
}

$(document).ready(function() {
  $("#podcasts li").show();
});