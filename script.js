var eventCounter=0;
document.getElementById("event").addEventListener("click",function(ev){
  if(eventCounter%2==0){
     {
         deActivateEventButton();//change event background to black
         activateNotificationPanel();//open notification panell
         deActivateHomeButton();//change home button to black
         deActivateProfilePanel();//close profile panel
         profileCounter=0;
         document.getElementById("event-box").setAttribute("style","display:none");
        }
    }else{
        {
            activateEventButton();
            deActivateNotificationPanel();
            activateHomeButton();
        
      }
    }
    eventCounter++;
});
var profileCounter=0;
document.getElementById("profile").addEventListener("click",function(ev){
   if(profileCounter%2==0){
       {
           activateProfilePanel();
           deActivateHomeButton();
           deActivateNotificationPanel();
           activateEventButton();
           eventCounter=0;
           
   }
    
}else{
       {
           deActivateProfilePanel();
           activateHomeButton(); 
      }
   }
   profileCounter++;
});
function deActivateDirectButton(){
    document.getElementById("direct-true").setAttribute("style","display:none");
    document.getElementById("direct-false").setAttribute("style","display:block");

}
function activateDirectButton(){
    document.getElementById("direct-true").setAttribute("style","display:block");
    document.getElementById("direct-false").setAttribute("style","display:none");
}
function activateHomeButton(){
    document.getElementById("home-true").setAttribute("style","display:block");
    document.getElementById("home-false").setAttribute("style","display:none");

}
function deActivateHomeButton(){
    document.getElementById("home-true").setAttribute("style","display:none");
    document.getElementById("home-false").setAttribute("style","display:block");

}
function activateEventButton(){
    document.getElementById("event-true").setAttribute("style","display:block");
    document.getElementById("event-false").setAttribute("style","display:none");

}
function deActivateEventButton(){
    document.getElementById("event-true").setAttribute("style","display:none");
    document.getElementById("event-false").setAttribute("style","display:block");
   
}
function activateNotificationPanel(){
    document.getElementById("notification-panel").setAttribute("style","display:block");
    document.getElementById("notification-bubble").setAttribute("style","display:block");

}
function deActivateNotificationPanel(){
    document.getElementById("notification-panel").setAttribute("style","display:none");
    document.getElementById("notification-bubble").setAttribute("style","display:none");

}
function activateProfilePanel(){
    document.getElementById("profile-panel").setAttribute("style","display:block");
    document.getElementById("profile-bubble").setAttribute("style","display:block");

}
function deActivateProfilePanel(){
    document.getElementById("profile-panel").setAttribute("style","display:none");
    document.getElementById("profile-bubble").setAttribute("style","display:none");

}
var scrolling=0;
document.getElementById("story-right-icon").addEventListener("click",function(ev){
    ev.preventDefault();
   document.getElementById("story-list").scrollLeft+=350;
});
document.getElementById("story-left-icon").addEventListener("click",function(ev){
    ev.preventDefault();
    document.getElementById("story-list").scrollLeft-=350;
 });