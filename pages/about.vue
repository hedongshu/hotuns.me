<script setup lang="ts"></script>

<template>
  <div class="py-5">
    <div
      class="sm:grid grid-cols-8 px-6 py-5 sm:py-9 gap-5 container max-w-5xl mx-auto"
    >
      <div class="col-span-5 max-w-md">
        <div class="flex justify-between">
          <div>
            <h1 class="text-xl sm:text-4xl pb-2 font-bold">Hotuns</h1>

            <div class="my-3 space-x-3 pb-10">
              <NuxtLink
                to="https://github.com/hedongshu"
                target="_blank"
                class="p-2 bg-sky-950 text-amber-50 rounded-md"
                aria-label="Github"
              >
                <Icon name="fa:github" size="1em" />
              </NuxtLink>
              <!-- <NuxtLink
                to="https://www.linkedin.com/in/nur-Hotuns/"
                target="_blank"
                class="p-2 bg-sky-950 text-amber-50 rounded-md"
                aria-label="LinkedIn"
              >
                <Icon name="fa:linkedin-square" size="1em" />
              </NuxtLink> -->
              <NuxtLink
                to="https://twitter.com/hotuns_"
                target="_blank"
                class="p-2 bg-sky-950 text-amber-50 rounded-md"
                aria-label="Twitter"
              >
                <Icon name="fa:twitter-square" size="1em" />
              </NuxtLink>
              <!-- <NuxtLink
                to="https://stackoverflow.com/users/16781395/nur-Hotuns"
                target="_blank"
                class="p-2 bg-sky-950 text-amber-50 rounded-md"
                aria-label="StackOverflow"
              >
                <Icon name="fa:stack-overflow" size="1em" />
              </NuxtLink> -->
            </div>
          </div>
          <div class="sm:hidden block col-span-3 pb-5">
            <NuxtImg
              src="/psb.jpeg"
              width="125"
              height="115"
              quality="50"
              class="rounded-md"
            />
          </div>
        </div>
        <h3 class="text-base sm:text-3xl font-semibold pb-7 sm:pb-12">
          人类、程序员、即将成为父亲.
        </h3>

        <p>
          你好，我是 Hotuns
          ，旁边这个图片是我多年前刚买数位板的时候画的一幅图，现在已经很久没有画画了。这是我当时很喜欢的动漫《野良神》的主角，现在看来画得很差，但是我还是很喜欢它，所以就一直用着.
        </p>
      </div>
      <div class="hidden sm:block col-span-3">
        <NuxtImg
          src="/psb.jpeg"
          width="600"
          height="500"
          quality="50"
          class="rounded-md"
        />
      </div>
    </div>
  </div>
</template>
