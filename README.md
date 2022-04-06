# react-first-app
Тестовое задание для компании Гуру Групп

Сборка с использованием Webpack version: 5.65.0

Ознакомиться со сборкой возможно в файле webpack.config.js

Исходные файлы находятся в папке src Результат сборки: папка dist.

Сайт: https://lerakill.github.io/react-app-first/

HTML/CSS:
- использовала scss, postcss
- верстала на флексах
- адаптировала макет до 425px и 320px

React:
- использовала хуки и мемоизацию
- данные для карточек запрашивала здесь: https://6075786f0baf7c0017fa64ce.mockapi.io/products
- запрос сделала через axios
- при наведении и при клике на иконки, они меняют цвет
- реализовала "Просмотрено" для карточек товаров по значению поля seen из полученных данных
- изначально вывела 16 карточек, при клике на "Показать еще" - вывела все
- реализовала карусель на карточке из нескольких фото
- реализовала лоадер, пока карточки не прогрузятся