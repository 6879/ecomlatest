<template>
  <div>
    <div
      class="ml-3 mt-3"
      style="margin-bottom: -14px"
      v-for="division in divisions"
      v-if="$route.params.id == division.id"
    >
      <h5>{{ division.name }}</h5>
    </div>
   

    <div class="row ml-2 mr-2 mt-0">
      <div  v-for="district in districts"
        :key="district.id">
       <router-link
          :to="{ name: 'thanalocation', params: { id: district.districtId } }"
        >
      <div
        class="col-6 col-md-2 col-xs-6 mt-3 mb-3"
       
      >
        <div class="card location">
          <img src="mapImage/location.jpg" />
          <div class="card-body p-2">
            <h5 style="color: #b70901; text-align: center" >
              {{ district.district.name }}
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
      locationId: "",
      districts: [],
      divisions: [],
    };
  },
  mounted() {
    this.viewDistrict();
    this.division();
  },

  methods: {
    viewDistrict() {
      axios.get(`deliveryLocationWeb/${this.$route.params.id}`).then((res) => {
        this.districts = res.data;
      });
    },
    division() {
      axios.get("/division").then((res) => {
        this.divisions = res.data.division;
      });
    },
  },

  watch: {
    $route(to, from) {
      this.viewDistrict();
      this.viewDistrict();
      this.division();
      this.$route.params.id = "";
    },
  },
};
</script>


