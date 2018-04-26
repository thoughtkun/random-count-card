<template>
  <div id="item" :style="{width:width}">
      <span class="title">{{title}}</span>
      <countTo class="mount" :startVal='initMount' :endVal='updateMount'></countTo>
      <span class="line"></span>
      <span class="percent">
        {{desc}}:<countTo :startVal='initPercent' :endVal='updatePercent'></countTo>%
      </span>
  </div>
</template>
<script>
import countTo from "vue-count-to";
export default {
  name: "random-count-card",
  components: {
    countTo
  },
  data() {
    return {
      initMount: 0,
      updateMount: 0
    };
  },
  props: {
    width: {
      type: String,
      default: "200px"
    },
    ifCount: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "Production"
    },
    mount: {
      type: Number,
      default: 100
    },
    baseMount: {
      type: Number,
      default: 1000
    },
    desc: {
      type: String,
      default: "utilization"
    },
    percent: {
      type: Number,
      default: 0
    },
    mockList: {
      type: Array,
      default: function() {
        return [
          {
            time: 6,
            mount: 60
          },
          {
            time: 8,
            mount: -45
          },
          {
            time: 10,
            mount: -80
          },
          {
            time: 5,
            mount: 100
          },
          {
            time: 7,
            mount: 19
          },
          {
            time: 3,
            mount: -54
          }
        ];
      }
    }
  },
  computed: {
    initPercent() {
      if (this.baseMount == 0) {
        return 0;
      } else {
        return (this.initMount / this.baseMount).toFixed(2) * 100;
      }
    },
    updatePercent() {
      if (this.baseMount == 0) {
        return 0;
      } else {
        return (this.updateMount / this.baseMount).toFixed(2) * 100;
      }
    }
  },
  mounted() {
    this.asyncMount();
  },

  methods: {
    timeout(ms) {
      return new Promise(resolve => {
        setTimeout(resolve, ms * 1000);
      });
    },
    async asyncMount() {
      var that = this;
      that.initMount = that.mount;
      for (var i = 0; i < that.mockList.length; i++) {
        await that.timeout(that.mockList[i].time);
        that.updateMount = that.initMount + that.mockList[i].mount;
      }
      that.asyncMount();
    }
  }
};
</script>
<style>
#item {
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  border: 1px solid rgb(0, 112, 192);
  border-radius: 10px;
}
.line {
  display: block;
  width: 40%;
  border-bottom: 5px solid rgb(0, 112, 192);
  margin-bottom: 10px;
}

.title {
  display: inline-block;
  padding: 0 20px;
  font-size: 20px;
  font-weight: bold;
  border: 2px solid black;
  border-radius: 50px;
  text-align: center;
}

.mount {
  font-size: 36px;
  font-weight: bold;
}

.percent {
  display: inline-block;
  padding: 0 10px;
  height: 35px;
  line-height: 35px;
  background-color: rgb(0, 112, 192);
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}
</style>


