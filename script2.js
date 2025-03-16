
document.addEventListener("DOMContentLoaded", function() {
    // Получаем параметры из URL
    const params = new URLSearchParams(window.location.search);
  
    // Извлекаем данные из параметров
    const imageUrl = params.get("image");
    const brand = params.get("brand");
    const model = params.get("model");
    const price = params.get("price");
    const currency = params.get("currency");
    const year = params.get("year");
    const engine = params.get("engine");
    const odometer = params.get("odometer");
    const odometerUnit = params.get("odometerUnit");
    const city = params.get("city");
    const dates = params.get("dates");
  
    // Заполняем данные на странице
    const imageElement = document.querySelector(".car-image-ok");
    document.querySelectorAll(".car-brand")[0].innerText = brand;
    document.querySelectorAll(".car-brand")[1].innerText = brand;
    document.querySelectorAll(".car-model")[0].innerText = `${model},`;
    document.querySelectorAll(".car-model")[1].innerText = `${model},`;
    document.querySelectorAll(".car-price")[0].innerText = `${price} ${currency}`;
    document.querySelectorAll(".car-year")[0].innerText = `${year} il,`;
    document.querySelectorAll(".car-year")[1].innerText = `${year} il,`;
    document.querySelectorAll(".car-engine")[0].innerText = engine ? `${engine} L,` : "";
    document.querySelectorAll(".car-odometer")[0].innerText = odometer;
    document.querySelectorAll(".car-odometer")[1].innerText = odometer;
    document.querySelectorAll(".car-odometerUnit")[0].innerText = odometerUnit;
    document.querySelectorAll(".car-city")[0].innerText = city;
    document.querySelectorAll(".car-city")[1].innerText = city;
    document.querySelectorAll(".car-dates").innerText = dates;

    imageElement.src = imageUrl;
  });
  