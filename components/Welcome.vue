<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
</script>

<template>
  <div class="flex flex-col gap-24 items-center justify-center pt-72">
    <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      PixelDevs Nuxt 3 Template
    </h1>
    <Card class="w-[350px]">
      <CardHeader>
        <CardTitle>Get Started</CardTitle>
      </CardHeader>
      <CardContent>
        Get started Remove this welcome page by replacing the Welcome component in
        app.vue with your own code.
      </CardContent>
    </Card>
  </div>
</template>
