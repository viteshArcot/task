$(document).ready(function() {
    $("#load-user-btn").click(function() {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users/1', // URL to the backend API to fetch user details
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                $("#user-name").text(data.name);
                $("#user-email").text(data.email);
            },
            error: function() {
                alert("An error occurred while fetching user details");
            }
        });
    });
});