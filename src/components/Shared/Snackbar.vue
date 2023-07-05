<template>
   <v-snackbar
      v-model="$store.state.snackbar.show"
      :multi-line="multiLine"

    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          text
          v-bind="attrs"
          @click="snackbar.show = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script>
import { mapState} from 'vuex';
export default {
    data: () => ({
        multiLine: true,
    
    
    }),
    computed:{
        ...mapState(["snackbar"]),
    }
}
</script>

<style>

</style>