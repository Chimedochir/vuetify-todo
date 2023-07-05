<template>
    <div class="">
        <v-menu
                  bottom
                  left
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
      
                  <v-list >
                    <v-list-item
                      v-for="(item, index) in items"
                      :key="index"
                      @click="handleClick(index)"
                    >
                    <v-list-item-icon>
                      <v-icon v-text="item.icon"></v-icon>
                     </v-list-item-icon>
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
        </v-menu>
 <dialogDelete v-if="dialog.delete" :task="task" @close="dialog.delete=false"></dialogDelete>

    </div>
</template>

<script>
export default {
    data: () => ({
        dialog:{
      delete:false
    },
      items: [
        { title: 'Edit',icon:'mdi-pencil',click(){
            console.log("edit")
        }},
        { title: 'Due date',icon:'mdi-calendar' ,click(){
            console.log("due data")
        }},
        { title: 'Delete',icon:'mdi-delete',click(){
            this.dialog.delete=true
        } },
      ],
      
    }),
    props:["task"],
    
    methods:{
        handleClick(index){
             this.items[index].click.call(this)
        }
    },
    components:{
        'dialogDelete':require("@/components/Todo/Dialog/DialogDelete.vue").default
    }
}
</script>

<style>

</style>