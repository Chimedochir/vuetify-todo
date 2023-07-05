<template>
  <v-text-field class="pa-3" outlined label="Add task" @keyup.enter="addTask" @click:append="addTask" v-model="newTaskTitle"
append-icon="mdi-plus"
hide-details
clearable>

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
    methods: {
      addTask(){
        this.$store.dispatch('addTask',this.newTaskTitle),
        this.newTaskTitle=''
      },
    }
  }

</script>

<style>

</style>