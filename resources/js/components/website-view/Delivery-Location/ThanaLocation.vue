<template>
  <div>
    <div
      class="ml-3 mt-3"
      style="margin-bottom: -22px"
      v-for="allDistrict in allDistricts"
      v-if="$route.params.id == allDistrict.id"
    >
      <div
        v-for="division in divisions"
        v-if="allDistrict.division_id == division.id"
      >
        <p>
          <span>{{ division.name }}</span>
          <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
          <span>{{ allDistrict.name }}</span>
        </p>
      </div>
    </div>
  
      <div class="row ml-2 mr-2 mt-0">
      <div   v-for="thana in thanas"
        :key="thana.id">
       <router-link
         :to="{ name: 'wardlocation', params: { id: thana.thanaId } }"
        >
      <div
        class="col-6 col-md-2 col-xs-6 mt-3 mb-3"
       
      >
        <div class="card location">
          <img src="mapImage/location.jpg" />
          <div class="card-body p-2">
            <h5 style="color: #b70901; text-align: center" >
              {{ thana.thana.name }}
            </h5>
           
         
          </div>
        </div>
      </div>
       </router-link>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thanas: [],
      allDistricts: [],
      divisions: [],
    };
  },
  mounted() {
    this.viewThana();
    this.allDistrict();
    this.division();
  },
  methods: {
    viewThana() {
      axios
        .get(`deliveryLocationWeb/${this.$route.params.id}/edit`)
        .then((res) => {
          this.thanas = res.data;
        });
    },
    allDistrict() {
      axios.get("/allDistrict").then((res) => {
        this.allDistricts = res.data.allDistrict;
      });
    },
    division() {
      axios.get("/division").then((res) => {
        this.divisions = res.data.division;
      });
    },
  },
};
</script>


