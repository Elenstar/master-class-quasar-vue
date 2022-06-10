<template>
<q-page class="q-pa-md">
  <div class="q-gutter-sm">
    <q-list
      v-if="storeTasks.tasks.length"
      class="bg-white"
      separator
      bordered
    >
      <q-item
        v-for="(task, index) in storeTasks.tasks"
        :key="task.title"
        @click="task.done = !task.done"
        :class="{ 'done bg-blue-1' : task.done }"
        clickable
      >
        <q-item-section avatar>
          <q-checkbox
            v-model="task.done"
            />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
          <q-item-label caption>{{ task.timeStamp }}</q-item-label>
        </q-item-section>

        <q-item-section
          v-if="task.done"
          side
        >
          <q-btn
            @click.stop="storeTasks.deleteTask(index)"
            flat
            round
            dense
            color="red"
            icon="delete" />
        </q-item-section>

      </q-item>
    </q-list>
    <div
      v-else
      class="no-task absolute-center">
        <q-icon
          name="check"
          size="140px"
          color="primary"
        />
        <div class="text-subtitle1 text-primary text-center">
          Заданий пока нет
        </div>
    </div>
  </div>
</q-page>
</template>

<script setup>
import { useTodoStore } from 'src/stores/todo'
const storeTasks = useTodoStore()
</script>

<style scoped lang="scss">
  .done {
    .q-item__label {
      text-decoration: line-through;
      color: #bbb;
    }
  }
  .no-task {
    opacity: 0.5
  }
</style>
