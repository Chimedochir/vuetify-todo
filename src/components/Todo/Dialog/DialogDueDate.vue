<template>
  <v-dialog
        ref="dialog"
        :value="true"
        :return-value.sync="date"
        persistent
        width="290px"
      >

        <v-date-picker
          v-model="date"
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="$emit('close')"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="saveTask"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>
</template>

<script>
export default {
data(){
    return{
        date:null
    }
},
props:["task"],
mounted(){
    if(this.date){
        this.task.dueDate=this.date
    }
},methods:{
    saveTask(){
        let payload={
            id:this.task.id,
            dueDate:this.date
        }
        this.$store.dispatch('updateTaskDueDated',payload)
        this.$emit('close')
    }
}
}
</script>

<style>

</style>