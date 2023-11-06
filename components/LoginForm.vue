<template>
  <form class="flex flex-col gap-4 p-4 bg-slate-50 rounded-1">
    <div class="flex flex-col gap-1">
      <label class="font-size-3" for="email">Email</label>
      <input
        id="email"
        class="
            appearance-none
            border-solid border-1 border-border
            font-size-4
            p-2
            rounded-1
          "
        type="email"
        placeholder="Your email address"
      >
    </div>

    <div class="flex flex-col gap-1">
      <label class="font-size-3" for="password">Password</label>
      <input
        id="password"
        class="
            appearance-none
            border-solid border-1 border-border
            font-size-4
            p-2
            rounded-1
          "
        type="password"
        placeholder="Your password"
      >
    </div>

    <div>
      <button
        class="
            appearance-none
            rounded-1
            bg-yagro-darkGreen
            border-none
            px-2
            py-3
            text-white
            w-full
            tracking-wide
            hover:bg-yagro-darkGreen-600
            cursor-pointer
            flex
            items-center
            justify-center
            gap-2
            leading-4
            font-700
          "
        type="submit"
      >
        <span class="block">Sign in</span>
        <span class="block">
          <i class="i-fa6-solid-lock h-3 block" />
        </span>
      </button>
    </div>
  </form>
</template>
