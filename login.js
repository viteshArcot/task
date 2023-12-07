$(document).ready(function() {
    $("#login-form").submit(function(event) {
        event.preventDefault();

        let formData = $(this).serialize();

        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users', // URL to the backend API to authenticate the user
            type: 'GET',
            data: formData,
            success: function(data) {
                alert("Login successful!");
            },
            error: function() {
                alert("An error occurred while logging in the user");
            }
        });
    });
});


