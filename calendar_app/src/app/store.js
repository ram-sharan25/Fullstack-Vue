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
    submitEvent(eventDetails){
        if(eventDetails==="") return this.error=true;
        const activeDay=this.getActiveDay();
        activeDay.events.push({"details":eventDetails,"edit":false});
        this.inputEntry="";
        this.error=false;
    }
}