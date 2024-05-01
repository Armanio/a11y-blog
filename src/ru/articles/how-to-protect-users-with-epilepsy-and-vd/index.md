---
title: Как не навредить пользователям с эпилепсией и вестибулярными нарушениями
description: Что, если пользователя укачивает из-за сайта? А вдруг у него случится эпилептический приступ? Давайте разберёмся с тем, какими должны быть интерфейсы для пользователей с эпилепсией и вестибулярными нарушениями.
keyTheme:
    - Юзабилити
    - Дизайн
    - Анимация
    - CSS
date: 2021-07-19
layout: article.njk
templateEngineOverride: md, njk
---
Доступность помогает людям не только без проблем пользоваться интерфейсами, но&nbsp;и&nbsp;не чувствовать себя буквально плохо. С&nbsp;этим могут столкнуться люди с&nbsp;эпилепсией и&nbsp;вестибулярными нарушениями. В&nbsp;сегодняшнем посте хочу обсудить, что&nbsp;значит доступность для них.

Давайте для&nbsp;начала поговорим про&nbsp;вестибулярные нарушения, эпилепсию и&nbsp;эпилептические приступы.

## Вестибулярные нарушения

Многие знают, что&nbsp;такое укачивание, головокружение и&nbsp;чувство тошноты. Это могло произойти с&nbsp;вами из-за плохого сна, простуды и&nbsp;кучи других причин.

**Вестибулярные нарушения (Vestibular Disorders)** связаны с&nbsp;внутренним ухом и&nbsp;частью головного мозга, которая контролирует баланс и&nbsp;движение глаз.

Это большая группа нарушений. В&nbsp;неё входят травмы головы, вестибулярная мигрень или&nbsp;мигрень с&nbsp;аурой, опухоли мозга и&nbsp;многое другое. Они часто имеют похожие симптомы:
- головокружение;
- тошнота;
- размытое зрение;
- головные боли;
- проблемы с&nbsp;концентрацией внимания.

