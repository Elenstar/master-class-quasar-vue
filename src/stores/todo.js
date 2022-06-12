import { defineStore } from 'pinia'
import {Dialog, Notify, date} from 'quasar'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    tasks: [],
    newTask: ''
  }),

  actions: {
    addTask() {
      if (this.newTask != '') {
        this.tasks.push({
          title: this.newTask,
          done: false,
          timeStamp: date.formatDate(Date.now(), 'DD.MM.YYYY HH:ss')
        })
        this.newTask = ''
      }
    },

    deleteTask(index) {
      Dialog.create({
        title: 'Предупреждение',
        message: 'Вы действительно хотите удалить выбранную позицию?',
        cancel: true,
        persistent: true,
        ok: {
          label: 'Удалить'
        },
        cancel: {
          color: 'negative',
          label: 'Отменить'
        }
      }).onOk(() => {
        this.tasks.splice(index, 1)
        Notify.create({
          message: 'Задание успешно удалено',
          color: 'green'
        })
      })
    }
  }
})
