<template>
  <main class="hidden sm:flex w-full relative">
    <div class="absolute top-0 left-0 right-0 bottom-0">
      <NuxtPicture
        class="absolute top-0 left-0 w-full h-full object-cover object-center"
        :img-attrs="{
          class:
            'absolute top-0 left-0 w-full h-full object-cover object-center',
        }"
        src="images/pexels-jannis-knorr-2933243.jpg"
        sizes="xs:200px md:500px lg:1400px"
      />
    </div>
  </main>
</template>
