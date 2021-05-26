<template>
  <div>
    <div class="ml-3 mt-3" style="margin-bottom: -22px">
      <div
        v-for="division in divisions"
        v-if="wardviews.divisionId == division.id"
      >
        <div
          v-for="allDistrict in allDistricts"
          v-if="wardviews.districtId == allDistrict.id"
        >
          <div
            v-for="allThana in allThanas"
            v-if="wardviews.thanaId == allThana.id"
          >
            <p>
              <span>{{ division.name }}</span>
              <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
              <span>{{ allDistrict.name }}</span>
              <i class="fa fa-arrow-circle-right" aria-hidden="true"></i
              >&nbsp;<span>{{ allThana.name }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row ml-2 mr-2 mt-0">
      <div
        class="col-6 col-md-2 col-xs-6 mt-3 mb-3"
        v-for="ward in wards"
        :key="ward.id"
      >
        <div class="card location">
          <img src="mapImage/location.jpg" />
          <div class="card-body p-2">
            <h5 style="color: #b70901; text-align: center" v-if="ward.ward">
              {{ ward.ward.ward }}
            </h5>
            <h5 style="color: #b70901; text-align: center" v-if="ward.union">
              {{ ward.union.union }}
            </h5>
            <small style="font-size: 77%; font-weight: 501" class="card-text"
              >Delivery Time: {{ ward.deliveryTime }}</small
            >

            <small style="font-size: 77%; font-weight: 501" class="card-text"
              >Delivery Charge:
              {{ ward.delivery_charge.deliveryCharge }} Tk</small
            >
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
      wards: [],
      divisions: [],
      allThanas: [],
      allDistricts: [],
    };
  },
  mounted() {
    this.viewWard();
    this.division();
    this.allDistrict();
    this.allThana();
  },
  methods: {
    viewWard() {
      axios.get(`wardLocation/${this.$route.params.id}`).then((res) => {
        this.wards = res.data.ward;
        this.wardviews = res.data.wardview;
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
    allThana() {
      axios.get("/allThana").then((res) => {
        this.allThanas = res.data.allThana;
      });
    },
  },
};
</script>


