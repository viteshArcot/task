$(document).ready(function() {
    $("#register-form").submit(function(event) {
        event.preventDefault();

        let formData = $(this).serialize();

        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users', // URL to the backend API to create a new user
            type: 'POST',
            data: formData,
            success: function(data) {
                alert("Registration successful!");
            },
            error: function() {
                alert("An error occurred while registering the user");
            }
        });
    });
});

