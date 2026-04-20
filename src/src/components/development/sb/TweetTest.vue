<script setup lang="ts">
import { ref } from 'vue';
import { getTweets, postTweet } from '@/services/supabase/tweet/tweet';

const content = ref('テストツイート');
const tweets = ref<any[]>([]);

const handleGetTweets = async () => {
  const ret = await getTweets();

  console.log('handleGetTweets', ret);

  if (!ret) return;

  tweets.value = ret;
};

const handlePostTweet = async () => {
  const ret = await postTweet(content.value);
  console.log('handlePostTweet', ret);
};
</script>

<template>
  <div class="space-y-5 border p-5">
    <div>
      <button @click="handleGetTweets" class="app-btn-primary">
        ツイート取得
      </button>
    </div>
    <div>
      <input type="text" v-model="content" class="app-form-input" />
      <button @click="handlePostTweet" class="app-btn-primary">
        ツイート作成
      </button>
    </div>

    <div class="space-y-4">
      <div v-for="tweet in tweets" :key="tweet.id" class="p-5 border-2">
        <div>id: {{ tweet.id }}</div>
        <div>content: {{ tweet.content }}</div>
        <div>users.name: {{ tweet.users.name }}</div>
      </div>
    </div>
  </div>
</template>
