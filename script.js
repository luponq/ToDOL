Vue.component('task',{
    props: ['data'],  //"props элемент который мы будем перебрасывать из головного обьекта вью в component('task')"
    data() {    //"В обьекте data будут хранится все задания"
      return {
      }
    },
    methods: {
      task_done(){
        this.$emit('task_done') //ivent который удаляет задачу из массива tasks
      }
    },               //template-"верстка самого компонента / фукционал"
    template: `     
    <div class="task">
      <div>
        <h3 class="task__title">{{data.title}}</h3>
        <p v-if="data.desc!=''" class="task__desc">{{data.desc}}</p>
      </div>
      <button class="task__done" @click="task_done()">✔️</button>
    </div>`
  })
  // Строка 18 выполняет функционал выполнение/удаление заадачи
  var vue = new Vue({ //"Задачи и их описание которые отображаются по умолчнию"
    el: '#app',
    data: {
      string: 'asdasda',
      new_task: {
        title: '',
        desc: ''
      },
      tasks : [
        {
          title: 'Изучить основы vue.js',
          desc: 'Попробовать написать калькулятор',
        },
        {
          title: 'Прочитать книгу "Самый богатый человек в вавилоне"',
          desc: '',
        }
      ]
    },
    methods: {      
      add_task(){      //Формирует обьект после которого он добавится в массив tasks
        if(this.new_task.title != ''){    //Если строка заполнена,то выполняется всё что внутри фигурных скобок
          this.tasks.push({       //Функция push добавляет в конец массива добавляет обьект
            title: this.new_task.title,
            desc: this.new_task.desc
          });
          this.new_task.title=''; //Очистка полей для ввода
          this.new_task.desc='';
        }
      },
      delete_task(id){           //
        this.tasks.splice(id,1);
      }
    }
  })