<template>
  <div>
    <div class="container-fluid mt-5">
      <div class="row"  >
      <div
        class="col-12 col-md-10 col-xs-12 shadow-lg p-3 mb-5 bg-white rounded"
      >
        <h3 class="checkout1"> New Message List</h3>
        <div class="row"  >
          <div  >
          <div
            class="col-6 col-md-3 col-xs-6 mt-2 mb-2"
            style="margin-bottom: 10px"
           
            v-for="(message, index) in messages" :key="index"
            v-if="message.receiver_roll==null&message.receiver_id==null&message.status==0&message.count==0"
          >
            <div class="card" style="background: #68c49029" @click="sendMessage(message.sender_id)" @click.prevent="openBox(message.sender_id)">
              <div class="card-body" style="padding: 7px">
                <div class="row">
                  <div
                    class="col-12 col-md-4 col-xs-12 userimg"
                
                  >
                    <img :src="'frontend/image/blank.png'" width="58%;" />
                  </div>
                  <div class="col-12 col-md-8 col-xs-12">
                      <span v-if="message.sender_roll==1">
                          <span v-for="customer in customers" v-if="customer.id==message.sender_id">
                    <h5>{{customer.name}}</h5>
                      </span>
                      </span>
                    <p>  {{ message.message }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div
        class="col-12 col-md-2 col-xs-12 shadow-lg p-3 mb-5 bg-white rounded"
      >
        <h3 class="checkout1">Customer</h3>
        <div class="row"  >
          <div  >
          <div
            class="col-12 col-md-12 col-xs-6 mt-2 mb-2"
            style="margin-bottom: 10px"
           
            v-for="(message, index) in messages" :key="index"
            v-if="message.receiver_id==infos.id&message.messageCount==0&message.sender_roll==1"
          >
            <div class="card" style="background: #68c49029" @click="sendMessage(message.sender_id)" @click.prevent="openBox(message.sender_id)">
              <div class="card-body" style="padding: 7px">
                <div class="row">
                  <div
                    class="col-12 col-md-4 col-xs-12 userimg"
                
                  >
                    <img :src="'frontend/image/blank.png'" width="58%;" />
                  </div>
                  <div class="col-12 col-md-8 col-xs-12">
                      <span v-if="message.sender_roll==1">
                          <span v-for="customer in customers" v-if="customer.id==message.sender_id">
                    <h5>{{customer.name}}</h5>
                     <span class="badge badge-danger"  v-for="(message, index) in messages" :key="index"
            v-if="message.receiver_id==infos.id&message.receiver_roll==NULL&message.sender_id==customer.id&message.status==0&message.sender_roll==1">new </span>
                      </span>
                    
                      </span>
                  
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
<!-- chatbox -->
    <div class="chatBox shadow-lg  bg-white rounded" v-if="open"> 
<div class="chatBoxHeader">
      <span v-for="customer in customers" v-if="customer.id==senderId">
                   {{customer.name}}
                    </span>
     <span class="cross" @click.prevent="close()"><i class="fa fa-times" aria-hidden="true"></i>
</span>
</div>
<div class="p-3 mb-1" style="height:177px; overflow-y:scroll" v-chat-scroll>
   <div  v-for="(message, index) in messages" :key="index">

    <span  v-if="message.receiver_roll==NULL&&message.receiver_id==NULL&&message.sender_id==senderId&&message.sender_roll==1">
    <div class="chatLeft ">
  
    <small >
   {{ message.message }}
 </small>
   
</div>
   </span>
    <span  v-if="message.sender_id==infos.id&&message.receiver_id==senderId&message.sender_roll==2&&message.receiver_roll==NULL">
    <div class="chatRight ">
  
    <small >
   {{ message.message }}
 </small>
   
</div>
   </span>

  
    <span  v-if="message.receiver_id==infos.id&&message.receiver_roll==NULL&&message.sender_id==senderId&&message.sender_roll==1">
    <div class="chatLeft ">
  
    <small >
   {{ message.message }}
 </small>
   
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
 <!--./ chatbox -->
  </div>
</template>

<script>
   export default {
    
        data() {
            return {
                messages: [],
                newMessage: '',
                users:[],
                customers:[],
                senders:[],
                infos:[],
                receivers:[],
                activeUser: false,
                typingTimer: false,
                open:false,
                senderId:'',
                user:this.$userId,
            }
        },
        created() {
           
            this.fetchMessages();
            this.viewCustomer();
            this.viewSender();
            this.viewSenderInfo();
            
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
                     this.fetchMessages();
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
       methods: {
           openBox(id) {
        this.open=true;
      return this.senderId=id;
    },
    close() {
        this.open=false;
    },
             playSoundWarning() {
      var audioFile = new Audio(
        "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233563/warning.mp3"
      );
       audioFile.play();},
            fetchMessages() {
                axios.get('messages').then(response => {
                    this.messages = response.data;
                   
                })
            },
            viewSender() {
                axios.get('getSender').then(response => {
                    this.senders = response.data.getSender;
                   
                })
            },
            viewSenderInfo() {
                axios.get('getSenderInfo').then(response => {
                    this.infos = response.data.getSenderInfo;
                   
                })
            },
          
            viewCustomer() {
                axios.get('customerGet').then(response => {
                    this.customers = response.data.allCustomer;
                })
            },
            sendMessage($id) {
              
                axios.post('messages', {message: this.newMessage,status:$id,receiver:this.senderId,roll:2});
                this.newMessage = '';
                this.fetchMessages();
            },
            sendTypingEvent() {
                Echo.join('chat')
                    .whisper('typing', this.user);
                console.log(this.user.name + ' is typing now')
            }
        }
    }
</script>

