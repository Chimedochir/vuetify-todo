import Vue from 'vue'
import Vuex from 'vuex'
export const doneTask="doneTask"
export const deleteTask="deleteTask"
export const deleteTasked="deleteTasked"
export const showSnackbar="showSnackbar"
export const switchText="switchText"
// export const tasks="tasks"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks:[{id:3,title:'Get bananas',done:false,dueDate:'2023-07-06'}],
    snackbar:{show:false,text:''},
    value:false
  },
  getters: {
  },
  mutations: {
    addTask(state,newTaskTitle){
      let newTask={
        id:Date.now(),
        title:newTaskTitle,
        done:false
      
      }
      state.tasks.push(newTask) 
      
      },
      [doneTask](state, id){
        let task=state.tasks.filter(task=>task.id===id)[0];
        task.done=!task.done
       }, 
       [deleteTask](state,id){
        state.tasks=state.tasks.filter(task=>task.id!=id);
        
      },
      updateTaskTitle(state,payload){
        let task=state.tasks.filter(task=>task.id===payload.id)[0];
        task.title=payload.title
        console.log(payload.title)
        state.value=true
      },
      updateTaskDueDate(state,payload){
        let task=state.tasks.filter(task=>task.id===payload.id)[0];
        task.dueDate=payload.dueDate
       
      },
      [showSnackbar](state,text){
        let timeout=0
        if(state.snackbar.show){
          state.snackbar.show=false
          timeout=300
        }
        setTimeout(()=>{
          state.snackbar.show=true
          state.snackbar.text=text
        },timeout)
       
      },
      switchValue(state){
        this.value=!this.value
      },
      editTask(state,id,title){
        let task=state.tasks.filter(task=>task.id===id)[0];
        task.title=title
       
        
      }
     
      

  },
  actions: {
    addTask({commit},newTaskTitle){
      commit('addTask',newTaskTitle),
      commit('showSnackbar','Task Added!')
    },
    deleteTasked({commit},id){
      commit('deleteTask',id),
      commit('showSnackbar','Task Deleted!')

    },
    updateTaskTitled({commit},payload){
      commit('updateTaskTitle',payload),
      commit('showSnackbar','Task Updated!')

    },
    updateTaskDueDated({commit},payload){
      commit('updateTaskDueDate',payload),
      commit('showSnackbar','Task Due Date Updated!')

    },
  },
  modules: {
  }
})
