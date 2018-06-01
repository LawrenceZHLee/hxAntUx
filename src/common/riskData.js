//风险类别
const riskCategory = [
  '危险化学品',
  '烟花爆竹',
  '非煤矿山',
  '工商贸',
  '其他',
];

//是否重大危险源
const dangerSource = ['是', '否'];

//重大危险源级别
const dangerLevel = ['一级', '二级', '三级', '四级'];

//事故发生的可能性
const riskPossible = [
  '极有可能发生',
  '很可能发生',
  '可能发生',
  '较不可能发生',
  '基本不可能发生'];
//级别
const riskPossibleLevel = ['一级', '二级', '三级', '四级', '五级'];

//事故发生的可致后果
const riskResult = [
  '影响特别重大',
  '影响重大',
  '影响较大',
  '影响一般',
  '影响很小'];
//级别
const riskResultLevel = ['一级', '二级', '三级', '四级', '五级'];

//风险分类
const riskGround = [
  '安全生产相关证照',
  '安全生产管理机构设置情况',
  '“三同时”管理',
  '安全生产责任制',
  '安全培训',
  '事故隐患排查',
  '应急救援及演练',
  '外包单位及管理',
  '职业健康防护'];

//风险级别
const riskLevel = ['一级','二级','三级','四级'];

export {riskCategory,dangerSource,dangerLevel,riskPossible,riskPossibleLevel,riskResult,riskResultLevel,riskGround,riskLevel};
