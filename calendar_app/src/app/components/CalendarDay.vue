<template>
    <div class="day column" @click="setActiveDay(day.id)">
        <div class="day-banner has-text-cntered">{{day.abbvTitle}}</div>
        <div class="day-details">
                <div class="day-number">{{day.id}}</div>
                <CalendarEvent v-for="(event,index) in day.events"
                :key="index"
                :event="event"
                :day="day"/>
            </div>
    </div>
</template>

<script>
import {store} from '../store'
import CalendarEvent from'./CalendarEvent.vue'
export default {
    name:"CalendarDay",
    props:['day'],
    components:{
        CalendarEvent
    },
    methods:{
      setActiveDay(dayId)
      {
        store.setActiveDay(dayId);
      }
    }
}

</script>
<style lang="scss" scoped>

.day {
    background-color: #cfc2c2;
    color: #FFF;
    border-left: 1px solid #8F8F8F;
    border-bottom: 1px solid #8F8F8F;
    font-size: 12px;
    cursor: pointer;

    &:hover {
      background: darken(#11b1bd,3%);
    }

    .day-banner {
      background-color: #e2dada;
      color: #FFF;
      padding: 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 12px;
      font-weight: 600;
    }

    .day-details {
      padding: 10px;
    }
     &:last-child {
    border-right: 1px solid #8F8F8F;
    }

    
}

</style>
