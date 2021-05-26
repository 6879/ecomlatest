 <template>
  <div>
    
    <div v-for="(menu, index) in menus" :key="menu.id">
      <div class="accordion" role="tablist">
        
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <router-link
              style="text-decoration: none; color: inherit"
              :to="{ name: 'view', params: { id: menu.id } }"
            >
              <li
                v-b-toggle="'accordionG' + index"
                v-on:click="toggleItem(index)"
                class="d-flex"
              >
                <img class="menuImage" :src="'categoryImage/' + menu.image" />&nbsp;
                <span> {{ menu.catName }}</span>
                <strong class="ml-auto">
                  <i
                    :class="[isActive(index) ? 'fa-minus' : 'fa-plus']"
                    class="more-less fa d-flex"
                  ></i
                ></strong>
              </li>
            </router-link>
          </b-card-header>
          <b-collapse
            v-bind:id="'accordionG' + index"
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body style="padding: 10px">
              <div v-for="(submenu, index) in submenus" :key="submenu.id">
                <div v-if="submenu.preId == menu.id">
                  <div class="accordion" role="tablist">
                    <b-card no-body class="mb-1">
                      <b-card-header
                        header-tag="header"
                        class="p-1"
                        role="tab1"
                      >
                        <router-link
                          style="text-decoration: none; color: inherit"
                          :to="{
                            name: 'viewthird',
                            params: { id: submenu.id },
                          }"
                        >
                          <li
                            v-b-toggle="'accordionG2' + index"
                            class="d-flex"
                            v-on:click="toggleItem2(index+1)"
                          >
                            <span> {{ submenu.catName }}</span>
                            <strong class="ml-auto">
                              <i
                                :class="[
                                  isActive2(index+1) ? 'fa-minus' : 'fa-plus',
                                ]"
                                class="more-less fa d-flex in"
                              ></i>
                            </strong>
                          </li>
                        </router-link>
                      </b-card-header>
                    </b-card>
                    <b-collapse
                      v-bind:id="'accordionG2' + index"
                      accordion="my-accordion1"
                      role="tabpanel1"
                    >
                      <b-card-body>
                          <div v-for="(thirdmenu, index) in thirdmenus" :key="thirdmenu.id">
                <div v-if="thirdmenu.preId == submenu.id">
                  <div class="accordion" role="tablist">
                        <b-card-header
                        header-tag="header"
                        class="p-1"
                        role="tab1"
                      >
                        <router-link
                          style="text-decoration: none; color: inherit"
                          :to="{
                            name: 'viewthird',
                            params: { id: thirdmenu.id },
                          }"
                        >
                          <li
                            v-b-toggle="'accordionG3' + index"
                            class="d-flex"
                          
                          >
                            <span> {{ thirdmenu.catName }}</span>
                            <strong class="ml-auto">
                             
                            </strong>
                          </li>
                        </router-link>
                      </b-card-header>
                  </div>
                </div>
                </div>
                         </b-card-body>
                    </b-collapse>
                  </div>
                </div>
              </div>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>
    
  </div>
  
</template>



<script>
export default {
  data() {
    return {
      toggled: [],
      menus: [],
      submenus: [],
      thirdmenus: [],
    };
  },
 async mounted() {
    this.viewMenu();
    this.viewSubMenu();
    this.viewThirdMenu();
  },

  methods: {
    isActive(item) {
      return this.toggled.indexOf(item) >= 0;
    },
    toggleItem(item) {
      const index = this.toggled.indexOf(item);

      if (index >= 0) {
        this.toggled.splice(index, 1);
        return;
      }

      this.toggled.push(item);
    },
    isActive2(item) {
      return this.toggled.indexOf(item) >= 0;
    },
    toggleItem2(item) {
      const index = this.toggled.indexOf(item);

      if (index >= 0) {
        this.toggled.splice(index, 1);
        return;
      }

      this.toggled.push(item);
    },

    viewMenu() {
      axios
        .get("homemenu")
        .then((res) => {
          this.menus = res.data.menuget;
        })
        .catch((err) => console.log(err));
    },
    viewSubMenu() {
      axios
        .get("homemenu")
        .then((res) => {
          this.submenus = res.data.submenuget;
        })
        .catch((err) => console.log(err));
    },
    viewThirdMenu() {
      axios
        .get("homemenu")
        .then((res) => {
          this.thirdmenus = res.data.thirdmenuget;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
