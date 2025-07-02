const flagContainer = document.getElementById('flagContainer');
const guessInput = document.getElementById('guessInput');
const submitGuessButton = document.getElementById('submitGuess');
const hintElement = document.getElementById('hint');
const scoreElement = document.getElementById('score');
const attemptsElement = document.getElementById('attempts');

const winSound = new Audio('sounds/1.mp3');
const losseSound = new Audio('sounds/2.mp3')
const nextgamesound = new Audio('sounds/3.mp3')


const countries = [
    { name: "Brazil", flag: "brazil.png", hint: "This country is in South America and its love of football." },
    { name: "Japan", flag: "japan.jpg", hint: "This country is known for its technology,cherry blossoms and Mount Fuji.." },
    { name: "Germany", flag: "germany.png", hint: "This country is famous for its beer,Oktoberfest and hitler." },
    { name: "Australia", flag: "australia.jpg", hint: "This country is also a continent." },
    { name: "Canada", flag: "canada.png", hint: "Known for its maple syrup and politeness." },
    { name: "India", flag: "india.png", hint: "This country has the Taj Mahal." },
    { name: "South Africa", flag: "south_africa.jpg", hint: "Located at the southern tip of Africa." },
    { name: "Russia", flag: "russia.webp", hint: "The largest country in the world." },
    { name: "usa", flag: "usa.png", hint: "Known for the Statue of Liberty." },
    { name: "France", flag: "france.jpg", hint: "The Eiffel Tower is in this country." },
    { name: "israel", flag:"israel.png",hint : "Origin of GAJA conflict."},
    { name: "Austria", flag:"austria.png",hint : "This country is famous for its classical music, alpine scenery, and is home to the historic city of Vienna."},
    { name: "Egypt", flag: "egypt.png", hint: "This country is known for its ancient pyramids, the Nile River, and the Sphinx." },
    { name: "England", flag: "england.png", hint: "This country is famous for its royal family, historic landmarks like Big Ben, and being the birthplace of Shakespeare." },
    { name: "Iceland", flag: "iceland.png", hint: "This country is known for its stunning glaciers, geothermal hot springs, and the Northern Lights." },
    { name: "Scotland", flag: "scotland.png", hint: "Known for its historic castles, tartan kilts, and the mythical Loch Ness Monster and also famous for whiskey." },
    { name: "Spain", flag: "spain.png", hint: "Famous for its vibrant festivals like bull racing and tomoto holi ." },
    { name: "Ukraine", flag: "ukraine.png", hint: "currently war with russia." },
    { name: "Slovakia", flag: "slovakia.png", hint: "Famous for its medieval castles, mountainous landscapes, and historic capital, Bratislava." },
   
     { name: "China", flag: "china.jpg", hint: "Famous for the Great Wall and being the world's most populous country." },
     { name: "Italy", flag: "italy.jpg", hint: "Famous for its pasta, pizza, and historic cities like Rome and Venice." },
     { name: "Mexico", flag: "maxico.png", hint: "Famous for its tacos, ancient Mayan ruins,vibrant culture and Pablo Escobar." },
     { name: "South Korea", flag: "skorea.jpg", hint: "Famous for K-pop, high-tech cities, and kimchi ." },
     { name: "Saudi Arabia", flag: "saudi.jpg", hint: "Home to the holy cities of Mecca and Medina, and known for its oil wealth." },
     { name: "Argentina", flag: "ar.jpg", hint: "Famous for tango, football legends like Messi, and the Andes Mountains." },
     { name: "Turkey", flag: "turkey.jpg", hint: "Famous for its rich history, straddling Europe and Asia, and the city of Istanbul." },
     { name: "Nigeria", flag: "nigeria.jpg", hint: "Africa's most populous country, known for its diverse cultures and Nollywood." },
     { name: "Thailand", flag: "thailand.jpg", hint: "Famous for its tropical beaches, Buddhist temples, and vibrant street markets." },
     { name: "Pakistan", flag: "pak.jpg", hint: "Home to the ancient Indus Valley civilization and the second-highest peak, K2." },
     { name: "Indonesia", flag: "indo.jpg", hint: "The world's largest archipelago, known for Bali and its diverse cultures." },
    // { name: "", flag: "", hint: "" },
    // { name: "", flag: "", hint: "" },
    
]

let selectedCountry;
let attempts = 0;
const maxAttempts = 6;
let score = 0;





function startGame() {
    selectedCountry = countries[Math.floor(Math.random() * countries.length)];
    flagContainer.style.backgroundImage = `url('flags/${selectedCountry.flag}')`;
    attempts = 0;
    scoreElement.textContent = `Score: ${score}`;
    attemptsElement.textContent = `Attempts: ${attempts}/${maxAttempts}`;
    hintElement.textContent = "";
    guessInput.value = "";
   
}


 




function checkGuess() {
    const userGuess = guessInput.value.trim().toLowerCase();
    attempts++;

    if (userGuess === selectedCountry.name.toLowerCase()) {
        score += (maxAttempts - attempts + 1) * 10;
        hintElement.textContent = "Congratulations! You guessed correctly!";
        scoreElement.textContent = `Score: ${score}`;
        winSound.play();
        
        setTimeout(startGame, 1000); // Start new game after 2 seconds
    } else {
        if (attempts < maxAttempts) {
            hintElement.textContent = `Wrong guess! Hint: ${selectedCountry.hint}`;
            losseSound.play();
        } else {
            hintElement.textContent = `Game over! The correct answer was ${selectedCountry.name}.`;
            nextgamesound.play();
            score=0;
            setTimeout(startGame, 1000); // Start new game after 3 seconds
        }
    }
    attemptsElement.textContent = `Attempts: ${attempts}/${maxAttempts}`;
    guessInput.value = "";
}

submitGuessButton.addEventListener('click', checkGuess);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkGuess();
    }
});


startGame();
