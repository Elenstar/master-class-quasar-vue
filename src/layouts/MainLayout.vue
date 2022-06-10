<template>
  <div class="q-pa-md" style="max-width: 630px">
    <q-layout view="lHh lpr lFf" container style="height: 400px" class="shadow-2 rounded-borders">

      <q-header bordered class="bg-white text-primary">
        <q-toolbar>
          <q-toolbar-title class="text-center">
            <q-avatar>
              <q-icon name="checklist" :size="24 + 'px'" />
            </q-avatar>
            Планировщик
          </q-toolbar-title>
          {{ todaysDate }}
        </q-toolbar>
        <q-toolbar>
          <q-input
            @keyup.enter="storeTasks.addTask"
            v-model="storeTasks.newTask"
            class="col"
            filled
            placeholder="Запланировать задание"
            dense
          >
            <template v-slot:append>
              <q-btn
                @click="storeTasks.addTask"
                round
                dense
                flat
                icon="send"
                />
            </template>
          </q-input>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { useTodoStore } from 'src/stores/todo'

import { computed } from 'vue'
import { date } from 'quasar'

const storeTasks = useTodoStore() //через эту переменную мы можем вызывать любые данные и экшены из стора

const todaysDate = computed(() => {
    const dateNow = Date.now()
    return date.formatDate(dateNow, 'D MMMM YYYY', {
      months: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря' ],
    })
  })

</script>
