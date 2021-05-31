<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
        <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">
      Image Upload
        </h3>
        <div class="panel-body">
          <form @submit.prevent="update">
            <div class="form-group">
              <label for="exampleFormControlFile1">Upload Image</label>
              <input
                type="file"
                class="form-control-file"
                id="exampleFormControlFile1"
                @change="changeImage($event)"
                name="image"
              />
              <img
                :src="OurPhoto()"
               name="image"
                class="img-responsive"
                height="70"
                width="90"
              />
                <button
                  class="btn btn-danger"
                  @click.prevent="deleteImage()"
                >
                  <i class="fa fa-trash"></i>
                </button> 
            </div>
            <div class="form-group" v-if="imageOne==true">
              <label for="exampleFormControlFile1">Upload Image 1</label>
              <input
                type="file"
                class="form-control-file"
                id="exampleFormControlFile1"
                @change="changeImage1($event)"
                name="image1"
              />
              <img
               :src="OurPhoto1()"
                name="image1"
                class="img-responsive"
                height="70"
                width="90"
              />
                <button
                  class="btn btn-danger"
                  @click.prevent="deleteImage1()"
                >
                  <i class="fa fa-trash"></i>
                </button>
            </div>
            <div class="form-group" v-if="imageTwo==true">
              <label for="exampleFormControlFile1">Upload Image 2</label>
              <input
                type="file"
                class="form-control-file"
                id="exampleFormControlFile1"
                @change="changeImage2($event)"
                name="image2"
              />
              <img
                 :src="OurPhoto2()"
                name="image2"
                class="img-responsive"
                height="70"
                width="90"
              />
                <button
                  class="btn btn-danger"
                  @click.prevent="deleteImage2()"
                >
                  <i class="fa fa-trash"></i>
                </button>
            </div>
            <div class="form-group" v-if="imageThree==true">
              <label for="exampleFormControlFile1">Upload Image 3</label>
              <input
                type="file"
                class="form-control-file"
                id="exampleFormControlFile1"
                @change="changeImage3($event)"
                name="image3"
              />
              <img
                 :src="OurPhoto3()"
                name="image3"
                class="img-responsive"
                height="70"
                width="90"
              />
                <button
                  class="btn btn-danger"
                  @click.prevent="deleteImage3()"
                >
                  <i class="fa fa-trash"></i>
                </button>
            </div>
            <div class="form-group" v-if="imageFour==true">
              <label for="exampleFormControlFile1">Upload Image 4</label>
              <input
                type="file"
                class="form-control-file"
                id="exampleFormControlFile1"
                @change="changeImage4($event)"
                name="image4"
              />
              <img
                :src="OurPhoto4()"
                name="image4"
                class="img-responsive"
                height="70"
                width="90"
              />
                <button
                  class="btn btn-danger"
                  @click.prevent="deleteImage4()"
                >
                  <i class="fa fa-trash"></i>
                </button>
            </div>
            <div class="form-group" v-if="imageFive==true">
              <label for="exampleFormControlFile1">Upload Image 5</label>
              <input
                type="file"
                class="form-control-file"
                id="exampleFormControlFile1"
                @change="changeImage5($event)"
                name="image5"
              />
              <img
               :src="OurPhoto5()"
                name="image5"
                class="img-responsive"
                height="70"
                width="90"
              />
                <button
                  class="btn btn-danger"
                  @click.prevent="deleteImage5()"
                >
                  <i class="fa fa-trash"></i>
                </button>
            </div>
            <div class="form-group" v-if="imageSix==true">
              <label for="exampleFormControlFile1">Upload Image 6</label>
              <input
                type="file"
                class="form-control-file"
                id="exampleFormControlFile1"
                @change="changeImage6($event)"
                name="image6"
              />
              <img
                 :src="OurPhoto6()"
                name="image6"
                class="img-responsive"
                height="70"
                width="90"
              />
                <button
                  class="btn btn-danger"
                  @click.prevent="deleteImage6()"
                >
                  <i class="fa fa-trash"></i>
                </button>
            </div>
            <div class="form-group" v-if="imageSeven==true">
              <label for="exampleFormControlFile1">Upload Image 7</label>
              <input
                type="file"
                class="form-control-file"
                id="exampleFormControlFile1"
                @change="changeImage7($event)"
                name="image7"
              />
              <img
                 :src="OurPhoto7()"
                name="image7"
                class="img-responsive"
                height="70"
                width="90"
              />
                <button
                  class="btn btn-danger"
                  @click.prevent="deleteImage7()"
                >
                  <i class="fa fa-trash"></i>
                </button>
            </div>
            <div class="form-group" v-if="imageEight==true">
              <label for="exampleFormControlFile1">Upload Image 8</label>
              <input
                type="file"
                class="form-control-file"
                id="exampleFormControlFile1"
                @change="changeImage8($event)"
                name="image8"
              />
              <img
                :src="OurPhoto8()"
                name="image8"
                class="img-responsive"
                height="70"
                width="90"
              />
                <button
                  class="btn btn-danger"
                  @click.prevent="deleteImage8()"
                >
                  <i class="fa fa-trash"></i>
                </button>
            </div>
            <div class="form-group" v-if="imageNine==true">
              <label for="exampleFormControlFile1">Upload Image 9</label>
              <input
                type="file"
                class="form-control-file"
                id="exampleFormControlFile1"
                @change="changeImage9($event)"
                name="image9"
              />
              <img
                :src="OurPhoto9()"
                name="image9"
                class="img-responsive"
                height="70"
                width="90"
              />
                <button
                  class="btn btn-danger"
                  @click.prevent="deleteImage9()"
                >
                  <i class="fa fa-trash"></i>
                </button>
            </div>
             <div class="row">
              <div class="col-md-12">
                <div
                  class="form-group"
                  :class="{ 'has-error': form.errors.has('videoUrl') }"
                >
                  <label for="exampleFormControlInput1">Video Url</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Video Link"
                    v-model="form.videoUrl"
                    type="text"
                    name="videoUrl"
                    class="form-control"
                  />
                  <has-error :form="form" field="videoUrl"></has-error>
                </div>
              </div>
            </div>
               <div class="row">
              <div class="col-md-12">
                <div
                  class="form-group"
                  :class="{ 'has-error': form.errors.has('details') }"
                >
                  <label for="exampleFormControlInput1">Product Details</label>
                  <ckeditor
                    id="exampleFormControlInput1"
                    placeholder="Product Details"
                    v-model="form.details"
                  ></ckeditor>
                  <has-error :form="form" field="details"></has-error>
                </div>
              </div>
            </div>
               <div class="row">
              <div class="col-md-12">
                <div
                  class="form-group"
                 
                >
                  <label for="exampleFormControlInput1">Product Speciality</label>
                  <ckeditor
                    id="exampleFormControlInput1"
                    placeholder="Product Speciality"
                    v-model="form.speciality"
                  ></ckeditor>
                  <has-error :form="form" field="speciality"></has-error>
                </div>
              </div>
            </div>
  
         <label class="form-check-label" v-if="catLength<12">
  <span style="color:green" > You Can Add </span><span style="color:red">{{12-catLength}}</span><span style="color:green" > Product In home page </span>
  </label>
         <label class="form-check-label" v-else>
  <span style="color:green" > Home page product Limit Over</span>
  </label>
         <div class="form-check" v-if="catLength<12">
  <input class="form-check-input" v-model="form.homeStatus" name="homeStatus" type="checkbox" value="1" id="defaultCheck1">
  <label class="form-check-label" for="defaultCheck1">
    Add Home
  </label>
