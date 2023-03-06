$(function() {
  var current = location.pathname;
  $('nav a').each(function() {
    var $this = $(this);
    if ($this.attr('href') === current) {
      $this.addClass('active');
    }
  });
});

// Load more videos
$(function() {
  var $latestVideos = $('#latest-videos');
  var $loadMoreButton = $('<button>Load more</button>');
  var $loadingSpinner = $('<div class="loading-spinner"></div>');
  var page = 1;

  function loadMoreVideos() {
    $loadMoreButton.hide();
    $loadingSpinner.show();

    setTimeout(function() {
      // Simulate loading more videos
      for (var i = 0; i < 4; i++) {
        $latestVideos.append('<iframe width="320" height="180" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>');
      }

      $loadingSpinner.hide();
      $loadMoreButton.show();
      page++;
    }, 2000);
  }

  $latestVideos.after($loadMoreButton);
  $loadMoreButton.after($loadingSpinner);

  $loadMoreButton.on('click', loadMoreVideos);
});
