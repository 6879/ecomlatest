<template>
  <div class="row">
    <div class="col-md-4 col-sm-6 col-xs-12"></div>
    <div class="col-md-4 col-sm-6 col-xs-12">
      <div class="panel panel-default widget-user-1 text-center">
        <form @submit.prevent="changeImage($event)">
          <div class="avatar">
            <img
              :src="OurPhoto()"
              style="border-radius: 50%"
              name="image"
              height="200"
              width="200"
              alt=""
              class="img-circle"
            />
            <span class="proImage">
              <i class="fa fa-camera" aria-hidden="true"
                ><input type="file" @change="changeImage($event)" name="image"
              /></i>
            </span>
            <h3>{{ users.name }}</h3>
            <a href="#" class="btn btn-success"
              >{{ users.designation.adminType }}
              <i class="fa fa-check-circle fa-fw"></i
            ></a>
            <center>
              <i class="fa fa-star ratting"></i>
              <i class="fa fa-star ratting"></i>
              <i class="fa fa-star ratting"></i>
              <i class="fa fa-star ratting"></i>
              <i class="fa fa-star ratting"></i>
            </center>
          </div>
        </form>

        <div class="profile-icons margin-none">
          <span><i class="fa fa-users"></i> 372</span>
          <span><i class="fa fa-photo"></i> 43</span>
          <span><i class="fa fa-video-camera"></i> 3</span>
        </div>
        <div class="panel-body" style="text-align: left; margin-left: 12px">
          <div class="expandable expandable-indicator-white expandable-trigger">
            <div class="expandable-content">
              <p>
                <i
                  class="fa fa-check-circle-o"
                  style="color: #0a79d8"
                  aria-hidden="true"
                ></i>
                <strong>Email:</strong>&nbsp;{{ users.email }}
              </p>
              <p>
                <i
                  class="fa fa-check-circle-o"
                  style="color: #0a79d8"
                  aria-hidden="true"
                ></i>
                <strong>Phone:</strong>&nbsp;{{ userDetail.phone }}
              </p>
              <p>
                <i
                  class="fa fa-check-circle-o"
                  style="color: #0a79d8"
                  aria-hidden="true"
                ></i>
                <strong>Education Qualification:</strong>&nbsp;{{
                  userDetail.eduQualification
                }}
              </p>
              <p>
                <i
                  class="fa fa-check-circle-o"
                  style="color: #0a79d8"
                  aria-hidden="true"
                ></i>
                <strong>Skill:</strong>&nbsp;{{ userDetail.skill }}
              </p>
              <p>
                <i
                  class="fa fa-check-circle-o"
                  style="color: #0a79d8"
                  aria-hidden="true"
                ></i>
                <strong>Exprience:</strong>&nbsp;{{ userDetail.exprience }}
              </p>
              <p>
                <i
                  class="fa fa-check-circle-o"
                  style="color: #0a79d8"
                  aria-hidden="true"
                ></i>
                <strong>Present Adddress:</strong>&nbsp;{{
                  userDetail.presentAddress
                }}
              </p>
              <p>
                <i
                  class="fa fa-check-circle-o"
                  style="color: #0a79d8"
                  aria-hidden="true"
                ></i>
                <strong>Premanent Adddress:</strong>&nbsp;{{
                  userDetail.permanentAddress
                }}
              </p>
              <div class="expandable-indicator"><i></i></div>
            </div>
          </div>
        </div>
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

      users: "",
      userDetail: "",
    };
  },
  mounted() {
    this.viewUser();
  },
  computed() {
    this.OurPhoto();
  },
  methods: {
    OurPhoto() {
      let photo = this.form.image;
      if (photo.length > 100) {
        return this.form.image;
      } else {
        return `adminProfileImage/${this.userDetail.image}`;
      }
    },
    changeImage(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.image = event.target.result;
        console.log(event.target.result);
        axios
          .put(`userInfo/${this.userDetail.id}`, this.form)
          .then((res) => {});
      };
      reader.readAsDataURL(file);
    },
    update() {},
    viewUser() {
      axios.get("userInfo").then((res) => {
        this.users = res.data.user;
        this.userDetail = res.data.userDetails;
      });
    },
  },
};
</script>
