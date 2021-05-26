<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
        <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">
          Edit FAQ Information
        </h3>
        <div class="panel-body">
          <form @submit.prevent="update">
            <div class="row">
              <div class="col-md-12">
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
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div
                  class="form-group"
                  :class="{ 'has-error': form.errors.has('details') }"
                >
                  <label for="exampleFormControlInput1">Privacy Details</label>
                 <ckeditor
                    id="exampleFormControlInput1"
                    placeholder="Privacy Details"
                    v-model="form.details"
                   
                  ></ckeditor>
                  <has-error :form="form" field="details"></has-error>
                </div>
              </div>
            </div>

            <button :disabled="form.busy" type="submit" class="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="item col-xs-12 col-md-2"></div>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: new Form({
        image: "",
        details: "",
      }),
      faqs: [],
    };
  },
  mounted() {
    this.editFAQ();
  },
  methods: {
   editFAQ() {
      axios.get(`api/faqs/${this.$route.params.id}`).then((res) => {
        this.form.fill(res.data);
      });
    },
    update() {
      axios.put(`api/faqs/${this.$route.params.id}`, this.form).then((res) => {
        this.$router.push({ name: "faq" });
        Toast.fire({
          icon: "success",
          title: "Successfully Updated",
        });
      });
    },
    changeImage(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.image = event.target.result;
        console.log(event.target.result);
      };
      reader.readAsDataURL(file);
    },
     OurPhoto(){
         let photo = this.form.image;
         if (photo.length >100 ){
              return this.form.image;
         }
         else{
           return `images/${this.form.image}`
         }
       },

  },
};
</script>