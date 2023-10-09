        // Функция для отображения автомобилей по выбранной категории
        function filterCars(category) {
            const cars = document.querySelectorAll('.car');
            
            cars.forEach(car => {
                car.style.display = 'none'; // Скрыть все автомобили
            });
            
            if (category === 'all') {
                cars.forEach(car => {
                    car.style.display = 'block'; // Показать все автомобили
                });
            } else {
                const selectedCars = document.querySelectorAll('.category-' + category);
                selectedCars.forEach(car => {
                    car.style.display = 'block'; // Показать автомобили выбранной категории
                });
            }
        }
        
        // Обработчик события для изменения выбранной категории в списке
        const categorySelect = document.getElementById('category-select');
        categorySelect.addEventListener('change', function() {
            const selectedCategory = this.value;
            filterCars(selectedCategory);
        });

        // Добавление автомобилей при загрузке страницы (пример для одной категории)
        const carContainer = document.querySelector('.car-container');

        function createCar(category, imgSrc, name, price, features) {
            const carDiv = document.createElement('div');
            carDiv.classList.add('car');
            carDiv.classList.add(`category-${category}`);

            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = name;

            const h2 = document.createElement('h2');
            h2.textContent = name;

            const priceP = document.createElement('p');
            priceP.classList.add('price');
            priceP.textContent = `Цена: ${price}`;

            const featuresP = document.createElement('p');
            featuresP.classList.add('features');
            featuresP.textContent = `Характеристики: ${features}`;

            const buyButton = document.createElement('button');
            buyButton.classList.add('car-button');
            buyButton.textContent = 'Купить';

            const detailsButton = document.createElement('button');
            detailsButton.classList.add('car-button');
            detailsButton.textContent = 'Подробнее';

            carDiv.appendChild(img);
            carDiv.appendChild(h2);
            carDiv.appendChild(priceP);
            carDiv.appendChild(featuresP);
            carDiv.appendChild(buyButton);
            carDiv.appendChild(detailsButton);

            carContainer.appendChild(carDiv);
        }

        // Пример добавления автомобилей (замените данными из вашей базы данных)
        createCar('Электромобили', 'tesla_model3.jpg', 'Tesla Model 3', '$40,000', 'Электрический, 258 л.с., 0-100 км/ч за 5.3 сек');
        createCar('Кроссоверы и внедорожники', 'toyota_rav4.jpg', 'Toyota RAV4', '$30,000', 'Бензин, 203 л.с., Полный привод');
        // Добавьте другие автомобили аналогичным образом

        // По умолчанию отображаем все автомобили
        filterCars('all');





