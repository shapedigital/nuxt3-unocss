<template>
  <aside
    class="
        p-4
        w-full
        h-full
        sm:max-w-100
        bg-white
        border-s-16 border-yagro-darkGreen border-s-solid
        flex flex-items-center flex-content-center
      "
  >
    <div class="sticky top-0 w-full">
      <div class="flex flex-col gap-4 flex-items-center justify-content-center">
        <Brand />
        <h2
          class="font-400 m-b-4
 font-size-5"
        >
          Sign in to YAGRO
        </h2>
      </div>
      <LoginForm />
    </div>
  </aside>
</template>
