
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
    const imageElement = document.getElementById("car-image");
    document.getElementById("car-brand").innerText = brand;
    document.getElementById("car-model").innerText = `${model},`;
    document.getElementById("car-price").innerText = `${price} ${currency}`;
    document.getElementById("car-year").innerText = `${year} il,`;
    document.getElementById("car-engine").innerText = engine ? `${engine} L,` : "";
    document.getElementById("car-odometer").innerText = odometer;
    document.getElementById("car-odometerUnit").innerText = odometerUnit;
    document.getElementById("car-city").innerText = city;
    document.getElementById("car-dates").innerText = dates;

    imageElement.src = imageUrl;
  });
  