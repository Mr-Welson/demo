const randomValue = () => Math.round((Math.random() * 10 + Math.random() * 100) * 100)
const XAData = [
  [{ name: "西安" }, { name: "北京", value: randomValue() }],
  [{ name: "西安" }, { name: "上海", value: randomValue() }],
  [{ name: "西安" }, { name: "广州", value: randomValue() }],
  [{ name: "西安" }, { name: "西宁", value: randomValue() }],
  [{ name: "西安" }, { name: "银川", value: randomValue() }],
]

const XNData = [
  [{ name: "西宁" }, { name: "北京", value: randomValue() }],
  [{ name: "西宁" }, { name: "上海", value: randomValue() }],
  [{ name: "西宁" }, { name: "广州", value: randomValue() }],
  [{ name: "西宁" }, { name: "西安", value: randomValue() }],
  [{ name: "西宁" }, { name: "银川", value: randomValue() }],
];

const YCData = [
  [{ name: "银川" }, { name: "北京", value: randomValue() }],
  [{ name: "银川" }, { name: "广州", value: randomValue() }],
  [{ name: "银川" }, { name: "上海", value: randomValue() }],
  [{ name: "银川" }, { name: "西安", value: randomValue() }],
  [{ name: "银川" }, { name: "西宁", value: randomValue() }],
];

const planeData = [
  {
    title: '西安',
    // 航线数据
    data: XAData,
    // 航线的颜色
    lineColor: "#a6c84c"
  },
  {
    title: '西宁',
    data: XNData,
    lineColor: "#ffa022"
  },
  {
    title: '银川',
    data: YCData,
    lineColor: "#46bee9"
  },
]