</div>
         <div class="form-check" v-else>
  <input class="form-check-input" v-model="form.homeStatus" name="homeStatus" disabled type="checkbox" value="1" id="defaultCheck1">
  <label class="form-check-label" for="defaultCheck1">
    Add Home
  </label>
</div>
            <button :disabled="form.busy" type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="item col-xs-12 col-md-2"></div>
    <!-- <div class="item col-xs-12 col-md-12 panel-body panel panel-default">
      <div class="table-responsive">
        <table
          data-toggle=""
          class="table table-responsive"
          cellspacing="1"
          width="200%"
        >
          <thead style="background: #e4e6ed">
            <tr>
              <th>ID</th>
              <th>Logo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(logo, index) in logos" :key="logo.id">
              <td>{{ index + 1 }}</td>
              <td>
                <img
                  :src="'/images/' + logo.image"
                  class="img-responsive"
                  height="35"
                  width="70"
                />
              </td>
              <td>
                <button
                  class="btn btn-danger"
                  @click.prevent="deletePost(logo.id)"
                >
                  <i class="fa fa-trash"></i>Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: new Form({
        details: "",
        speciality: "",
        videoUrl: "",
        image: "",
        image1: "",
        image2: "",
        image3: "",
        image4: "",
        image5: "",
        image6: "",
        image7: "",
        image8: "",
        image9: "",
        homeStatus:''
      }),
      logos: [],     
      catLength:'',     
      imageOne: true,
      imageTwo: true,
      imageThree: true,
      imageFour: true,
      imageFive: true,
      imageSix: true,
      imageSeven: true,
      imageEight: true,
      imageNine: true,
    };
  },
  mounted() {
    this.editImage();
    this.catProductLength();
  },
  methods: {
     playSound() {
      var audioFile = new Audio(
        "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3"
      );
      audioFile.play();
    },
     editImage() {
      axios.get(`catImage/${this.$route.params.id}`).then((res) => {
        this.form.fill(res.data);
      });
    },
     catProductLength() {
      axios.get(`catImage/${this.$route.params.id}/edit`).then((res) => {
        this.catLength=res.data;
      });
    },
    update() {
      axios.put(`catImage/${this.$route.params.id}`, this.form).then((res) => {      
         this.$router.push({ name: "productimage" });
        Toast.fire({
          icon: "success",
          title: "Successfully Updated",
        });
         this.playSound();
      });
    },
    add() {
      this.form
        .post("catImage", {
          method: "post",
          body: JSON.stringify(this.admintype),
          headers: {
            "content-type": "application/json",
          },
        })
        .then((response) => {
          this.form.reset();
       
          Toast.fire({
            icon: "success",
            title: "Successfully Upload",
          });
          this.playSound();
        })
        .catch((err) => console.log(err));
    },
    deleteImage(){
        this.form.image =''    
       
      
    },
    deleteImage1(){
        this.form.image1 ='',
        this.imageOne=false;
      
    },
    deleteImage2(){
        this.form.image2 ='',
        this.imageTwo=false;
      
    },
    deleteImage3(){
        this.form.image3 ='',
        this.imageThree=false;
      
    },
    deleteImage4(){
        this.form.image4 ='',
        this.imageFour=false;
      
    },
    deleteImage5(){
        this.form.image5 ='',
        this.imageFive=false;
      
    },
    deleteImage6(){
        this.form.image6 ='',
        this.imageSix=false;
      
    },
    deleteImage7(){
        this.form.image7 ='',
        this.imageSeven=false;
      
    },
    deleteImage8(){
        this.form.image8 ='',
        this.imageEight=false;
      
    },
    deleteImage9(){
        this.form.image9 ='',
        this.imageNine=false;
      
    },
  
    OurPhoto1(){
       if(this.form.image1!== null){
         let photo1 = this.form.image1;
         if (photo1.length >100 ){
              return this.form.image1;
         }
         else{
           return `productImage/${this.form.image1}`
         }
         }
       },
    OurPhoto2(){
      if(this.form.image2 !== null){
         let photo2 = this.form.image2;
         if (photo2.length >100 ){
              return this.form.image2;
         }
         else{
           return `productImage/${this.form.image2}`
         }
         }
       },
    OurPhoto3(){
      if(this.form.image3 !== null){
         let photo3 = this.form.image3;
         if (photo3.length >100 ){
              return this.form.image3;
         }
         else{
           return `productImage/${this.form.image3}`
         }
         }
       },
    OurPhoto4(){
      if(this.form.image4 !== null){
         let photo4 = this.form.image4;
         if (photo4.length >100 ){
              return this.form.image4;
         }
         else{
           return `productImage/${this.form.image4}`
         }
         }
       },
    OurPhoto5(){
      if(this.form.image5 !== null){
         let photo5 = this.form.image5;
         if (photo5.length >100 ){
              return this.form.image5;
         }
         else{
           return `productImage/${this.form.image5}`
         }
         }
       },
    OurPhoto6(){
      if(this.form.image6 !== null){
         let photo6 = this.form.image6;
         if (photo6.length >100 ){
              return this.form.image6;
         }
         else{
           return `productImage/${this.form.image6}`
         }
         }
       },
    OurPhoto7(){
      if(this.form.image7 !== null){
         let photo7 = this.form.image7;
         if (photo7.length >100 ){
              return this.form.image7;
         }
         else{
           return `productImage/${this.form.image7}`
         }
         }
       },
    OurPhoto8(){
      if(this.form.image8 !== null){
         let photo8 = this.form.image8;
         if (photo8.length >100 ){
              return this.form.image8;
         }
         else{
           return `productImage/${this.form.image8}`
         }
         }
       },
    OurPhoto9(){
      if(this.form.image9 !== null){
         let photo9 = this.form.image9;
         if (photo9.length >100 ){
              return this.form.image9;
         }
         else{
           return `productImage/${this.form.image9}`
         }
         }
       },
    changeImage(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.image = event.target.result;
        console.log(event.target.result);
      };
      reader.readAsDataURL(file);
      this.imageOne=true
    },
      OurPhoto(){
       if(this.form.image!== null){
         let photo = this.form.image;
         if (photo.length >100 ){
         return this.form.image;
              
         }
         else{
           return `productImage/${this.form.image}`
         }
       }
         
       },
    changeImage1(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.image1 = event.target.result;
        console.log(event.target.result);
      };
      reader.readAsDataURL(file);
      this.imageTwo=true
    },
    changeImage2(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.image2 = event.target.result;
        console.log(event.target.result);
      };
      reader.readAsDataURL(file);
      this.imageThree=true
    },
    changeImage3(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.image3 = event.target.result;
        console.log(event.target.result);
      };
      reader.readAsDataURL(file);
      this.imageFour=true
    },
    changeImage4(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.image4 = event.target.result;
        console.log(event.target.result);
      };
      reader.readAsDataURL(file);
      this.imageFive=true
    },
    changeImage5(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.image5 = event.target.result;
        console.log(event.target.result);
      };
      reader.readAsDataURL(file);
      this.imageSix=true
    },
    changeImage6(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.image6 = event.target.result;
        console.log(event.target.result);
      };
      reader.readAsDataURL(file);
      this.imageSeven=true
    },
    changeImage7(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.image7 = event.target.result;
        console.log(event.target.result);
      };
      reader.readAsDataURL(file);
      this.imageEight=true
    },
    changeImage8(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.image8 = event.target.result;
        console.log(event.target.result);
      };
      reader.readAsDataURL(file);
      this.imageNine=true
    },
    changeImage9(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.image9 = event.target.result;
        console.log(event.target.result);
      };
      reader.readAsDataURL(file);
      
    },
    viewLogo() {
      fetch("api/logos")
        .then((res) => res.json())
        .then((res) => {
          this.logos = res.data;
        })
        .catch((err) => console.log(err));
    },

    deletePost(id) {
      fetch(`api/logos/${id}`, {
        method: "delete",
        body: JSON.stringify(this.admintype),
        headers: {
          "content-type": "application/json",
        },
      }).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Deleted",
        });
        this.viewLogo();
      });
    },
  },
};
</script>