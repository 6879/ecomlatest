<template>
 <div class="row" data-toggle="isotope">
    <div class="col-xs-12 col-md-3"></div>
    <div
      class="col-xs-12 col-md-6 boxborder bg-white panel-body panel panel-default"
      style="padding-left: 0; padding-right: 0"
    >
      <h1
        style="
          background: skyblue;
          margin: 0;
          padding: 10px;
          color: white;
          text-align: center;
        "
      >
        Color List
      </h1>

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
              <th>Color</th>
              <th>Created Date</th>
            </tr>
          </thead>
          <tbody v-for="(color, index) in colors"  :key="color.id">
            <tr v-if="index%2==0" style="background-color: white;">
              <td>{{ index + 1 }}</td>
              <td>{{ color.color }}</td>
              <td>{{ moment(color.created_at).format("DD-MM-YYYY") }}</td>
            </tr>
            <tr v-else style="background-color: #e2d9d9;">
              <td>{{ index + 1 }}</td>
              <td>{{ color.color }}</td>
              <td>{{ moment(color.created_at).format("DD-MM-YYYY") }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-xs-12 col-md-3"></div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      form: new Form({
      color: "",     
      }),
     colors: [],
      moment: moment,
    };
  },
  mounted() {
    this.viewColor();
  },
  methods: {
  add() {
      this.form
        .post("api/colors", {
          method: "post",
          body: JSON.stringify(this.brand),
          headers: {
            "content-type": "application/json",
          },
        })
         .then((response) => {
          this.form.reset();
          this.viewColor();
          Toast.fire({
            icon: "success",
            title: "Successfully Saved",
          });
        })
        .catch((err) => console.log(err));
    },
    viewColor() {
      fetch("api/colors")
        .then((res) => res.json())
        .then((res) => {
          this.colors = res.data;
        })
        .catch((err) => console.log(err));
    },

    deletePost(id) {
      fetch(`api/colors/${id}`, {
        method: "delete",
        body: JSON.stringify(this.brand),
        headers: {
          "content-type": "application/json",
        },
      }).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Deleted",
        });
        this.viewColor();
      });
    },
  },
};
</script>