И&nbsp;триггером могут стать недоступные интерфейсы. Факундо Коррадини в&nbsp;[статье на A List Apart](https://alistapart.com/article/accessibility-for-vestibular/) рассказывал как часами лежал в&nbsp;кровати с&nbsp;сильным головокружением после встреч с&nbsp;параллаксом.

Таких пользователей действительно много. Одних только людей с&nbsp;хроническими мигренями в&nbsp;мире живёт [около 15&nbsp;%](https://en.wikipedia.org/wiki/Migraine#Epidemiology).

## Эпилепсия и приступы

**Эпилептический приступ (Seizure)**&nbsp;– неконтролируемая повышенная или синхронная активность нейронов в&nbsp;головном мозге. Она приводит к&nbsp;судорогам, параличу, временному сбою внутренних органов, потере или&nbsp;спутанности сознания, частичной амнезии, вспышкам страха и&nbsp;тревожности.

Приступы могут случаться самостоятельно или&nbsp;быть частью целых заболеваний. Если&nbsp;они часто повторяются, то&nbsp;это считается **эпилепсией**.

Немного статистики. [Примерно у&nbsp;8–10&nbsp;% людей в мире](https://books.google.ru/books?id=-L5dDwAAQBAJ&pg=PA959&redir_esc=y#v=onepage&q&f=false) происходил минимум один эпилептический приступ. У 3&nbsp;% они привели к&nbsp;эпилепсии.

На возникновение приступов могут влиять не только&nbsp;внутренние, но и&nbsp;внешние факторы. Например, свет или&nbsp;звуки.

Приступы, спровоцированные светом, звуками и даже&nbsp;чтением называются рефлекторными. Когда таких приступов много, то&nbsp;у человека рефлекторная эпилепсия (Reflex Epilepsy, RE).

Рефлекторная эпилепсия бывает нескольких типов. Больше всего нас интересует светочувствительная (Photosensitive Epilepsy, PSE). Её провоцируют интенсивный мерцающий свет или&nbsp;движения. Она встречается у [5&nbsp;% от всего количества людей с эпилепсией](https://www.seizure-journal.com/article/S1059-1311(17)30252-2/fulltext). Чаще всего такие приступы случаются в&nbsp;возрасте от&nbsp;7 до&nbsp;19 лет.

Так что&nbsp;контент, который мигает, мерцает и&nbsp;вспыхивает, может привести к эпилептическому приступу. Он серьёзно повышает электрическую активность в&nbsp;нейронах.

{% note "Самые опасные спектры для людей со&nbsp;светочувствительной эпилепсией&nbsp;— красный и&nbsp;сине-красный." %}

## Какие бывают угрозы

Кто же может стать виновником эпилептического приступа или&nbsp;другой негативной физической реакции?

- Видео.
- Гифки.
- Canvas.
- SVG-, CSS- и&nbsp;JS-анимация. Например, когда рядом с&nbsp;текстом есть подвижные изображения или&nbsp;одновременно скроллятся в&nbsp;разных направлениях передний и&nbsp;задний планы — параллакс-эффекты.
- Анимированная прокрутка, которая длится больше 1/4&nbsp;секунды.
- Графика с&nbsp;контрастными полосами, клетками, спиралями и&nbsp;концентрическими кругами.
- Высокая контрастность.

Не так давно сама столкнулась с&nbsp;глазной болью и&nbsp;чувством тошноты из-за [сплэшскрина в WebStorm 2021.1](http://mikeozornin.ru/blog/all/jetbrains-ide-splashscreens/). Хотя это всего лишь статичная картинка. Спасибо команде JetBrains, которая прислушалась к&nbsp;отзывам и&nbsp;снизила насыщенность изображений.

Больше примеров проблемных интерфейсов есть в&nbsp;[«Your Interactive Makes Me Sick»](https://source.opennews.org/articles/motion-sick/) Эйлин Уэбб. Надеюсь, ваш вестибулярный аппарат справится с&nbsp;этим испытанием лучше, чем&nbsp;мой.

<figure>

> Вам даже не нужны видео или&nbsp;изображение, чтобы&nbsp;причинить кому-то вред. Простой `<div>`, который с&nbsp;помощью JavaScript быстро меняет цвет и&nbsp;яркость, тоже&nbsp;может навредить. И мигание можно встретить где угодно. К примеру, спиннеры, которые появляются во время загрузки страниц, могут вращаться и мигать одновременно.
<figcaption>MDN.</figcaption>

</figure>

## Советы и рекомендации

Людей с&nbsp;эпилепсией и&nbsp;вестибулярными нарушениями опасно привлекать к&nbsp;тестированию. Поэтому остаётся действовать превентивно и&nbsp;учитывать рекомендации, которые дают эксперты.

Так что&nbsp;мы можем сделать для&nbsp;того, чтобы&nbsp;не&nbsp;навредить пользователям?

{% hiddenSpan "👉" %} Частота обычных и&nbsp;красных вспышек&nbsp;— не больше 3&nbsp;раз&nbsp;в&nbsp;секунду (3&nbsp;Гц). Это минимальное требование по&nbsp;доступности для людей с&nbsp;эпилептическими приступами.

**Обычная вспышка (General flash)**&nbsp;— это пара противоположных состояний относительной яркости, когда она изменяется на 10&nbsp;% или&nbsp;больше. При этом относительная яркость тёмного изображения меньше 0,8. А&nbsp;**красная (Red flash)** — пара противоположных переходов, между которыми&nbsp;есть насыщенный красный цвет.

{% note "Кроме вспышек есть мигания (Blinks). Мигающий контент переключается между двумя состояниями. Обычно он нужен для привлечения внимания к&nbsp;какому-то элементу. Если мигания длятся недолго и&nbsp;автоматически останавливаются, то&nbsp;всё хорошо. Если&nbsp;нет, то&nbsp;требования как к&nbsp;вспышкам: не больше 3&nbsp;раз&nbsp;в&nbsp;секунду." %}

Проверить видео и&nbsp;анимацию можно в&nbsp;бесплатной программе [Photosensitive Epilepsy Analysis Tool (PEAT)](https://trace.umd.edu/peat/). Правда,&nbsp;она подходит только для некоммерческих целей. Для коммерческих есть платная [Harding Test](https://www.hardingfpa.com).

{% hiddenSpan "👉" %} Если&nbsp;частота вспышек больше 3&nbsp;раз&nbsp;в&nbsp;секунду, то&nbsp;можно уменьшить их область и&nbsp;сделать её «безопасной маленькой областью» (Small safe area). Её размер — меньше 10&nbsp;% центральной части поля зрения или меньше 25&nbsp;% от размера экрана. Это связано с&nbsp;тем, что&nbsp;центральная часть глаза состоит из большого количества сенсоров. Они активнее других передают сигналы в&nbsp;зрительную кору и&nbsp;могут перегрузить нейроны.

{% note "Рекомендуемая область вспышек для дисплея с&nbsp;соотношением 1024x768 и&nbsp;диагональю 15–17&nbsp;дюймов при&nbsp;стандартном расстоянии до&nbsp;глаз (58–68&nbsp;см)&nbsp;— **341x256&nbsp;пикселей**." %}

Это не самое надёжное решение. Пользователь может зайти на сайт с&nbsp;мобильного устройства и&nbsp;поднести его слишком близко к&nbsp;глазам.

{% hiddenSpan "👉" %} По&nbsp;возможности лучше вообще избегать в&nbsp;видео и&nbsp;анимации красных вспышек или&nbsp;насыщенных оттенков красного.

{% hiddenSpan "👉" %} Следите за контрастностью анимации и&nbsp;не делайте её слишком высокой.

{% hiddenSpan "👉" %} Можно отключить анимацию, если&nbsp;она не ключевой функционал. Для этого пригодится медиафича `prefers-reduced-motion`.

Она проверяет выбор настроек «Уменьшить движение» (Reduce Motion) в&nbsp;macOS или&nbsp;«Показывать анимацию» (Show animations) в&nbsp;Windows. Сейчас [её глобальная поддержка 91.75&nbsp;%](https://caniuse.com/?search=prefers-reduced-motion). Пример того, как&nbsp;это работает, есть в&nbsp;[демке W3C](https://www.w3.org/WAI/WCAG21/working-examples/css-reduced-motion-query/).

Железобетонных значений для скорости, плавности и&nbsp;других свойств анимации нет. Так что&nbsp;можно воспользоваться опытом других разработчиков или&nbsp;спросить у&nbsp;пользователей про&nbsp;их опыт.

[Вариант 1](https://github.com/jensimmons/cssremedy/issues/11#issuecomment-462867630) только с&nbsp;`prefers-reduced-motion`:

```CSS
@media (prefers-reduced-motion: reduce) {
    *:not(.safe-animation),
    *:not(.safe-animation)::before,
    *:not(.safe-animation)::after {
        animation-duration: 0.01s !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0s !important;
        scroll-behavior: auto !important;
    }
}
```

[Вариант 2](https://css-tricks.com/revisiting-prefers-reduced-motion-the-reduced-motion-media-query/#taking-it-to-code) с&nbsp;`prefers-reduced-motion` и&nbsp;`update`:

```CSS
@media screen and
    (prefers-reduced-motion: reduce), 
    (update: slow) {
    * {
        animation-duration: 0.001ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.001ms !important;
    }
}
```
Медиафича `update` из спецификации [Media Queries Level 4](https://www.w3.org/TR/mediaqueries-4/#update), которая сейчас в&nbsp;статусе кандидата в&nbsp;рекомендации. `update` определяет может ли устройство вывода изменить внешний вид контента, как только&nbsp;он отрендерился. Есть три значения: `none`, `slow` и&nbsp;`fast`.

В сниппете используется `slow`. Оно подходит для ситуаций, когда раскладка динамически изменяется в&nbsp;соответствии с&nbsp;обычными CSS-правилами, но&nbsp;устройство не отображает изменения плавно. Например, экраны с&nbsp;электронными чернилами или&nbsp;дешёвые смартфоны.

{% note "Для работы с&nbsp;этой и&nbsp;другими медиафичами можно использовать набор утилит [Magica11y](https://magica11y.github.io)." %}

[Вариант 3](https://css-tricks.com/revisiting-prefers-reduced-motion-the-reduced-motion-media-query/#reduce-isnt-necessarily-remove), в котором есть всё:

```CSS
:root {
    --animation-duration: 250ms;
    --transition-duration: 250ms;
}

@media screen and (prefers-reduced-motion: reduce), (update: slow) {
    :root {
        --animation-duration: 0.001ms !important;
        --transition-duration: 0.001ms !important;
    }
}

@media screen and (prefers-reduced-motion: reduce), (update: slow) {
    * {
        animation-duration: var(--animation-duration);
        animation-iteration-count: 1 !important;
        transition-duration: var(--animation-duration);
    }
}

@media screen and (prefers-reduced-motion: reduce), (update: fast) {
    .c-educational-concept {
        --animation-duration: 6000ms !important;
        ...
        animation-name: educational-concept;
        animation-duration: var(--animation-duration);
    }
}
```

[Вариант 4](https://web.dev/prefers-reduced-motion/#(bonus)-forcing-reduced-motion-on-all-websites), который можно добавить в браузерное расширение для личного использования:

```CSS
@media (prefers-reduced-motion: reduce) {
    *,
    ::before,
    ::after {
        animation-delay: -1ms !important;
        animation-duration: 1ms !important;
        animation-iteration-count: 1 !important;
        background-attachment: initial !important;
        scroll-behavior: auto !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
    }
}
```

{% hiddenSpan "👉" %} Если&nbsp;есть возможность, то&nbsp;добавьте альтернативные стили без анимации и&nbsp;опасных картинок или&nbsp;дайте ссылку на текстовую версию со&nbsp;страниц с&nbsp;параллаксом.

{% hiddenSpan "👉" %} Не все пользователи продвинутые и&nbsp;знают, где находятся настройки анимации. Если&nbsp;учитываете человеческий фактор, то&nbsp;можно добавить специальную кнопку в меню. Она будет включать более безопасную анимацию. Так поступили на [сайте Animal Crossing](https://animal-crossing.com/).

{% hiddenSpan "👉" %} Должна быть возможность поставить на паузу, остановить или&nbsp;вообще скрыть любую информацию, которая:

- автоматические скроллится, двигается и&nbsp;мигает;
- обновляется больше 5&nbsp;секунд;
- отображается параллельно с&nbsp;другим контентом.

Например, параллакс-эффекты или&nbsp;карусели. Обычно с&nbsp;этим справляются кнопки паузы и&nbsp;остановки.

Автоматическое воспроизведение видео можно отменить, если&nbsp;удалить `autoplay` в&nbsp;`<video controls>`. Звук можно убрать атрибутом `muted`.

Для всех элементов с&nbsp;анимацией можно задать `animation-play-state: paused;`. Тогда она будет поставлена на паузу по&nbsp;умолчанию.

На анимацию во время загрузки это требование не распространяется. Пользователь может подумать, что&nbsp;загрузка на паузе или&nbsp;вообще отменена. Это же касается рекламы, так как&nbsp;периодически она необходимая часть функционала для доступа к&nbsp;контенту. Привет, YouTube.

{% hiddenSpan "👉" %} Устанавливайте короткую продолжительность `animation-duration` и&nbsp;`transition-duration` вместо `animation: none` или&nbsp;`transition: none`.

{% hiddenSpan "👉" %} Больше всего неприятностей доставляют гифки. Пользователи не могут управлять их скоростью или&nbsp;отключать.

Хороший вариант заменить гифки на видео с атрибутом `loop` или&nbsp;на SVG-анимацию. Используйте скрипты, чтобы&nbsp;добавить для них элементы управления. Например, [gifplayer на jQuery](https://rubentd.com/gifplayer/). А&nbsp;можно добавить [веб-компонент `<x-gif>`](https://github.com/geelen/x-gif).

{% hiddenSpan "👉" %} Анимированный текст также&nbsp;не самая безобидная часть интерфейса. Пока нет стандартных возможностей настроить его анимацию. Если он сильно смещается в&nbsp;сторону или&nbsp;ощутимо увеличивается/уменьшается, то&nbsp;это тоже&nbsp;может вызвать приступ или головокружение. Так что&nbsp;лучше либо&nbsp;совсем отказаться от&nbsp;этой идеи, либо&nbsp;изменять контент незначительно и&nbsp;плавно.

{% hiddenSpan "👉" %} Разместите предупреждение об&nbsp;опасном контенте, если&nbsp;сомневаетесь и не можете больше ничего сделать.

{% hiddenSpan "👉" %} Следуйте паре простых рекомендаций о&nbsp;паттернах и&nbsp;картинках. Если&nbsp;они состоят из прямых контрастных линий, то&nbsp;лучше остановиться на 8. Если это&nbsp;волны, то&nbsp;размещайте рядом не больше 5.

## На что&nbsp;ссылаться в&nbsp;WCAG&nbsp;2.1

Критерии доступности для людей с&nbsp;эпилептическими приступами и&nbsp;вестибулярными нарушениями собраны в&nbsp;двух руководствах:
- Руководство&nbsp;2.2. Достаточное количество времени.
    - [Критерий&nbsp;2.2.2. Пауза, остановка и&nbsp;скрытие](https://www.w3.org/TR/WCAG21/#pause-stop-hide) (A).
- [Руководство&nbsp;2.3. Эпилептические приступы и&nbsp;физические реакции](https://www.w3.org/TR/WCAG21/#seizures-and-physical-reactions).
    - Критерий&nbsp;2.3.1. Три вспышки или&nbsp;ниже порога (A).
    - Критерий&nbsp;2.3.2. Три вспышки (AAA).
    - Критерий&nbsp;2.3.3. Анимация при взаимодействии (AAA).

***

Сделать интерфейс безопасным не так сложно, но очень важно. Когда на сайт заходят люди с&nbsp;эпилепсией или&nbsp;вестибулярными нарушениями, то&nbsp;речь идёт не только о&nbsp;возможности прочитать текст. Недоступный интерфейс может ухудшить их самочувствие и&nbsp;иногда стать угрозой для жизни.

Вестибулярные нарушения могут появляться спонтанно. Например, из-за побочных эффектов от&nbsp;лекарств, травм головы и&nbsp;даже жаркой погоды. Такая же ситуация с&nbsp;эпилептическими приступами. Мы более-менее готовы к&nbsp;пользователям со&nbsp;скринридерами, но&nbsp;не можем предсказать от&nbsp;чего&nbsp;человеку станет плохо. Поэтому&nbsp;так&nbsp;важно с&nbsp;самого начала не создавать барьеры.

## Полезные ссылки

- [WCAG 2.1](https://www.w3.org/TR/WCAG21).
- [Web accessibility for seizures and physical reactions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Seizure_disorders), MDN.
- [Seizure and Vestibular Disorders](https://webaim.org/articles/seizure), WebAIM.
- [Your Interactive Makes Me Sick](https://source.opennews.org/articles/motion-sick), Эйлин Уэбб.
- [Revisiting prefers-reduced-motion, the reduced motion media query](https://css-tricks.com/revisiting-prefers-reduced-motion-the-reduced-motion-media-query), Эрик Бэйли.
- [Accessibility for Vestibular Disorders: How My Temporary Disability Changed My Perspective](https://alistapart.com/article/accessibility-for-vestibular), Факундо Коррадини.
- [Accessible Web Animation: The WCAG on Animation Explained](https://css-tricks.com/accessible-web-animation-the-wcag-on-animation-explained), Вал Хед.
- [Designing Safer Web Animation For Motion Sensitivity](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity), Вал Хед.
- Много полезного про&nbsp;доступную анимацию в&nbsp;[блоге Вал Хед](https://valhead.com/blog).
