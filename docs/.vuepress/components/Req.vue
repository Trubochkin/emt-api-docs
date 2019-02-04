<template>
  <div class="wrap">
    <div class="header" :data-type="method.toLowerCase()" @click="toCollapse">
      <span class="row-path">{{textWithSpace}}</span>
      <!-- <div 
        v-if="isArrow" 
        class="btn-collaps" 
        :class="{up: !isCollapse, down: isCollapse}" 
        @click="toCollapse">
      </div> -->
    </div>
    <div v-if="!isCollapse" class="md">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Req",
  props: {
    method: String,
    path: String,
    isArrow: Boolean
  },
  computed: {
    textWithSpace: function() {
      // console.log("html: ", this);
      return this.path ? ` ${this.path}` : "";
    },
    // mdBoxHeight: function() {
    //   return this.$refs.mdBox.clientHeight + 'px';
    //   console.log("mdBoxHeight: ", mdBoxHeight)
    // }
  },
  methods: {
    toCollapse: function(e) {
      this.isCollapse = !this.isCollapse;
    }
  },
  data: function() {
    return {
      isCollapse: true
    };
  }
};
</script>

<style scoped>
.wrap {
  /* display: grid; */
  display: flex;
  flex-flow: column;
  padding: 5px 0px;
  border: 1px solid #cecece;
  border-radius: 5px;
  padding: 5px;
}

.md {
  /* position: relative; */
  /* padding-top: 16px; */
}

.row-path {
  height: auto;
  align-self: center;
  flex-grow: 1;
  white-space: pre;
}

.btn-collaps {
  height: auto;
  width: 40px;
  border-left: 1px solid #cecece;
  background-image: url('/images/arrow.png');
  background-repeat: no-repeat;
  background-position: center; 
  background-size: 25px 25px;
  cursor: pointer;
  text-align: center;
  transition-duration: 0.4s;
  transition-property: transform;
}

.up {
  transform: scaleY(-1);
}

.down {
  transform: scaleY(1);
}

.header {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  font-size: 18px;
  background-color: rgba(27, 31, 35, 0.05);
  color: #476582;
  cursor: pointer;
  z-index: 1;
}

.header[data-type="get"]:before {
  background-color: green;
}

.header[data-type="post"]:before {
  background-color: dodgerblue;
}

.header[data-type="put"]:before {
  background-color: goldenrod;
}

.header[data-type="patch"]:before {
  background-color: goldenrod;
}

.header[data-type="delete"]:before {
  background-color: crimson;
}

.header::before {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 25px;
  content: attr(data-type);
  /* display: inline-block; */
  /* margin: 5px 0px; */
  color: #ffffff;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  padding: 5px;
  text-transform: uppercase;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  font-size: 14px;
}
</style>

