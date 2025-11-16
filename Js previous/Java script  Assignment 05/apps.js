 // 🔹 Task 1: Full Address
    function task1() {
      var street = prompt("Enter your street:");
      var city = prompt("Enter your city:");
      var country = prompt("Enter your country:");
      var fullAddress = street + ", " + city + ", " + country;
      document.getElementById("out1").textContent =
        "Your full address is: " + fullAddress;
    }

    // 🔹 Task 2: Custom Username
    function task2() {
      var name = prompt("Enter your first name:");
      var number = prompt("Enter your favorite number:");
      var username = name + number;
      document.getElementById("out2").textContent =
        "Your new username is: " + username;
    }

    // 🔹 Task 3: Email Generator
    function task3() {
      var fname = prompt("Enter your first name:");
      var lname = prompt("Enter your last name:");
      var email = fname.toLowerCase() + "." + lname.toLowerCase() + "@example.com";
      document.getElementById("out3").textContent =
        "Your email is: " + email;
    }

    // 🔹 Task 4: Favorite Things
    function task4() {
      var color = prompt("Enter your favorite color:");
      var animal = prompt("Enter your favorite animal:");
      var food = prompt("Enter your favorite food:");
      var sentence = "Your favorite things are: " + color + " " + animal + " and " + food + "!";
      document.getElementById("out4").textContent = sentence;
    }

    // 🔹 Task 5: Quote with Author
    function task5() {
      var quote = prompt("Enter a quote:");
      var author = prompt("Enter the author's name:");
      var result = '"' + quote + '" - ' + author;
      document.getElementById("out5").textContent = result;
    }