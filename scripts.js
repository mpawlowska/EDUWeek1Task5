
/* Stwórz aplikację, która pozwoli po kliknięciu wybranego przycisku, np. “Załaduj”, pobrać AJAXem dane typu JSON i wyświetlić je na stronie. Adres, pod który wyślesz zapytanie z użyciem jQuery to https://jsonplaceholder.typicode.com/users
    Otrzymane dane wyświetl na stronie w formie nieuporządkowanej listy <ul>, a każdego użytkownika w tagu <li>. Z podanych danych wyłuskaj name, username, email oraz phone. Sformatuj je według własnego uznania. */

(function($) {
    $(document).ready(function () {

        var button = $("button");

        button.on("click", function (e) {
            e.preventDefault();
            console.log("Kliknięto");

            var ul = $("<ul></ul>").appendTo("body").hide();

            $.ajax({
                url: "https://jsonplaceholder.typicode.com/users",
                method: "GET",
                dataType: "json",
                context: "button",
                success: function (objects, status, jqXHR) {

                    $.each(objects, function (i, obj) {
                        var name = obj.name,
                            username = obj.username,
                            email = obj.email,
                            phone = obj.phone,
                            data = "Name: " + name + " Username: " + username + " Email: " + email + " Phone: " +phone,
                            newLi = $("<li>").text(data);

                        newLi.appendTo(ul);
                    });
                    button.attr("disabled", "disabled").text("Pobrano dane");
                    ul.fadeIn(700);
                }
            });
        });
    });
})(jQuery);


//
// // z metodą getJSON:
// //
// // $.getJSON("https://jsonplaceholder.typicode.com/users", function(objects) {
// //
// //     $.each(objects, function (i, obj) {
//             // var name = obj.name,
//                 username = obj.username,
//                 email = obj.email,
//                 phone = obj.phone,
//                 data = "Name: " + name + " Username: " + username + " Email: " + email + " Phone: " +phone,
//                 newLi = $("<li>").text(data);
//
//             newLi.appendTo(ul);
//             });
//             button.attr("disabled", "disabled").text("Pobrano dane");
//             ul.fadeIn(700);
//             }