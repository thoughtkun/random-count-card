# random-count-card ![](https://img.shields.io/cocoapods/l/AFNetworking.svg) ![](https://img.shields.io/badge/vue-2.x-brightgreen.svg)

> A card that simulates the random change of data
>
> 随机进行数据变化的模拟监控卡片

## DEMO

![](http://oka5jjryq.bkt.clouddn.com/Video_2018-04-27_000917.gif)

## How to use?

``` bash
npm install random-count-card
```

## Example

```vue
<template>
  <div id="app">
    <random-count-card  :title='title' :mount='mount'  :desc='desc' :mockList='mockList'></random-count-card>
  </div>
</template>

<script>
import RandomCountCard from "random-count-card";
export default {
  name: "app",
  data() {
    return {
      title:'Production',
      mount:100,
      desc:'utilization',
      mockList:[
        {
            time: 6,
            mount: 60 // after 6s, +60
          },
          {
            time: 8,
            mount: -45 //after 8s,-45
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
      ]
    };
  },
  components: {
    RandomCountCard
  }
};
</script>
```

## Options

| Property  | Description                    | type    | default        |
| --------- | ------------------------------ | ------- | -------------- |
| width     | width of the card              | String  | "200px"        |
| ifCount   | if need random change or not   | Boolean | true           |
| title     | the title of the card          | String  | " Production"  |
| mount     | the init number of the card    | Number  | 100            |
| baseMount | the denominator of the percent | Number  | 1000           |
| desc      | the description of the percent | String  | " utilization" |
| mockList  | the rule of the number change  | Array   | in demo above  |

## more questions

please contact with issuses on github