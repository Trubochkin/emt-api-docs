<template>
  <div class="wrap">
    <div class="header" :data-type="method.toLowerCase()" @click="toCollapse">
      <span class="row-path">{{textWithSpace}}</span>
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
      return this.path ? ` ${this.path}` : "";
    }
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
  display: flex;
  flex-flow: column;
  padding: 5px 0px;
  border: 1px solid #cecece;
  border-radius: 5px;
  padding: 5px;
}

.row-path {
  height: auto;
  align-self: center;
  flex-grow: 1;
  white-space: pre;
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

