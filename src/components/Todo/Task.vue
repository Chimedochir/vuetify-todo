<template>
    <div >
  
  <v-list-item @click="doneTask(task.id)" :class="{'blue lighten-5':task.done}">
    <template v-slot:default>
      <v-list-item-action>
        <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
      </v-list-item-action>

      <v-list-item-content>
        <v-list-item-title :class="{'text-decoration-line-through':task.done}">{{ task.title }}</v-list-item-title>
      </v-list-item-content>
      <v-list-item-action>
            <task-menu :task="task"/>
        </v-list-item-action>
    </template>
  </v-list-item>
  <v-divider></v-divider>
</div>
</template>

<script>
import { mapMutations,mapActions, mapState } from 'vuex';
// import {doneTask} from "@/store/index"
// import { deleteTasked } from '@/store/index';
export default {
name:"Task",
data(){
  return{
  
  }
},
methods:{
    ...mapMutations(["doneTask"]),
   ...mapActions(["deleteTasked"]),
  
   
  },
  props:['task'],
  components:{
    'task-menu':require("@/components/Todo/TaskMenu.vue").default
  }
}
</script>

<style>

</style>