
 // Task 1: Full Address
    function task1() {
      const street = prompt("Enter your street:").trim();
      const city = prompt("Enter your city:").trim();
      const country = prompt("Enter your country:").trim();
      const fullAddress = `${street}, ${city}, ${country}`;
      document.getElementById("out1").textContent = "Your full address is: " + fullAddress;
    }

    // Task 2: Username
    function task2() {
      const name = prompt("Enter your first name:").trim().toLowerCase();
      const number = prompt("Enter your favorite number:").trim();
      const username = `${name}${number}`;
      document.getElementById("out2").textContent = "Your new username is: " + username;
    }

    // Task 3: Email Generator
    function task3() {
      const fname = prompt("Enter your first name:").trim().toLowerCase();
      const lname = prompt("Enter your last name:").trim().toLowerCase();
      const email = `${fname}.${lname}@example.com`;
      document.getElementById("out3").textContent = "Your email is: " + email;
    }

    // Task 4: Favorite Things
    function task4() {
      const color = prompt("Enter your favorite color:").trim();
      let animal = prompt("Enter your favorite animal:").trim();
      const food = prompt("Enter your favorite food:").trim();
      if (animal && !animal.toLowerCase().endsWith("s")) {
        animal = animal + "s";
      }
      const sentence = `Your favorite things are: ${color} ${animal} and ${food}!`;
      document.getElementById("out4").textContent = sentence;
    }

    // Task 5: Quote with Author
    function task5() {
      const quote = prompt("Enter a quote:").trim();
      const author = prompt("Enter the author's name:").trim();
      const result = `"${quote}" - ${author}`;
      document.getElementById("out5").textContent = result;
    }//

    alert("apna collage");