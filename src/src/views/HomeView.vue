<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

console.log(supabaseUrl, supabasePublishableKey)

const supabase = createClient(supabaseUrl, supabasePublishableKey)

async function getInstruments() {
  const { data } = await supabase.from('comments').select()
  console.log(data);
}
onMounted(() => {
   getInstruments()
})
</script>

<template>
  <div>
    Home
  </div>
</template>
