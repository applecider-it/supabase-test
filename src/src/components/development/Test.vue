<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { supabase } from '@/services/supabase/supabase';
import { getAuthUser } from '@/services/user/auth';

const router = useRouter();

const handleGetAuthUser = async () => {
  const user = await getAuthUser();
  console.log('handleGetAuthUser', user);
};
</script>

<template>
  <div class="space-y-5 border p-5">
    <div>
      <button @click="handleGetAuthUser" class="app-btn-primary">
        ログインユーザー取得
      </button>
    </div>
  </div>
</template>
