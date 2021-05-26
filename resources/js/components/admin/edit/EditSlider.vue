<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
        <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">
          Slider Image Upload
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
                  :class="{ 'has-error': form.errors.has('url') }"
                >
                  <label for="exampleFormControlInput1">Url</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Url"
                    v-model="form.url"
                    type="text"
                    name="url"
                    :class="{ 'is-invalid': form.errors.has('url') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="url"></has-error>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="form.up"
                      id="inlineCheckbox1"
                      value="1"
                    />
                    <label class="form-check-label" for="inlineCheckbox1"
                      >Up</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="form.left"
                      id="inlineCheckbox2"
                      value="2"
                    />
                    <label class="form-check-label" for="inlineCheckbox2"
                      >Left</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox3"
                      value="3"
                      v-model="form.right"
                    />
                    <label class="form-check-label" for="inlineCheckbox3"
                      >Right</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox3"
                      value="4"
                      v-model="form.notice"
                    />
                    <label class="form-check-label" for="inlineCheckbox3"
                      >Notice</label
                    >
                  </div>
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
        url: "",
        notice: "",
        up: "",
        left: "",
        right: "",
      }),
      
    };
  },
  mounted() {
    this.editSlider();
  },
  methods: {
    editSlider() {
      axios.get(`api/sliders/${this.$route.params.id}`).then((res) => {
        this.form.fill(res.data);
      });
    },
    update() {
      axios.put(`api/sliders/${this.$route.params.id}`, this.form).then((res) => {
        this.$router.push({ name: "slider" });
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