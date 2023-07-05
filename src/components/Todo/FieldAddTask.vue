<template>
  <v-text-field class="pa-3" outlined 
  label="Add task" 
  @keyup.enter="addTask" 

   v-model="newTaskTitle"

hide-details
clearable>
<template v-slot:append>
             <v-icon @click="addTask" color="primary" 
             :disabled="newTaskTitleInvalid">mdi-plus</v-icon>
            </template>
</v-text-field>
</template>

<script>
import {showSnackbar} from "@/store/index.js"
export default {
    name:"FieldAddTask",
    data(){
    return{
      newTaskTitle:'',
      text:"Task Added!"     
    }},
    computed:{
      newTaskTitleInvalid(){
        return !this.newTaskTitle
      }
    },
    methods: {
      addTask(){
        if(!this.newTaskTitleInvalid){
          this.$store.dispatch('addTask',this.newTaskTitle),
          this.newTaskTitle=''
        }
      },
    }
  }

</script>

<style>

</style>