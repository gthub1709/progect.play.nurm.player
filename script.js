const players = [
    {
        name: "Месси",
        image: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt68e2d01a63826a80/639f60ad4960650b1e8d3928/Lionel_Messi_Argentina_2022_1.jpg",
        hint: "Аргентинский футболист, 7-кратный обладатель Золотого мяча, чемпион мира 2022"
    },
    {
        name: "Роналду",
        image: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt3125d320e6bf0d32/639dea5e7934a30ce1e7c953/GettyImages-1450104523.jpg",
        hint: "Португальский футболист, 5-кратный обладатель Золотого мяча, играет под номером 7"
    },
    {
        name: "Мбаппе",
        image: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltaac8a26d24fc5122/63986dacd3e5474e48ec3f55/Kylian_Mbappe_France_2022.jpg",
        hint: "Французский нападающий, чемпион мира 2018, играет за ПСЖ"
    },
    {
        name: "Холанд",
        image: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt2a9c2acb626e67ca/6435e6a8c90d5a36ee5c8a89/GettyImages-1477346283.jpg",
        hint: "Норвежский нападающий Манчестер Сити, известен своей результативностью"
    },
    {
        name: "Левандовский",
        image: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltec4b7c50872ea20e/6339dc7682614910d99d3b6b/Lewandowski_Barcelona_2022-23.jpg",
        hint: "Польский нападающий, лучший бомбардир в истории сборной Польши"
    },
    {
        name: "Неймар",
        image: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt2a4788d8d6337eca/63986d5ed3e5474e48ec3f4d/Neymar_Brazil_2022.jpg",
        hint: "Бразильский футболист, самый дорогой трансфер в истории футбола"
    },
    {
        name: "Салах",
        image: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltec1a3f95c6e3fef2/6358b7e84d64ea6ccb5392c7/Salah_Liverpool_2022-23.jpg",
        hint: "Египетский нападающий Ливерпуля, известен своей скоростью"
    },
    {
        name: "Модрич",
        image: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt646c7aed1dbc0d14/639871e67934a30ce1e7c8f5/Luka_Modric_Croatia_2022.jpg",
        hint: "Хорватский полузащитник, обладатель Золотого мяча 2018"
    }
];

let currentPlayerIndex = 0;
let score = 0;

function initGame() {
    updatePlayer();
}

function updatePlayer() {
    const currentPlayer = players[currentPlayerIndex];
    document.getElementById("playerImage").src = currentPlayer.image;
    document.getElementById("hint").textContent = `Подсказка: ${currentPlayer.hint}`;
    document.getElementById("user-input").value = '';
}

function checkAnswer() {
    const userInput = document.getElementById("user-input").value.trim().toLowerCase();
    const correctAnswer = players[currentPlayerIndex].name.toLowerCase();

    if (userInput === correctAnswer) {
        score++;
        alert("Правильно!");
    } else {
        alert(`Неправильно! Это был ${players[currentPlayerIndex].name}`);
    }

    currentPlayerIndex++;

    if (currentPlayerIndex < players.length) {
        updatePlayer();
    } else {
        const endMessage = document.getElementById("endMessage");
        endMessage.classList.add("show");
        setTimeout(() => {
            endMessage.classList.remove("show");
            currentPlayerIndex = 0;
            score = 0;
            document.getElementById("score").textContent = "Очки: 0";
            updatePlayer();
        }, 3000);
    }

    document.getElementById("score").textContent = `Очки: ${score}`;
}

// Инициализация игры при загрузке страницы
window.onload = initGame;
