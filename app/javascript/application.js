// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "jquery"

// Example test to verify jQuery is loaded
$(document).on('turbolinks:load', function() {
  console.log("jQuery is working!");
  $('body').append('<p>jQuery is loaded!</p>');
});
