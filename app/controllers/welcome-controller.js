import store from "../store.js";
export default class Welcome {
  constructor() {
    let second = 1000;
    this.military = "Military";
    this.standard = "Standard";
    this.chosenTime = this.standard;
    this.displayWelcome(this);
    setInterval(this.displayWelcome,60*second,this);
    setInterval(this.displayTime,1000,this)
  }
  displayWelcome(Wel) {
    let DateObj = new Date();
    let time;
    Wel.chosenTime == Wel.standard ? time = DateObj.toLocaleTimeString():time = DateObj.toTimeString().split(" ")[0];
    let day = DateObj.toDateString();
    let hour = Math.floor(DateObj.getHours() / 6);
    let greeting = "";
    switch (hour) {
      case 0:
      case 1:
        greeting = "Good Morning";
        break;
      case 2:
        greeting = "Good Afternoon";
        break;
      case 3:
        greeting = "Good Evening";
        break;
    }
    let welcome = `<div class="text-center border rounded bg-primary"><h3>${greeting}</h3> <a href="#" data-toggle="tooltip" title="Click To Change User"><button type="button" class="btn btn-primary btn-lg text-capitalize font-weight-bolder" id="userName" data-toggle="modal" data-target="#userModal">${store.State.user}
    </button></a>
      <h6 id="day">${day}</h6>
      <h2 id="time">${time}</h2>`;
    document.getElementById("welcome").innerHTML = welcome;
  }
  switchTIme(evt){
    let DateObj = new Date();
    this.chosenTime == this.standard ? (document.getElementById("time").textContent = DateObj.toTimeString().split(" ")[0],document.getElementById("switchTime").innerText = this.standard,this.chosenTime = this.military) :(document.getElementById("time").textContent = DateObj.toLocaleTimeString(),document.getElementById("switchTime").innerText = this.military,this.chosenTime=this.standard) ;
  }
  displayTime(Wel){
    let time;
    let DateObj = new Date();
    Wel.chosenTime == Wel.standard ? time = DateObj.toLocaleTimeString():time = DateObj.toTimeString().split(" ")[0];
    document.getElementById("time").innerText = time;
  }
}
