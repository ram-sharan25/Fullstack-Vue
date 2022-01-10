<template>
    <div id="calendar-entry">
      <div class="calendar-entry-note">
        <input type="text" placeholder="New Event" v-model="inputEntry" />
     
        <p class="calendar-entry-day">Day of event: <span class="bold">{{titleOfActiveDay}}</span></p>
        <a class="button is-primary is-small is-outlined" @click="submitEvent(inputEntry)">Submit</a>
         
         <p style="color:red,font-size=13px" v-if="error">
           You must type something first
         </p>
      </div>
    </div>
</template>
<script>
import {store} from '../store'
export default 
{
    name:"CalendarEntry",
    data(){
      return{
        inputEntry:'',
        error:false,
      }
    },
    computed:{
      titleofActiveDay(){
        return store.getActiveDay().fullTitle;
      }
    },
}

</script>

<style lang="scss" scoped>
#calendar-entry {
  background: rgb(70, 86, 160);
  border: 1px solid #42b883;
  border-radius: 10px;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;

  .calendar-entry-note {
    input {
      width: 200px;
      font-weight: 600;
      border: 0;
      border-bottom: 1px solid #CCC;
      font-size: 15px;
      height: 30px;
      margin-bottom: 10px;

      &:focus {
        outline: none;
      }
    }

    .calendar-entry-day {
      color: #0e6e43;
      font-size: 12px;
      margin-bottom: 10px;
      padding-bottom: 5px;

      .bold {
        font-weight: 600;
      }
    }

    .submit {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>