 $('.modal').on('shown.bs.modal', function () {
     $(this).find('.close').focus();
 });

    document.addEventListener("DOMContentLoaded", function () {
        // Получите все элементы популярных категорий
        const popularCategories = document.querySelectorAll(".popular-category");

        // Обработайте щелчок на каждой популярной категории
        popularCategories.forEach(function (category) {
            category.addEventListener("click", function () {
                // Получите значение атрибута data-category
                const selectedCategory = category.getAttribute("data-category");

                // Получите список всех автомобилей
                const cars = document.querySelectorAll(".car");

                // Покажите или скройте автомобили в зависимости от выбранной категории
                cars.forEach(function (car) {
                    const carCategory = car.classList[1]; // Получите класс категории автомобиля
                    if (selectedCategory === "all" || selectedCategory === carCategory) {
                        car.style.display = "block";
                    } else {
                        car.style.display = "none";
                    }
                });
            });
        });
    });

