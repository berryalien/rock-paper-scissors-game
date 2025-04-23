const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    optionImages.forEach((image2, index2) => {
      if (index !== index2) image2.classList.remove("active");
    });

    let imageSrc = image.querySelector("img").src;
    userResult.src = imageSrc;

    let randomNumber = Math.floor(Math.random() * 3);
    let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
    cpuResult.src = cpuImages[randomNumber];

    let userChoice = image.querySelector("p").innerText.toLowerCase();
    let cpuChoice = ["rock", "paper", "scissors"][randomNumber];

    let outcome = "";

    if (userChoice === cpuChoice) {
      outcome = "It's a draw!";
    } else if (
      (userChoice === "rock" && cpuChoice === "scissors") ||
      (userChoice === "scissors" && cpuChoice === "paper") ||
      (userChoice === "paper" && cpuChoice === "rock")
    ) {
      outcome = "You win!";
    } else {
      outcome = "Computer wins!";
    }

    result.innerText = outcome;
  });
});

