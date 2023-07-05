<template>
     <v-list
      flat
      class="pt-0"
     
    >
<task v-for="task in tasks" :key="task.id" :task="task"/>
 
    
    </v-list>
</template>

<script>
 import { mapState } from 'vuex';
//  import { tasks } from '@/store';
export default {
    name:"ListsTasks",
 components:{"task":require("@/components/Todo/Task.vue").default},
 computed:{
    ...mapState(["tasks"])
 }
}
</script>

<style>

</style>