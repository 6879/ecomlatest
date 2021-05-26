<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
        <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">
          FAQ Information
        </h3>
        <div class="panel-body">
          <form @submit.prevent="add">
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
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(faq, index) in faqs" :key="faq.id">
              <td>{{ index + 1 }}</td>
              <td>
                <img
                  :src="'/images/' + faq.image"
                  class="img-responsive"
                  height="35"
                  width="70"
                />
              </td>
              <td>
                <div v-html="faq.details"></div>
              </td>
              <td>
                <router-link
                  :to="{ name: 'editfaq', params: { id: faq.id } }"
                  class="btn btn-primary"
                  ><i class="fa fa-edit"></i>Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  @click.prevent="deletePost(faq.id)"
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
        details: "",
      }),
      faqs: [],
    };
  },
  mounted() {
    this.viewFAQ();
  },
  methods: {
    add() {
      this.form
        .post("api/faqs", {
          method: "post",
          body: JSON.stringify(this.faq),
          headers: {
            "content-type": "application/json",
          },
        })
        .then((response) => {
          this.form.reset();
          this.viewFAQ();
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
    viewFAQ() {
      fetch("api/faqs")
        .then((res) => res.json())
        .then((res) => {
          this.faqs = res.data;
        })
        .catch((err) => console.log(err));
    },

    deletePost(id) {
      fetch(`api/faqs/${id}`, {
        method: "delete",
        body: JSON.stringify(this.faq),
        headers: {
          "content-type": "application/json",
        },
      }).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Deleted",
        });
        this.viewFAQ();
      });
    },
  },
};
</script>