import React from 'react';
import classNames from 'classnames';
import  { useEffect, useRef, useState } from 'react';

import styles from './index.module.scss';

const images: Images = {
  android: [
    { imageUrl: '/images/stories/ios/item-1.png', alt: 'story-1-android', title: 'Давайте не теряться', description: 'Добавьте иконку eTag на рабочий стол, что бы ваш профиль был всегда под рукой' },
    { imageUrl: '/images/stories/ios/item-2.png', alt: 'story-2-android', title: 'Нажми поделиться', description: 'В Safari это кнопка квадрата со стрелкой' },
    { imageUrl: '/images/stories/ios/item-3.png', alt: 'story-3-android', title: 'Нажми на экран домой', description: 'Это добавит твой профиль в eTag к тебе на главный экран, что бы доступ визитке и настройкам были всегда под рукой' },
    { imageUrl: '/images/stories/ios/item-4.png', alt: 'story-4-android', title: 'Добавь QR циферблат', description: 'Если ты пользователь смарт часов, то скачай в настройках профиля свой QR код как циферблат для твоей модели часов и делись визиткой одним поднятием руки' },
    { imageUrl: '/images/stories/ios/item-5.png', alt: 'story-5-android', title: 'Начать пользоваться', description: 'Используй готовые кнопки или виджеты для создания твоего уникального профиля' }
  ],
};

interface StoryImage {
  imageUrl: string;
  alt: string;
  title: string;
  description: string;
}

interface Images {
  android?: StoryImage[];
  ios?: StoryImage[];
  desktop?: StoryImage[];
}

const LineSlide: React.FC<{
  active: boolean;
  onClick: (index: number) => void;
  index: number;
}> = ({ active, onClick, index, ...other }) => {
  function handleClick() {
    onClick(index);
  }

  return (
    <div onClick={handleClick} className={classNames(styles.slide_item, { [styles.active]: active })} {...other}>
      <div className={styles.progress}>
        <div className={styles.progress_line}></div>
      </div>
    </div>
  );
};

const StoryPage: React.FC = ({  }) => {
  const [active, setActive] = useState(0);


  const handleNextClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (active === images.android.length - 1) {
      console.log('exit');
    } else {
      setActive((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setActive((prevIndex) => prevIndex - 1);
  };

  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      if (active === images.android.length - 1) {
        console.log('exit');
      } else {
        setActive(active + 1);
      }
    }, 500000);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [active]);

  useEffect(() => {
    function updateMaxHeight() {
      const storyPage = document.querySelector('.StoryPage');
      if (storyPage) {
        const windowHeight = window.innerHeight;
        (storyPage as HTMLElement).style.height = `${windowHeight}px`;
      }
    }

    window.addEventListener('resize', updateMaxHeight);
    updateMaxHeight();

    return () => {
      window.removeEventListener('resize', updateMaxHeight);
    };
  }, []);

  return (
    <div className={styles.StoryPage}>
    <div className={styles.body} data-cy='bodyStories'>
      <div className={styles.slide}>
        {images.android.map((_, index) => (
          <LineSlide
            onClick={setActive}
            key={index}
            active={active === index}
            index={index}
            data-cy='activeSlide'
          />
        ))}
      </div>
      <div className={styles.stories}>
        {images.android.map((p, index) => (
          <div className={classNames(styles.story_item, { [styles.active_item]: active === index })} key={index}>
            <div className={styles.story_content}>
              <img
                className={styles.img}
                src={p.imageUrl}
                alt={p.alt}
                key={index}
                data-cy='activeImage'
              />
              <div className={styles.heading}>
                <div className={styles.title}>{p.title}</div>
                <div className={styles.description}>{p.description}</div>
              </div>
            </div>
            <div className={styles.button_container}>
              {active === 0 ? (
                <button className={styles.button} onClick={handleNextClick}>Далее</button>
              ) : (
                <div className={styles.buttons_group}>
                  <button className={classNames(styles.button, styles.white)} onClick={handlePrevClick}>Назад</button>
                  <button className={styles.button} onClick={handleNextClick}>{active === images.android.length - 1 ? "Начать" : "Далее"}</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default StoryPage;
