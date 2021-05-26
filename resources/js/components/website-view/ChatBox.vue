<template>
<div class="d-none d-sm-block">
   <div class="chat" @click.prevent="openBox()"> 
 <i class="fab fa-facebook-messenger"></i>
 Chat Now
 </div>
   <div class="chatBox shadow-lg  bg-white rounded" v-if="open"> 
<div class="chatBoxHeader">
     <span v-if="activeUsers>0"><span class="badge badge-success"><i class="far fa-comments"></i></span>&nbsp;Online</span>
     <span v-else><span class="badge badge-danger"><i class="far fa-comments"></i></span>&nbsp;Offline</span>
     <span class="cross" @click.prevent="close()"><i class="fas fa-times"></i></span>
</div>
<div class="p-3 mb-1" style="height:177px; overflow-y:scroll" v-chat-scroll>
   <div  v-for="(message, index) in messages" :key="index">

    <span  v-if="message.sender_id==authUsers.id&message.sender_roll==1&&message.receiver_roll==null">
    
    <div class="chatRight ">
  
    <small >
   {{ message.message }}<br>
   {{ moment(message.created_at).format("DD-MM-YYYY,h:mm:ss") }}
 </small>
    <img :src="'frontend/image/blank.png'" class="rightImg" />
</div>
   </span>


  
    <span  v-if="message.receiver_id==authUsers.id&message.sender_roll==2&&message.receiver_roll==null">
         
    <div class="chatLeft ">
  
    <small >
   {{ message.message }}<br>
   {{ moment(message.created_at).format("DD-MM-YYYY,h:mm:ss") }}
 </small>
   <img :src="'frontend/image/blank2.jpg'" class="leftImg" /> 
</div>
   
   </span>
  
</div>

</div>
<div >
    <span class="text-muted" v-if="activeUser" >{{ activeUser.name }} is typing...</span>
     <input
                    @keydown="sendTypingEvent"
                    @keyup.enter="sendMessage"
                    v-model="newMessage"
                    type="text"
                    name="message"
                    placeholder="Enter your message..."
                    class="form-control">
</div>
 </div>
</div>
</template>

<script>
import moment from "moment";
export default {
    
 data(){
     return{
    open:false,
     messages: [],
                newMessage: '',
                users:[],
                receivers:[],
                authUsers:[],
                activeUsers:[],
                activeUser: false,
                typingTimer: false,
                user:this.$userId,
                 moment: moment,
     }
 },
   created() {
          
            this.fetchMessages();
            this.viewCustomer();
            this.viewReceiver();
        
            Echo.join('chat')
                .here(user => {
                    this.users = user;
                       
                })
                .joining(user => {
                    this.users.push(user);
                     
                })
                .leaving(user => {
                    this.users = this.users.filter(u => u.id != user.id);
                })
                .listen('ChatEvent',(event) => {
                    this.messages.push(event.chat);  
                    this.playSoundWarning()                  
                    this.viewReceiver();
                })
                .listenForWhisper('typing', user => {
                   this.activeUser = user;
                     
                    if(this.typingTimer) {
                        clearTimeout(this.typingTimer);
                    }
                   this.typingTimer = setTimeout(() => {
                       this.activeUser = false;
                   }, 1000);
                })
        },
 methods:{
        viewCustomer() {
                axios.get('customerGet').then(response => {
                    this.customers = response.data.allCustomer;
                    this.authUsers = response.data.auth;
                })
            },
        playSoundWarning() {
      var audioFile = new Audio(
        "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233563/warning.mp3"
      );
      audioFile.play();
    },
    openBox() {
        this.open=true;
    },
    close() {
        this.open=false;
    },
     viewReceiver() {
                axios.get('getReceiver').then(response => {
                    this.receivers = response.data.getReceiver;
                   this.activeUsers=response.data.active;
                })
            },
       fetchMessages() {
                axios.get('messages').then(response => {
                    this.messages = response.data;
                  
                })
            },
            sendMessage() {
              
                axios.post('messages', {message: this.newMessage,sender:this.authUsers.id,roll:1});
                this.newMessage = '';
                
            },
            sendTypingEvent() {
                Echo.join('chat')
                    .whisper('typing', this.user);
                console.log(this.user.name + ' is typing now')
            }
 }
}
</script>

