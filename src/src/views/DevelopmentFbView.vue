<script setup lang="ts">
import Test from '@/components/development/fb/Test.vue';

const sectionClass = 'border-2 p-5';
</script>

<template>
  <div>
    Firebaseテスト

    <div class="space-y-5 mt-10">
      <div :class="sectionClass">
        <Test />
      </div>
    </div>
  </div>
</template>
