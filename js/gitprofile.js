$(document).ready(function() {

  $('.gitprofile').on('submit', function(e) {

    e.preventDefault();

    var access_token = 'ff0e33ae3b97a0f52096f0142ad0beba6f0a3e0f';
    var url = 'https://api.github.com/users/' + $('input.username').val() + "?access_token=" + access_token;

    var template = $('template').html();

    $.get(url, function(info) {
      console.log(info);
      var avatar_url = info.avatar_url;
      // var html_url = info.html_url;
      // var login = info.login;
      // var followers = info.followers;
      // $('#followers').append("<p>Followers: " + public_repos + "</p>");
      $('#repos').append("<p>Repos: " + info.public_repos + "</p>");

      // $('.container').prepend(template, string);
    }).fail(function() {
      $('.container').prepend("User not found");
    }).always(function() {
      $('input.username').val('');
    });
  });
});
