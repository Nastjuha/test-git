// Функция для обработки отправки формы
document
  .getElementById("passwordForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    const enteredPassword = document.getElementById("password").value;
    const correctPassword = "122345"; // Заданный правильный пароль

    // // Сравниваем введённый пароль с правильным
    // if (enteredPassword === correctPassword) {
    //   console.log("Пароль верный!");
    // } else {
    //   console.log("Неверный пароль.");
    // }

    const murchikLovesMurka = true;
    const murkaLubitMurchika = true;
    const isLove = murchikLovesMurka && murkaLubitMurchika;
    console.log(isLove);
    
    const testObj = {
      name: "Murchik",
      age: 38,
    };

    console.log(testObj);
  });
