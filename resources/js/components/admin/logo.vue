<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
        <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">
      Logo Upload
        </h3>
        <div class="panel-body">
          <form @submit.prevent="add">
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: new Form({
        image: "",
      }),
      logos: [],
    };
  },
  mounted() {
    this.viewLogo();
  },
  methods: {
    add() {
      this.form
        .post("api/logos", {
          method: "post",
          body: JSON.stringify(this.admintype),
          headers: {
            "content-type": "application/json",
          },
        })
        .then((response) => {
          this.form.reset();
          this.viewLogo();
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