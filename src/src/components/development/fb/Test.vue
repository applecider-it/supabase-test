<script setup lang="ts">
import { ref } from 'vue';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

import { db } from '@/services/firebase/firebase';

const handleListTest = async () => {
  console.log('handleListTest');
  const snapshot = await getDocs(collection(db, 'comments'));

  snapshot.forEach((doc) => {
    console.log(doc.data());
  });
};

const handleAddTest = async () => {
  console.log('handleAddTest');
  await addDoc(collection(db, 'comments'), {
    author: 'テスト',
    message: 'テストコメント',
  });
};
</script>

<template>
  <div class="space-y-5 border p-5">
    <div>
      <button @click="handleListTest" class="app-btn-primary">一覧</button>
    </div>
    <div>
      <button @click="handleAddTest" class="app-btn-primary">追加</button>
    </div>
  </div>
</template>
