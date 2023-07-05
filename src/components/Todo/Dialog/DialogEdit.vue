<template>
    <v-dialog
      :value="true"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          Edit task?
        </v-card-title>
        <v-card-text>
          Edit the title of this task:
        <v-text-field v-model="taskTitle" @keyup.enter="saveTask"></v-text-field>
      </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            @click="$emit('close')"
            text
          >
            Cancel
          </v-btn>
          <v-btn
            @click="saveTask"
            color="red darken-1"
            text
            :disabled="taskTitleInvalid"
          >
           Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {
    data(){
      return{
        taskTitle:null
      }
    },
    props: ['task'],
 mounted(){
  this.taskTitle=this.task.title
 },
 computed:{
  taskTitleInvalid(){
    return !this.taskTitle || this.taskTitle===this.task.title
  }
 },
 methods:{
   
   saveTask(){
      if(!this.taskTitleInvalid){
      let payload={
        id:this.task.id,
        title:this.taskTitle 
      }
     this.$store.dispatch('updateTaskTitled',payload)
     this.$emit('close')
    }
  }
 }
  }
  </script>
  
  <style>
  
  </style>