<script setup lang="ts">
interface Project {
  title: string;
  subtitle: string;
  images: string[];
  github: string;
}
const config = useRuntimeConfig();
import { useForm } from "vee-validate";
const { values, defineField } = useForm();

const { data: projects } = await useFetch<Project[]>(
  `${config.public.apiUrl}/projects`,
);

const [username, usernameAttrs] = defineField("username");
const [communication, communicationAttrs] = defineField("communication");
const [comment, commentAttrs] = defineField("comment");
const [subject, subjectAttrs] = defineField("subject");

const resultMessage = ref("");

const onSubmit = async () => {
  resultMessage.value = "";
  if (!communication.value || !username.value) {
    resultMessage.value = "Заполнены не все необходимые поля!";
    return;
  }
  const { data: feedback, error: feedbackErr } = await useAsyncData(
    "feedback",
    () =>
      $fetch(`${config.public.apiUrl}/feedback`, {
        method: "POST",
        body: JSON.stringify({
          username: username.value,
          communication: communication.value,
          comment: comment.value,
          subject: subject.value,
        }),
      }),
  );

  if (feedback) {
    resultMessage.value = "Заявка успешно отправлена!";
  } else {
    resultMessage.value = "При отправке заявки произошла ошибка!";
  }
};
</script>
<template>
  <section id="home" class="info">
    <img
      class="info__photo"
      src="/assets/img/programmer.png"
      alt="programmer"
    />
    <div class="info__inner">
      <h3 class="info__inner-subtitle">Привет&#128075;,</h3>
      <h1 class="info__inner-title">Нужен сайт?</h1>
      <h2 class="info__inner-subtitle--medium">Я постараюсь помочь!</h2>
      <ul class="social-links">
        <li class="social-links__item">
          <a
            href="https://github.com/oeki4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              class="social-links__svg"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_48_30)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15 0C23.2845 0 30 6.88489 30 15.3794C30 22.1729 25.707 27.9359 19.7505 29.9714C18.99 30.1229 18.72 29.6427 18.72 29.2332C18.72 28.7262 18.738 27.0702 18.738 25.0122C18.738 23.5782 18.258 22.6423 17.7195 22.1653C21.06 21.7843 24.57 20.4837 24.57 14.5767C24.57 12.8967 23.988 11.5257 23.025 10.4487C23.181 10.0602 23.6955 8.49593 22.878 6.37793C22.878 6.37793 21.621 5.96583 18.7575 7.95483C17.559 7.61433 16.275 7.44301 15 7.43701C13.725 7.44301 12.4425 7.61433 11.2455 7.95483C8.379 5.96583 7.119 6.37793 7.119 6.37793C6.3045 8.49593 6.819 10.0602 6.9735 10.4487C6.015 11.5257 5.4285 12.8967 5.4285 14.5767C5.4285 20.4687 8.931 21.7892 12.2625 22.1777C11.8335 22.5617 11.445 23.2391 11.31 24.2336C10.455 24.6266 8.283 25.3068 6.945 22.9563C6.945 22.9563 6.1515 21.4786 4.6455 21.3706C4.6455 21.3706 3.183 21.3512 4.5435 22.3052C4.5435 22.3052 5.526 22.7777 6.2085 24.5552C6.2085 24.5552 7.089 27.3001 11.262 26.3701C11.2695 27.6556 11.283 28.8672 11.283 29.2332C11.283 29.6397 11.007 30.1154 10.2585 29.9729C4.2975 27.9404 0 22.1744 0 15.3794C0 6.88489 6.717 0 15 0Z"
                  fill="#9071B4"
                />
              </g>
              <defs>
                <clipPath id="clip0_48_30">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </li>
        <li class="social-links__item">
          <a
            href="https://t.me/oeki4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              class="social-links__svg"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_48_28)">
                <path
                  d="M20.7393 9.4125C20.745 9.4125 20.7525 9.4125 20.76 9.4125C20.9559 9.4125 21.1378 9.47344 21.2868 9.57844L21.284 9.57656C21.3928 9.67125 21.4659 9.80438 21.4837 9.95438V9.95719C21.5025 10.0716 21.5128 10.2028 21.5128 10.3369C21.5128 10.3978 21.5109 10.4578 21.5062 10.5178V10.5094C21.2953 12.7303 20.3803 18.1163 19.9153 20.6025C19.7184 21.6553 19.3312 22.0078 18.9562 22.0416C18.1415 22.1175 17.5228 21.5034 16.7334 20.9859C15.4978 20.175 14.7993 19.6706 13.6003 18.8803C12.2137 17.9681 13.1128 17.4647 13.9021 16.6453C14.1093 16.4297 17.7009 13.1625 17.7712 12.8663C17.775 12.8484 17.7768 12.8288 17.7768 12.8081C17.7768 12.735 17.7496 12.6684 17.7056 12.6178C17.6568 12.5859 17.5959 12.5681 17.5321 12.5681C17.49 12.5681 17.4496 12.5766 17.4121 12.5906L17.414 12.5897C17.2903 12.6178 15.3165 13.9222 11.4928 16.5028C11.0756 16.8319 10.5487 17.04 9.97495 17.0644H9.96933C9.15651 16.9659 8.4187 16.785 7.71839 16.5272L7.78776 16.5497C6.90839 16.2628 6.20995 16.1119 6.26995 15.6262C6.30183 15.3737 6.64995 15.1153 7.31433 14.8509C11.4068 13.0678 14.1359 11.8925 15.5015 11.325C17.0081 10.5253 18.7546 9.86719 20.5912 9.44063L20.7384 9.41156L20.7393 9.4125ZM14.9343 0.960938C7.1512 0.979687 0.848389 7.29375 0.848389 15.0797C0.848389 22.8769 7.16901 29.1984 14.9671 29.1984C22.7653 29.1984 29.0859 22.8778 29.0859 15.0797C29.0859 7.29375 22.7831 0.979687 15.0018 0.960938H15C14.9781 0.960938 14.9562 0.960938 14.9343 0.960938Z"
                  fill="#9071B4"
                />
              </g>
              <defs>
                <clipPath id="clip0_48_28">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </li>
        <li class="social-links__item">
          <a
            href="https://freelance.habr.com/freelancers/gumus54"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              class="social-links__svg"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_48_35)">
                <path
                  d="M0 0V30H30V0H0ZM8.78125 5H10.8225C12.3462 5 12.8725 5.03625 12.9075 5.14125C12.9313 5.22375 12.9425 6.8525 12.9425 8.7625L12.9325 12.2413L13.5275 11.7138C14.3487 10.9875 15.0425 10.73 16.355 10.6837C17.2225 10.66 17.5712 10.695 18.18 10.9063C19.505 11.3513 20.4425 12.265 20.935 13.6137C21.1225 14.14 21.1475 14.6925 21.1812 18.97L21.2188 23.75H17.0463V19.8487C17.0463 16.005 17.0338 15.9575 16.775 15.4887C16.4125 14.8675 16.0138 14.5862 15.3925 14.5162C14.3263 14.4 13.5888 14.7625 13.1675 15.6288C12.9675 16.0288 12.9437 16.4488 12.9325 19.8238C12.92 21.8863 12.895 23.6113 12.895 23.6575C12.885 23.7163 11.9575 23.75 10.8325 23.75H8.7825V14.375L8.78125 5Z"
                  fill="#9071B4"
                />
              </g>
              <defs>
                <clipPath id="clip0_48_35">
                  <rect width="30" height="30" rx="15" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </section>
  <section class="experience">
    <div class="experience__inner">
      <div class="experience__fact">
        <p class="experience__fact-number">&gt;2</p>
        <p class="experience__fact-text">лет опыта</p>
      </div>
      <div class="experience__fact">
        <p class="experience__fact-number">&gt;10</p>
        <p class="experience__fact-text">разработанных за это время проектов</p>
      </div>
      <div class="skills">
        <img class="skills-img" src="/assets/img/skills/js.svg" alt="" />
        <img class="skills-img" src="/assets/img/skills/ts.svg" alt="" />
        <img class="skills-img" src="/assets/img/skills/node.svg" alt="" />
        <img class="skills-img" src="/assets/img/skills/nuxt.svg" alt="" />
        <img class="skills-img" src="/assets/img/skills/nest.svg" alt="" />
        <img class="skills-img" src="/assets/img/skills/react.svg" alt="" />
      </div>
    </div>
  </section>
  <section id="about" class="about">
    <div class="about__inner">
      <div>
        <h1 class="title">Кто я?</h1>
        <p class="text">
          Я — фуллстек-разработчик, специализирующийся на JavaScript(а также
          TypeScript) и его экосистеме. Именно поэтому в ходе разработки я
          использую библиотеки и фреймворки для JS.
        </p>
      </div>
      <div class="about__inner-skills">
        <div>
          <h1 class="title">Что я умею?</h1>
          <p class="text">Технологии, с которыми я работаю чаще всего</p>
          <div class="skills">
            <img class="skills-img" src="/assets/img/skills/js.svg" alt="" />
            <img class="skills-img" src="/assets/img/skills/ts.svg" alt="" />
            <img class="skills-img" src="/assets/img/skills/node.svg" alt="" />
            <img class="skills-img" src="/assets/img/skills/nuxt.svg" alt="" />
            <img class="skills-img" src="/assets/img/skills/nest.svg" alt="" />
            <img class="skills-img" src="/assets/img/skills/react.svg" alt="" />
            <img class="skills-img" src="/assets/img/skills/html.svg" alt="" />
            <img class="skills-img" src="/assets/img/skills/css.svg" alt="" />
            <img class="skills-img" src="/assets/img/skills/linux.svg" alt="" />
            <img
              class="skills-img"
              src="/assets/img/skills/postgresql.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="projects" class="projects">
    <div class="projects__inner">
      <h1 class="title">Мои проекты</h1>
      <p class="text">Небольшие проекты, которыми я занимался для обучения</p>
      <div>
        <carousel
          :items-to-show="5"
          wrap-around
          :breakpoints="{
            230: {
              itemsToShow: 1.5,
            },
            530: {
              itemsToShow: 2.5,
            },
            730: {
              itemsToShow: 3,
            },
            1130: {
              itemsToShow: 4,
            },
            1530: {
              itemsToShow: 5,
            },
            8530: {
              itemsToShow: 6,
            },
          }"
        >
          <slide
            v-for="(project, index) in projects"
            v-if="projects"
            :key="index"
          >
            <Fancybox
              :options="{
                Carousel: {
                  infinite: false,
                },
              }"
            >
              <a
                data-fancybox="gallery"
                v-for="(image, index) in project.images"
                :href="image"
              >
                <img
                  v-if="index == 0"
                  :src="image"
                  alt=""
                  class="carousel__slide-img"
                />
              </a>
            </Fancybox>
            <h1 class="title title--slide">{{ project.title }}</h1>
            <p class="text text--slide">
              {{ project.subtitle }}
            </p>
            <a
              class="carousel__slide-link"
              :href="project.github"
              target="_blank"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 30 30"
                class="carousel__slide-icon"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_48_30)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15 0C23.2845 0 30 6.88489 30 15.3794C30 22.1729 25.707 27.9359 19.7505 29.9714C18.99 30.1229 18.72 29.6427 18.72 29.2332C18.72 28.7262 18.738 27.0702 18.738 25.0122C18.738 23.5782 18.258 22.6423 17.7195 22.1653C21.06 21.7843 24.57 20.4837 24.57 14.5767C24.57 12.8967 23.988 11.5257 23.025 10.4487C23.181 10.0602 23.6955 8.49593 22.878 6.37793C22.878 6.37793 21.621 5.96583 18.7575 7.95483C17.559 7.61433 16.275 7.44301 15 7.43701C13.725 7.44301 12.4425 7.61433 11.2455 7.95483C8.379 5.96583 7.119 6.37793 7.119 6.37793C6.3045 8.49593 6.819 10.0602 6.9735 10.4487C6.015 11.5257 5.4285 12.8967 5.4285 14.5767C5.4285 20.4687 8.931 21.7892 12.2625 22.1777C11.8335 22.5617 11.445 23.2391 11.31 24.2336C10.455 24.6266 8.283 25.3068 6.945 22.9563C6.945 22.9563 6.1515 21.4786 4.6455 21.3706C4.6455 21.3706 3.183 21.3512 4.5435 22.3052C4.5435 22.3052 5.526 22.7777 6.2085 24.5552C6.2085 24.5552 7.089 27.3001 11.262 26.3701C11.2695 27.6556 11.283 28.8672 11.283 29.2332C11.283 29.6397 11.007 30.1154 10.2585 29.9729C4.2975 27.9404 0 22.1744 0 15.3794C0 6.88489 6.717 0 15 0Z"
                    fill="#ffffff"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_48_30">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Посмотреть код
            </a>
          </slide>
        </carousel>
      </div>
    </div>
  </section>
  <section id="feedback" class="feedback">
    <div class="feedback__inner">
      <div class="feedback__interests">
        <h1 class="title title--feedback">
          Давайте обсудим<br />
          <span class="title--highlight">вашу идею</span> для проекта
        </h1>
        <p class="text text--feedback">Мне интересно...</p>
        <div>
          <div class="feedback__interests-btn">
            <input
              id="radio-1"
              type="radio"
              name="radio"
              v-model="subject"
              v-bind="subjectAttrs"
              value="Сайт-Визитка"
            />
            <label for="radio-1">Сайт-Визитка</label>
          </div>
          <div class="feedback__interests-btn">
            <input
              id="radio-2"
              type="radio"
              name="radio"
              v-model="subject"
              v-bind="subjectAttrs"
              value="Интернет-Магазин"
            />
            <label for="radio-2">Интернет-Магазин</label>
          </div>
          <div class="feedback__interests-btn">
            <input
              id="radio-3"
              type="radio"
              name="radio"
              v-model="subject"
              v-bind="subjectAttrs"
              value="Лэндинг"
            />
            <label for="radio-3">Лэндинг</label>
          </div>
          <div class="feedback__interests-btn">
            <input
              id="radio-4"
              type="radio"
              name="radio"
              v-model="subject"
              v-bind="subjectAttrs"
              value="Сайт для огранизации"
            />
            <label for="radio-4">Сайт для огранизации</label>
          </div>
          <div class="feedback__interests-btn">
            <input
              id="radio-5"
              type="radio"
              name="radio"
              v-model="subject"
              v-bind="subjectAttrs"
              value="Что-то другое..."
            />
            <label for="radio-5">Что-то другое...</label>
          </div>
        </div>
      </div>
      <form @submit.prevent="onSubmit" class="feedback__form">
        <input
          type="text"
          class="feedback__form-input"
          v-model="username"
          v-bind="usernameAttrs"
          placeholder="Как вас зовут?"
        />
        <input
          type="text"
          class="feedback__form-input"
          v-model="communication"
          v-bind="communicationAttrs"
          placeholder="Как я могу с вами связаться?"
        />
        <textarea
          rows="10"
          class="feedback__form-input feedback__form-input--high"
          v-model="comment"
          v-bind="commentAttrs"
          placeholder="Есть ли дополнительные пожелания?"
        />
        <p v-if="resultMessage" class="feedback__form-result">
          {{ resultMessage }}
        </p>
        <button class="feedback__form-btn">
          <img src="/assets/img/airplane.svg" alt="" />Я готов сотрудничать!
        </button>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "/assets/scss/pages/main.scss";
</style>
