"use strict";

class EventHandler{
    constructor(){
        if (!EventHandler.instance){
            EventHandler.instance = this;
        }

        this.activeEvents = {};
        return EventHandler.instance;
    }

    addEventListener(target, eventName, callback, bubble){
        if (this.activeEvents[eventName] == undefined){
            this.activeEvents[eventName] = [];
        }

        if (target == 'canvas'){
            canvas.addEventListener(eventName, callback, bubble);
        }
        else if (target == 'window'){
            window.addEventListener(eventName, callback, bubble);
        }
        else {
            throwError(this, 'Currently only accepting events tied to the canvas or the window!');
        }
        this.activeEvents[eventName].push({target: target, callback: callback});
    }

    removeEventListenersByEventName(){
        var attachedEvents = this.activeEvents[eventName];
        if (attachedEvents == undefined){
            return;
        }
        for (var i = 0; i < attachedEvents.length; i++){
            var thisEvent = attachedEvents[i];
            if (thisEvent.target == 'canvas'){
                canvas.removeEventListener(eventName, thisEvent.callback, false);
            }
            else if (thisEvent.target == 'window'){
                window.removeEventListener(eventName, thisEvent.callback, false);
            }
            else {
                throwError(this, 'Currently only accepting events tied to the canvas or the window!');
            }
            attachedEvents.splice(i,1);
            i -= 1;
        }
    }

    removeAllEventListeners(){
        for (var eventName in this.activeEvents){
            this.removeEventListenersByEvent(eventName);
        }
    }
}
