import {seedData} from "./seed"
export const store = {
    state:{
        seedData
    },
    getActiveDay(){
        return this.state.seedData.find((day)=>day.active);
    },
    setActiveDay(dayId){
        this.state.seedData.map((dayObj)=>{
            dayObj.id ===dayId ? dayObj.active = true: dayObj.active=false;
        });
    },
    getEventObj(dayId,eventDetails){
        const dayObj = store.state.seedData.find(day=>day.id===dayId);
        return  dayObj.events.find(event=>event.details===eventDetails);
    },
    submitEvent(eventDetails){
        if(eventDetails==="") return this.error=true;
        const activeDay=this.getActiveDay();
        activeDay.events.push({"details":eventDetails,"edit":false});
        this.inputEntry="";
        this.error=false;
    },
    editEvent(dayId,eventDetails){
        this.resetEditOfAllEvents();
        const eventObj= this.getEventObj(dayId,eventDetails);
       
        eventObj.edit=true;
    },
    resetEditOfAllEvents(){
        this.state.seedData.map((dayObj)=>{
            dayObj.events.map((event)=>{
                event.edit=false;
            });
        });
    },
    updateEvent(dayId,orginalEventDetails,updatedEventDetails){
       const eventObj = this.getEventObj(dayId,orginalEventDetails);
        eventObj.details=updatedEventDetails;
        eventObj.edit=false;
    },
    deleteEvent(dayId,eventDetails){
        const dayObj=this.state.seedData.find(day=>day.id===dayId);
        const eventIndexToRemove = dayobj.events.findIndex(event => event.details===eventDetails);
        dayObj.events.splice(eventIndexToRemove,1);
    }
}