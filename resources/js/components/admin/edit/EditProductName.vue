<template>
  <div>
    <div class="row" data-toggle="isotope">
      <div class="col-xs-12 col-md-2"></div>
      <div class="col-xs-12 col-md-8">
        <div class="panel panel-default">
          <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">
          Product Name Entry
          </h3>
          <div class="panel-body">
            <form @submit.prevent="update()">
             

              <div class="row">
                <div class="col-md-12">
                  <div
                    class="form-group"
                    :class="{ 'has-error': form.errors.has('pname') }"
                  >
                    <label for="exampleFormControlInput1">Product Name</label>
                    <input
                      id="exampleFormControlInput1"
                      placeholder="Product Name"
                      v-model="form.pname"
                      type="text"
                      name="pname"
                      class="form-control"
                    />
                    <has-error :form="form" field="pname"></has-error>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div
                    class="form-group"
                    :class="{ 'has-error': form.errors.has('pcode') }"
                  >
                    <label for="exampleFormControlInput1">Product Code</label>
                    <input
                      id="exampleFormControlInput1"
                      placeholder="Product Code"
                      v-model="form.pcode"
                      type="text"
                      name="pcode"
                      class="form-control"
                    />
                    <has-error :form="form" field="pcode"></has-error>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div
                    class="form-group"
                    :class="{ 'has-error': form.errors.has('pqrcode') }"
                  >
                    <label for="exampleFormControlInput1"
                      >Product QR Code</label
                    >
                    <input
                      id="exampleFormControlInput1"
                      placeholder="Product QR Code"
                      v-model="form.pqrcode"
                      type="text"
                      name="pqrcode"
                      class="form-control"
                    />
                    <has-error :form="form" field="pqrcode"></has-error>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12" style="height: 133px;">
                  <div
                    class="form-group"
                    
                  >
                    <label for="exampleFormControlInput1"
                      >Product Keyword</label
                    >
               <b-form-tags input-id="tags-basic" v-model="form.keyword"></b-form-tags>
                    <has-error :form="form" field="keyword"></has-error>
                  </div>
                </div>
              </div>

              <button
                :disabled="form.busy"
                type="submit"
                class="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-2"></div>
    </div>
    
  </div>
</template>

<script>
import VueTagsInput from '@johmun/vue-tags-input';
export default {
      components: {
    VueTagsInput,
  },
  data() {
    return {
      form: new Form({
        category: "",
        pname: "",
        pcode: "",
        pqrcode: "",
        keyword:[],
        subCategory: "",
        thirdCategory: "",
      }),
     
    };
  },
  mounted() {
    this.editProductname();
  },
  methods: {
   editProductname() {
      axios.get(`api/productnames/${this.$route.params.id}`).then((res) => {
        this.form.fill(res.data);
      });
    },
    update() {
      axios.put(`api/productnames/${this.$route.params.id}`, this.form).then((res) => {
        this.$router.push({ name: "productname" });
        Toast.fire({
          icon: "success",
          title: "Successfully Updated",
        });
      });
    },
   

  },
};
</script>