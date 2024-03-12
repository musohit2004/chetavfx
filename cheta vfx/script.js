function showContent(tabName) {
  // Hide all content divs
  var contents = document.querySelectorAll('.content');
  contents.forEach(function (content) {
      content.classList.remove('active');
  });

  // Show the selected content div with a delay for the sliding effect
  var selectedContent = document.getElementById(tabName);
  setTimeout(function() {
      selectedContent.classList.add('active');
  }, 100); // You can adjust the delay (in milliseconds) as needed
}