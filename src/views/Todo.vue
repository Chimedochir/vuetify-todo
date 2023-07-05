<template>
<div class="home">

<field-add-task/>
 <lists-tasks  v-if="this.$store.state.tasks.length"
 />
    <noTasks v-else/>
</div>
    
</template>

<script>

  export default {
    name: 'Home',
  
  components:{'field-add-task':require("@/components/Todo/FieldAddTask.vue").default,
  'lists-tasks':require("@/components/Todo/ListsTasks.vue").default,
       'noTasks':require("@/components/Todo/NoTasks.vue").default},
  
  
  }
</script>

