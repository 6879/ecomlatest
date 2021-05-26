<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
        <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">
          Slider Image Upload
        </h3>
        <div class="panel-body">
          <form @submit.prevent="add">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="exampleFormControlFile1">Upload Logo</label>
                  <input
                    type="file"
                    class="form-control-file"
                    id="exampleFormControlFile1"
                    @change="changeImage($event)"
                    name="image"
                  />
                  <img
                    :src="form.image"
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
                <div
                  class="form-group"
                 
                >
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
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-12 panel-body panel panel-default">
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
              <th>Image</th>
              <th>Url</th>
              <th>Position</th>             
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(slider, index) in sliders" :key="slider.id">
              <td>{{ index + 1 }}</td>
              <td>
                <img
                  :src="'/images/' + slider.image"
                  class="img-responsive"
                  height="35"
                  width="70"
                />
              </td>
              <td>
                {{slider.url}}
              </td>
              <td v-if="slider.up==1">
                Up
              </td>
              <td v-if="slider.left==1">
                Left
              </td>
              <td v-if="slider.right==1">
                Right
              </td>
              <td v-if="slider.notice==1">
                Notice
              </td>
              <td>
                <router-link
                  :to="{ name: 'editslider', params: { id: slider.id } }"
                  class="btn btn-primary"
                  ><i class="fa fa-edit"></i>Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  @click.prevent="deletePost(slider.id)"
                >
                  <i class="fa fa-trash"></i>Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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
      sliders: [],
    };
  },
  mounted() {
    this.viewSlider();
  },
  methods: {
    add() {
      this.form
        .post("api/sliders", {
          method: "post",
          body: JSON.stringify(this.admintype),
          headers: {
            "content-type": "application/json",
          },
        })
        .then((response) => {
          this.form.reset();
          this.viewSlider();
          Toast.fire({
            icon: "success",
            title: "Successfully Upload",
          });
        })
        .catch((err) => console.log(err));
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
    viewSlider() {
      fetch("api/sliders")
        .then((res) => res.json())
        .then((res) => {
          this.sliders = res.data;
        })
        .catch((err) => console.log(err));
    },

    deletePost(id) {
      fetch(`api/sliders/${id}`, {
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
        this.viewSlider();
      });
    },
  },
};
</script>