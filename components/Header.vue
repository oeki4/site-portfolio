<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="header__inner">
      <Logo />
      <nav class="header__menu">
        <ul class="header__menu-list">
          <li class="header__menu-item">
            <NuxtLink to="/#home" class="header__menu-link"> Главная </NuxtLink>
          </li>
          <li class="header__menu-item">
            <NuxtLink to="/#about" class="header__menu-link">
              Обо мне
            </NuxtLink>
          </li>
          <li class="header__menu-item">
            <NuxtLink href="/#projects" class="header__menu-link">
              Проекты
            </NuxtLink>
          </li>
          <li class="header__menu-item">
            <NuxtLink href="/#feedback" class="header__menu-link">
              Связаться
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <a class="mail-link" href="mailto: nikitachryackhov555@gmail.com">
        <svg
          class="mail-link__img"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.7917 4.16669H5.20834C4.37954 4.16669 3.58469 4.49593 2.99863 5.08198C2.41258 5.66803 2.08334 6.46289 2.08334 7.29169V17.7084C2.08334 18.5372 2.41258 19.332 2.99863 19.9181C3.58469 20.5041 4.37954 20.8334 5.20834 20.8334H19.7917C20.6205 20.8334 21.4153 20.5041 22.0014 19.9181C22.5874 19.332 22.9167 18.5372 22.9167 17.7084V7.29169C22.9167 6.46289 22.5874 5.66803 22.0014 5.08198C21.4153 4.49593 20.6205 4.16669 19.7917 4.16669ZM19.3646 6.25002L13.2396 12.375C13.1428 12.4727 13.0275 12.5501 12.9006 12.603C12.7737 12.6559 12.6375 12.6831 12.5 12.6831C12.3625 12.6831 12.2263 12.6559 12.0994 12.603C11.9725 12.5501 11.8573 12.4727 11.7604 12.375L5.63543 6.25002H19.3646ZM20.8333 17.7084C20.8333 17.9846 20.7236 18.2496 20.5282 18.4449C20.3329 18.6403 20.0679 18.75 19.7917 18.75H5.20834C4.93208 18.75 4.66712 18.6403 4.47177 18.4449C4.27642 18.2496 4.16668 17.9846 4.16668 17.7084V7.71877L10.2917 13.8438C10.8776 14.429 11.6719 14.7577 12.5 14.7577C13.3281 14.7577 14.1224 14.429 14.7083 13.8438L20.8333 7.71877V17.7084Z"
            fill="#331C52"
          />
        </svg>
        Написать
      </a>
    </div>
  </header>
</template>

<style lang="scss">
@import "assets/scss/components/header.scss";
</style>
