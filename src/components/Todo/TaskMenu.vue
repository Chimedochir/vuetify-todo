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
           <dialogDueDate v-if="dialog.dueDate" :task="task" @close="dialog.dueDate=false"></dialogDueDate>
           <dialogEdit v-if="dialog.edit" :task="task" @close="dialog.edit=false"></dialogEdit>

    </div>
</template>

<script>
export default {
    data: () => ({
        dialog:{
      delete:false,
      edit:false,
      dueDate:false
    },
      items: [
         { title: 'Edit',icon:'mdi-pencil',
         click(){
          this.dialog.edit=true
        }
        },
        { title: 'Due date',icon:'mdi-calendar',
        click(){
           this.dialog.dueDate=true
        }
        },
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
        'dialogDelete':require("@/components/Todo/Dialog/DialogDelete.vue").default,
        'dialogEdit':require("@/components/Todo/Dialog/DialogEdit.vue").default,
        'dialogDueDate':require("@/components/Todo/Dialog/DialogDueDate.vue").default
    }
}
</script>

<style>

</style>