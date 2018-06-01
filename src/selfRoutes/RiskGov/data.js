//所有字段
const riskCom = [
  {
    title: "基本信息",
    type: "title"
  },
  {
    title: "风险点所在行政区划",
    dataIndex: "riskDivision",
  },
  {
    title: "风险类别",
    dataIndex: "riskCategory",
    option: [
      {value: '危险化学品'},
      {value: '烟花爆竹'},
      {value: '非煤矿山'},
      {value: '工商贸'},
      {value: '其他'},
    ]
  },
  {
    title: "风险点所在单位",
    dataIndex: "riskCompany",
  },
  {
    title: "风险点所在详细位置",
    dataIndex: "riskAddress",
  },
  {
    title: "风险点所在经纬度",
    dataIndex: "riskLI",
  },
  {
    title: "风险名称",
    dataIndex: "riskName",
  },
  {
    title: "登记人",
    dataIndex: "riskRegName",
  },
  {
    title: "登记日期",
    dataIndex: "riskRegTime",
  },
  {
    title: "风险点序号",
    dataIndex: "riskID",
  },
  {
    title: "风险点所在部门",
    dataIndex: "riskDepart",
  },
  {
    title: '是否重大危险源',
    dataIndex: 'dangerSource',
    option: [
      {
        value: "是"
      },
      {
        value: "否"
      }
    ]
  }, {
    title: '重大危险源级别',
    dataIndex: 'dangerLevel',
    option: [
      {
        value: "一级"
      },
      {
        value: "二级"
      },
      {
        value: "三级"
      },
      {
        value: "四级"
      }
    ]
  },
  {
    title: "风险描述",
    dataIndex: "riskDesc",
  },
  {
    title: "风险评估",
    type: "title"
  },
  {
    title: "风险特征产生条件",
    dataIndex: "riskCondition",
  },
  {
    title: "事故发生的可能性",
    dataIndex: "riskPossible",
    option: [
      {
        value: '极有可能发生'
      }, {
        value: '很可能发生'
      }, {
        value: '可能发生'
      }, {
        value: '较不可能发生'
      }, {
        value: '基本不可能发生'
      },
    ]
  },
  {
    title: "级别",
    dataIndex: "riskPossibleLevel",
    option: [
      {
        value: '一级'
      }, {
        value: '二级'
      }, {
        value: '三级'
      }, {
        value: '四级'
      }, {
        value: '五级'
      },
    ]
  }, {
    title: "事故发生的可致后果",
    dataIndex: "riskResult",
    option: [
      {
        value: '影响特别重大'
      }, {
        value: '影响重大'
      }, {
        value: '影响较大'
      }, {
        value: '影响一般'
      }, {
        value: '影响很小'
      },
    ]
  },
  {
    title: "级别",
    dataIndex: "riskResultLevel",
    option: [
      {
        value: '一级'
      }, {
        value: '二级'
      }, {
        value: '三级'
      }, {
        value: '四级'
      }, {
        value: '五级'
      },
    ]
  },
  {
    title: "评估人",
    dataIndex: "riskAssessName",
  },
  {
    title: "评估时间",
    dataIndex: "riskAssessTime",
  },
  {
    title: "风险分类",
    type: "title"
  },
  {
    title: "风险分类",
    dataIndex: "riskGround",
    type: "select",
    option: [
      {
        value: "安全生产相关证照"
      },
      {
        value: "安全生产管理机构设置情况"
      },
      {
        value: "“三同时”管理"
      },
      {
        value: "安全生产责任制"
      },
      {
        value: "安全培训"
      },
      {
        value: "事故隐患排查"
      },
      {
        value: "应急救援及演练"
      },
      {
        value: "外包单位及管理"
      },
      {
        value: "职业健康防护"
      }
    ]
  }, {
    title: "划分依据",
    dataIndex: "riskCateBasis",
    type: "input",
  },
  {
    title: "划分人",
    dataIndex: "riskCateName",
  },
  {
    title: "划分时间",
    dataIndex: "riskCateTime",
  },
  {
    title: "风险分级",
    type: "title"
  },
  {
    title: "风险级别",
    dataIndex: "riskLevel",
    option: [
      {
        dataIndex: '一级'
      }, {
        dataIndex: '二级'
      }, {
        dataIndex: '三级'
      }, {
        dataIndex: '四级'
      }, {
        dataIndex: '五级'
      },
    ]
  },
  {
    title: "评估人",
    dataIndex: "riskLevelName",
  },
  {
    title: "评估时间",
    dataIndex: "riskLevelTime",
  },
  {
    title: "风险防范",
    type: "title"
  },
  {
    title: "管控措施",
    dataIndex: "riskMeasure",
  },
  {
    name: "负责部门",
    value: "riskManDepart",
    type: "input",
  },
  {
    name: "负责人",
    value: "riskManger",
    type: "input",
    span: 12,
  },
  {
    name: "负责人联系电话",
    value: "riskManTel",
    span: 12,
    style: {"borderLeft": "none", "borderBottom": "none"},
    type: "input",
  },
  {
    title: "制定人",
    dataIndex: "riskDeveloper",
  },
  {
    title: "制定时间",
    dataIndex: "riskDevTime",
  },
  {
    title: "风险上报",
    type: "title"
  },
  {
    title: "上报单元",
    dataIndex: "riskReportUnit",
  },
  {
    name: "主管（监管）单位、街道",
    value: "riskStreet",
  },
  {
    title: "上报人",
    dataIndex: "riskReporter",
  },
  {
    title: "上报时间",
    dataIndex: "riskReportTime",
  },
];

import {divisionData, nameData} from './../../common/divisionData';
const randomDatas = (n,values) => {
  if(n === 0) return values;
  values.push(divisionData('安徽省'))
  return randomDatas(n-1,values,);
};
const randomData=randomDatas(29,[]);

//数据源[13,28]high
const dataSource = [
  {
    key: '1',
    //风险点序号
    riskID: '1',
    //风险点所在行政区划
    riskDivision: randomData[0][0],
    //风险类别
    riskCategory: '涉氨制冷',
    //风险点所在单位
    riskCompany: `${randomData[0][0]}合盛食品有限公司`,
    //风险点所在详细位置
    riskAddress: '天河路老特步院内',
    //风险点所在经纬度
    riskLI: randomData[0][3],
    //风险名称
    riskName: '液氨制冷机房、液氨储罐',
    //登记人
    riskRegName: nameData(),
    //登记日期
    riskRegTime: '2018-1-2',
    //风险点所在部门
    riskDepart: '生产管理部',
    //是否重大危险源
    dangerSource: '否',
    //重大危险源级别
    dangerLevel: '',
    //风险特征产生条件
    riskCondition: '剧毒，产生条件：泄露',
    //风险描述
    riskDesc: '',
    //事故发生的可能性
    riskPossible: '可能发生',
    //级别
    riskPossibleLevel: 'III',
    //事故发生的可致后果
    riskResult: '爆炸、泄露、中毒',
    //级别
    riskResultLevel: '4',
    //评估人
    riskAssessName: nameData(),
    //评估时间
    riskAssessTime: '2018-1-5',
    //风险分类
    riskGround: '液氨',
    //划分依据
    riskCateBasis: '根据安全风险点查找指导手册第XX章第YY节',
    //划分人
    riskCateName: nameData(),
    //划分时间
    riskCateTime: '2018-1-6',
    //风险级别
    riskLevel: 'III',
    //评估人
    riskLevelName: nameData(),
    //评估时间
    riskLevelTime: '2018-1-8',
    //管控措施
    riskMeasure: '设置紧急切断装置，设置有毒有害气体泄漏检测报警装置',
    //负责人
    riskManger: nameData(),
    //负责人联系电话
    riskManTel:'13456789012',
    //负责部门
    riskManDepart: '设备管理部',
    //制定人
    riskDeveloper: nameData(),
    //制定时间
    riskDevTime: '2018-1-10',
    //主管（监管）单位、街道
    riskStreet:`${randomData[0][5]}安监局`,
    //上报单元
    riskReportUnit: `${randomData[0][4]}安监局`,
    //上报人
    riskReporter: nameData(),
    //上报时间
    riskReportTime: '2018-1-11',
  },
  {
    key: '2',
    //风险点序号
    riskID: '2',
    //风险点所在行政区划
    riskDivision: randomData[1][0],
    //风险类别
    riskCategory: '涉氨制冷',
    //风险点所在单位
    riskCompany: `${randomData[1][0]}大成食品有限公司`,
    //风险点所在详细位置
    riskAddress: '经济开发区蚌固路西侧',
    //风险点所在经纬度
    riskLI: randomData[1][3],
    //风险名称
    riskName: '液氨制冷机房',
    //登记人
    riskRegName: nameData(),
    //登记日期
    riskRegTime: '2018-2-1',
    //风险点所在部门
    riskDepart: '生产管理部',
    //是否重大危险源
    dangerSource: '否',
    //重大危险源级别
    dangerLevel: '',
    //风险特征产生条件
    riskCondition: '剧毒，产生条件：泄露',
    //风险描述
    riskDesc: '',
    //事故发生的可能性
    riskPossible: '可能发生',
    //级别
    riskPossibleLevel: 'III',
    //事故发生的可致后果
    riskResult: '爆炸、泄露、中毒',
    //级别
    riskResultLevel: '4',
    //评估人
    riskAssessName: nameData(),
    //评估时间
    riskAssessTime: '2018-2-3',
    //风险分类
    riskGround: '液氨',
    //划分依据
    riskCateBasis: '根据安全风险点查找指导手册第XX章第YY节',
    //划分人
    riskCateName: nameData(),
    //划分时间
    riskCateTime: '2018-2-6',
    //风险级别
    riskLevel: 'III',
    //评估人
    riskLevelName: nameData(),
    //评估时间
    riskLevelTime: '2018-2-8',
    //管控措施
    riskMeasure: '设置紧急切断装置，设置有毒有害气体泄漏检测报警装置',
    //负责人
    riskManger: nameData(),
    //负责人联系电话
    riskManTel:'13456789013',
    //负责部门
    riskManDepart: '生产管理部',
    //制定人
    riskDeveloper: nameData(),
    //制定时间
    riskDevTime: '2018-2-10',
    //主管（监管）单位、街道
    riskStreet:`${randomData[1][5]}安监局`,
    //上报单元
    riskReportUnit: `${randomData[1][4]}安监局`,
    //上报人
    riskReporter: nameData(),
    //上报时间
    riskReportTime: '2018-1-11',
  },
  {
    key: '3',
    //风险点序号
    riskID: '3',
    //风险点所在行政区划
    riskDivision: randomData[2][0],
    //风险类别
    riskCategory: '涉氨制冷',
    //风险点所在单位
    riskCompany: `${randomData[2][0]}华润雪花啤酒有限公司`,
    //风险点所在详细位置
    riskAddress: '榴城镇禹都大道北侧',
    //风险点所在经纬度
    riskLI: randomData[2][3],
    //风险名称
    riskName: '液氨罐',
    //登记人
    riskRegName: nameData(),
    //登记日期
    riskRegTime: '2018-3-5',
    //风险点所在部门
    riskDepart: '生产管理部',
    //是否重大危险源
    dangerSource: '否',
    //重大危险源级别
    dangerLevel: '',
    //风险特征产生条件
    riskCondition: '剧毒，产生条件：泄露',
    //风险描述
    riskDesc: '',
    //事故发生的可能性
    riskPossible: '可能发生',
    //级别
    riskPossibleLevel: 'III',
    //事故发生的可致后果
    riskResult: '爆炸、泄露、中毒',
    //级别
    riskResultLevel: '4',
    //评估人
    riskAssessName: nameData(),
    //评估时间
    riskAssessTime: '2018-3-7',
    //风险分类
    riskGround: '液氨',
    //划分依据
    riskCateBasis: '根据安全风险点查找指导手册第XX章第YY节',
    //划分人
    riskCateName: nameData(),
    //划分时间
    riskCateTime: '2018-3-8',
    //风险级别
    riskLevel: 'III',
    //评估人
    riskLevelName: nameData(),
    //评估时间
    riskLevelTime: '2018-3-9',
    //管控措施
    riskMeasure: '设置紧急切断装置，设置有毒有害气体泄漏检测报警装置',
    //负责人
    riskManger: nameData(),
    //负责人联系电话
    riskManTel:'13456789014',
    //负责部门
    riskManDepart: '技术管理部',
    //制定人
    riskDeveloper: nameData(),
    //制定时间
    riskDevTime: '2018-3-10',
    //主管（监管）单位、街道
    riskStreet:`${randomData[2][5]}安监局`,
    //上报单元
    riskReportUnit: `${randomData[2][4]}安监局`,
    //上报人
    riskReporter: nameData(),
    //上报时间
    riskReportTime: '2018-3-11',
  },
  {
    key: '4',
    //风险点序号
    riskID: '4',
    //风险点所在行政区划
    riskDivision: randomData[3][0],
    //风险类别
    riskCategory: '涉氨制冷',
    //风险点所在单位
    riskCompany: `${randomData[3][0]}宏业肉类联合加工有限责任公司`,
    //风险点所在详细位置
    riskAddress: '凤阳东路76号',
    //风险点所在经纬度
    riskLI: randomData[3][3],
    //风险名称
    riskName: '液氨储罐、液氨机房',
    //登记人
    riskRegName: nameData(),
    //登记日期
    riskRegTime: '2018-3-5',
    //风险点所在部门
    riskDepart: '生产管理部',
    //是否重大危险源
    dangerSource: '否',
    //重大危险源级别
    dangerLevel: '',
    //风险特征产生条件
    riskCondition: '剧毒，产生条件：泄露',
    //风险描述
    riskDesc: '',
    //事故发生的可能性
    riskPossible: '可能发生',
    //级别
    riskPossibleLevel: 'III',
    //事故发生的可致后果
    riskResult: '爆炸、泄露、中毒',
    //级别
    riskResultLevel: '4',
    //评估人
    riskAssessName: nameData(),
    //评估时间
    riskAssessTime: '2018-3-6',
    //风险分类
    riskGround: '液氨',
    //划分依据
    riskCateBasis: '根据安全风险点查找指导手册第XX章第YY节',
    //划分人
    riskCateName: nameData(),
    //划分时间
    riskCateTime: '2018-3-9',
    //风险级别
    riskLevel: 'III',
    //评估人
    riskLevelName: nameData(),
    //评估时间
    riskLevelTime: '2018-3-13',
    //管控措施
    riskMeasure: '设置紧急切断装置，设置有毒有害气体泄漏检测报警装置',
    //负责人
    riskManger: nameData(),
    //负责人联系电话
    riskManTel:'13456789015',
    //负责部门
    riskManDepart: '辅助车间',
    //制定人
    riskDeveloper: nameData(),
    //制定时间
    riskDevTime: '2018-3-14',
    //主管（监管）单位、街道
    riskStreet:`${randomData[3][5]}安监局`,
    //上报单元
    riskReportUnit: `${randomData[3][4]}安监局`,
    //上报人
    riskReporter: nameData(),
    //上报时间
    riskReportTime: '2018-3-16',
  },
  {
    key: '5',
    //风险点序号
    riskID: '5',
    //风险点所在行政区划
    riskDivision: randomData[4][0],
    //风险类别
    riskCategory: '粉尘涉爆',
    //风险点所在单位
    riskCompany: `${randomData[4][0]}大富机电技术有限公司`,
    //风险点所在详细位置
    riskAddress: '怀远县经济开发区',
    //风险点所在经纬度
    riskLI: randomData[4][3],
    //风险名称
    riskName: '铝制品打磨车间',
    //登记人
    riskRegName: nameData(),
    //登记日期
    riskRegTime: '2018-4-5',
    //风险点所在部门
    riskDepart: '生产管理部',
    //是否重大危险源
    dangerSource: '否',
    //重大危险源级别
    dangerLevel: '',
    //风险特征产生条件
    riskCondition: '涉爆，产生条件：可燃、引燃源',
    //风险描述
    riskDesc: '',
    //事故发生的可能性
    riskPossible: '可能发生',
    //级别
    riskPossibleLevel: 'III',
    //事故发生的可致后果
    riskResult: '爆炸',
    //级别
    riskResultLevel: '4',
    //评估人
    riskAssessName: nameData(),
    //评估时间
    riskAssessTime: '2018-4-6',
    //风险分类
    riskGround: '粉尘',
    //划分依据
    riskCateBasis: '根据安全风险点查找指导手册第XX章第YY节',
    //划分人
    riskCateName: nameData(),
    //划分时间
    riskCateTime: '2018-4-9',
    //风险级别
    riskLevel: 'III',
    //评估人
    riskLevelName: nameData(),
    //评估时间
    riskLevelTime: '2018-4-13',
    //管控措施
    riskMeasure: '使用防爆电器，制定粉尘清扫制度，及时清扫粉尘',
    //负责人
    riskManger: nameData(),
    //负责人联系电话
    riskManTel:'13456789016',
    //负责部门
    riskManDepart: '设备管理部',
    //制定人
    riskDeveloper: nameData(),
    //制定时间
    riskDevTime: '2018-4-14',
    //主管（监管）单位、街道
    riskStreet:`${randomData[4][5]}安监局`,
    //上报单元
    riskReportUnit: `${randomData[4][4]}安监局`,
    //上报人
    riskReporter: nameData(),
    //上报时间
    riskReportTime: '2018-4-16',
  },
  {
    key: '6',
    //风险点序号
    riskID: '6',
    //风险点所在行政区划
    riskDivision: randomData[5][0],
    //风险类别
    riskCategory: '粉尘涉爆',
    //风险点所在单位
    riskCompany: `${randomData[5][0]}中纺农业安徽有限公司`,
    //风险点所在详细位置
    riskAddress: '五蚌路中纺大道1号',
    //风险点所在经纬度
    riskLI: randomData[5][3],
    //风险名称
    riskName: '饲料车间除尘器',
    //登记人
    riskRegName: nameData(),
    //登记日期
    riskRegTime: '2018-5-5',
    //风险点所在部门
    riskDepart: '生产管理部',
    //是否重大危险源
    dangerSource: '否',
    //重大危险源级别
    dangerLevel: '',
    //风险特征产生条件
    riskCondition: '涉爆，产生条件：可燃、引燃源',
    //风险描述
    riskDesc: '',
    //事故发生的可能性
    riskPossible: '可能发生',
    //级别
    riskPossibleLevel: 'III',
    //事故发生的可致后果
    riskResult: '爆炸',
    //级别
    riskResultLevel: '4',
    //评估人
    riskAssessName: nameData(),
    //评估时间
    riskAssessTime: '2018-5-6',
    //风险分类
    riskGround: '粉尘',
    //划分依据
    riskCateBasis: '根据安全风险点查找指导手册第XX章第YY节',
    //划分人
    riskCateName: nameData(),
    //划分时间
    riskCateTime: '2018-5-9',
    //风险级别
    riskLevel: 'III',
    //评估人
    riskLevelName: nameData(),
    //评估时间
    riskLevelTime: '2018-5-13',
    //管控措施
    riskMeasure: '使用防爆电器，制定粉尘清扫制度，及时清扫粉尘',
    //负责人
    riskManger: nameData(),
    //负责人联系电话
    riskManTel:'13456789017',
    //负责部门
    riskManDepart: '生产管理部',
    //制定人
    riskDeveloper: nameData(),
    //制定时间
    riskDevTime: '2018-5-14',
    //主管（监管）单位、街道
    riskStreet:`${randomData[5][5]}安监局`,
    //上报单元
    riskReportUnit: `${randomData[5][4]}安监局`,
    //上报人
    riskReporter: nameData(),
    //上报时间
    riskReportTime: '2018-5-16',
  },
  {
    key: '7',
    //风险点序号
    riskID: '7',
    //风险点所在行政区划
    riskDivision: randomData[6][0],
    //风险类别
    riskCategory: '烟花爆竹',
    //风险点所在单位
    riskCompany: `${randomData[6][0]}五河巨虹烟花爆竹有限公司`,
    //风险点所在详细位置
    riskAddress: '小溪镇上营村猴子村',
    //风险点所在经纬度
    riskLI: randomData[6][3],
    //风险名称
    riskName: '烟花:B、C、D;爆竹:C',
    //登记人
    riskRegName: nameData(),
    //登记日期
    riskRegTime: '2017-6-5',
    //风险点所在部门
    riskDepart: '生产管理部',
    //是否重大危险源
    dangerSource: '否',
    //重大危险源级别
    dangerLevel: '',
    //风险特征产生条件
    riskCondition: '爆炸，产生条件：遇明火',
    //风险描述
    riskDesc: '',
    //事故发生的可能性
    riskPossible: '可能发生',
    //级别
    riskPossibleLevel: 'III',
    //事故发生的可致后果
    riskResult: '爆炸、燃烧',
    //级别
    riskResultLevel: '4',
    //评估人
    riskAssessName: nameData(),
    //评估时间
    riskAssessTime: '2017-6-6',
    //风险分类
    riskGround: '烟花爆竹',
    //划分依据
    riskCateBasis: '根据安全风险点查找指导手册第XX章第YY节',
    //划分人
    riskCateName: nameData(),
    //划分时间
    riskCateTime: '2017-6-9',
    //风险级别
    riskLevel: 'III',
    //评估人
    riskLevelName: nameData(),
    //评估时间
    riskLevelTime: '2017-6-13',
    //管控措施
    riskMeasure: '设置紧急报警仪、灭火器',
    //负责人
    riskManger: nameData(),
    //负责人联系电话
    riskManTel:'13456789018',
    //负责部门
    riskManDepart: '技术管理部',
    //制定人
    riskDeveloper: nameData(),
    //制定时间
    riskDevTime: '2017-6-14',
    //主管（监管）单位、街道
    riskStreet:`${randomData[6][5]}安监局`,
    //上报单元
    riskReportUnit: `${randomData[6][4]}安监局`,
    //上报人
    riskReporter: nameData(),
    //上报时间
    riskReportTime: '2017-6-16',
  },
  {
    key: '8',
    //风险点序号
    riskID: '8',
    //风险点所在行政区划
    riskDivision: randomData[7][0],
    //风险类别
    riskCategory: '烟花爆竹',
    //风险点所在单位
    riskCompany: `${randomData[7][0]}双赢烟花爆竹有限公司`,
    //风险点所在详细位置
    riskAddress: '城关镇谷阳路178号',
    //风险点所在经纬度
    riskLI: randomData[7][3],
    //风险名称
    riskName: '烟花:B、C、D;爆竹:C',
    //登记人
    riskRegName: nameData(),
    //登记日期
    riskRegTime: '2017-7-5',
    //风险点所在部门
    riskDepart: '生产管理部',
    //是否重大危险源
    dangerSource: '否',
    //重大危险源级别
    dangerLevel: '',
    //风险特征产生条件
    riskCondition: '爆炸，产生条件：遇明火',
    //风险描述
    riskDesc: '',
    //事故发生的可能性
    riskPossible: '可能发生',
    //级别
    riskPossibleLevel: 'III',
    //事故发生的可致后果
    riskResult: '爆炸、燃烧',
    //级别
    riskResultLevel: '4',
    //评估人
    riskAssessName: nameData(),
    //评估时间
    riskAssessTime: '2017-7-6',
    //风险分类
    riskGround: '烟花爆竹',
    //划分依据
    riskCateBasis: '根据安全风险点查找指导手册第XX章第YY节',
    //划分人
    riskCateName: nameData(),
    //划分时间
    riskCateTime: '2017-7-9',
    //风险级别
    riskLevel: 'III',
    //评估人
    riskLevelName: nameData(),
    //评估时间
    riskLevelTime: '2017-7-13',
    //管控措施
    riskMeasure: '设置紧急报警仪、灭火器',
    //负责人
    riskManger: nameData(),
    //负责人联系电话
    riskManTel:'13456789019',
    //负责部门
    riskManDepart: '辅助车间',
    //制定人
    riskDeveloper: nameData(),
    //制定时间
    riskDevTime: '2017-7-14',
    //主管（监管）单位、街道
    riskStreet:`${randomData[7][5]}安监局`,
    //上报单元
    riskReportUnit: `${randomData[7][4]}安监局`,
    //上报人
    riskReporter: nameData(),
    //上报时间
    riskReportTime: '2017-7-16',
  },
  {
    key: '9',
    //风险点序号
    riskID: '9',
    //风险点所在行政区划
    riskDivision: randomData[8][0],
    //风险类别
    riskCategory: '烟花爆竹',
    //风险点所在单位
    riskCompany: `${randomData[8][0]}供销社烟花爆竹专营中心`,
    //风险点所在详细位置
    riskAddress: '古城乡淝北村206国道旁',
    //风险点所在经纬度
    riskLI: randomData[8][3],
    //风险名称
    riskName: '烟花:B、C、D;爆竹:C',
    //登记人
    riskRegName: nameData(),
    //登记日期
    riskRegTime: '2017-8-5',
    //风险点所在部门
    riskDepart: '生产管理部',
    //是否重大危险源
    dangerSource: '否',
    //重大危险源级别
    dangerLevel: '',
    //风险特征产生条件
    riskCondition: '爆炸，产生条件：遇明火',
    //风险描述
    riskDesc: '',
    //事故发生的可能性
    riskPossible: '可能发生',
    //级别
    riskPossibleLevel: 'III',
    //事故发生的可致后果
    riskResult: '爆炸、燃烧',
    //级别
    riskResultLevel: '4',
    //评估人
    riskAssessName: nameData(),
    //评估时间
    riskAssessTime: '2017-8-6',
    //风险分类
    riskGround: '烟花爆竹',
    //划分依据
    riskCateBasis: '根据安全风险点查找指导手册第XX章第YY节',
    //划分人
    riskCateName: nameData(),
    //划分时间
    riskCateTime: '2017-8-9',
    //风险级别
    riskLevel: 'III',
    //评估人
    riskLevelName: nameData(),
    //评估时间
    riskLevelTime: '2017-8-13',
    //管控措施
    riskMeasure: '设置紧急报警仪、灭火器',
    //负责人
    riskManger: nameData(),
    //负责人联系电话
    riskManTel:'13456789020',
    //负责部门
    riskManDepart: '设备管理部',
    //制定人
    riskDeveloper: nameData(),
    //制定时间
    riskDevTime: '2017-8-14',
    //主管（监管）单位、街道
    riskStreet:`${randomData[8][5]}安监局`,
    //上报单元
    riskReportUnit: `${randomData[8][4]}安监局`,
    //上报人
    riskReporter: nameData(),
    //上报时间
    riskReportTime: '2017-8-16',
  },
  {
    key: '10',
    //风险点序号
    riskID: '10',
    //风险点所在行政区划
    riskDivision: randomData[9][0],
    //风险类别
    riskCategory: '烟花爆竹',
    //风险点所在单位
    riskCompany: `${randomData[9][0]}珠虹烟花爆竹有限责任公司`,
    //风险点所在详细位置
    riskAddress: '长淮卫镇老山村15组',
    //风险点所在经纬度
    riskLI: randomData[8][3],
    //风险名称
    riskName: '烟花:B、C、D;爆竹:C',
    //登记人
    riskRegName: nameData(),
    //登记日期
    riskRegTime: '2017-9-5',
    //风险点所在部门
    riskDepart: '生产管理部',
    //是否重大危险源
    dangerSource: '否',
    //重大危险源级别
    dangerLevel: '',
    //风险特征产生条件
    riskCondition: '爆炸，产生条件：遇明火',
    //风险描述
    riskDesc: '',
    //事故发生的可能性
    riskPossible: '可能发生',
    //级别
    riskPossibleLevel: 'III',
    //事故发生的可致后果
    riskResult: '爆炸、燃烧',
    //级别
    riskResultLevel: '4',
    //评估人
    riskAssessName: nameData(),
    //评估时间
    riskAssessTime: '2017-9-6',
    //风险分类
    riskGround: '烟花爆竹',
    //划分依据
    riskCateBasis: '根据安全风险点查找指导手册第XX章第YY节',
    //划分人
    riskCateName: nameData(),
    //划分时间
    riskCateTime: '2017-9-9',
    //风险级别
    riskLevel: 'III',
    //评估人
    riskLevelName: nameData(),
    //评估时间
    riskLevelTime: '2017-9-13',
    //管控措施
    riskMeasure: '设置紧急报警仪、灭火器',
    //负责人
    riskManger: nameData(),
    //负责人联系电话
    riskManTel:'13456789021',
    //负责部门
    riskManDepart: '生产管理部',
    //制定人
    riskDeveloper: nameData(),
    //制定时间
    riskDevTime: '2017-9-14',
    //主管（监管）单位、街道
    riskStreet:`${randomData[9][5]}安监局`,
    //上报单元
    riskReportUnit: `${randomData[9][4]}安监局`,
    //上报人
    riskReporter: nameData(),
    //上报时间
    riskReportTime: '2017-9-16',
  },
  {
    key: '11',
    //风险点序号
    riskID: '11',
    //风险点所在行政区划
    riskDivision: randomData[10][0],
    //风险类别
    riskCategory: '烟花爆竹',
    //风险点所在单位
    riskCompany: `${randomData[10][0]}福华烟花爆竹销售有限公司`,
    //风险点所在详细位置
    riskAddress: '淝南乡',
    //风险点所在经纬度
    riskLI: randomData[10][3],
    //风险名称
    riskName: '烟花:B、C、D;爆竹:C',
    //登记人
    riskRegName: nameData(),
    //登记日期
    riskRegTime: '2017-10-5',
    //风险点所在部门
    riskDepart: '生产管理部',
    //是否重大危险源
    dangerSource: '否',
    //重大危险源级别
    dangerLevel: '',
    //风险特征产生条件
    riskCondition: '爆炸，产生条件：遇明火',
    //风险描述
    riskDesc: '',
    //事故发生的可能性
    riskPossible: '可能发生',
    //级别
    riskPossibleLevel: 'III',
    //事故发生的可致后果
    riskResult: '爆炸、燃烧',
    //级别
    riskResultLevel: '4',
    //评估人
    riskAssessName: nameData(),
    //评估时间
    riskAssessTime: '2017-10-6',
    //风险分类
    riskGround: '烟花爆竹',
    //划分依据
    riskCateBasis: '根据安全风险点查找指导手册第XX章第YY节',
    //划分人
    riskCateName: nameData(),
    //划分时间
    riskCateTime: '2017-10-9',
    //风险级别
    riskLevel: 'III',
    //评估人
    riskLevelName: nameData(),
    //评估时间
    riskLevelTime: '2017-10-13',
    //管控措施
    riskMeasure: '设置紧急报警仪、灭火器',
    //负责人
    riskManger: nameData(),
    //负责人联系电话
    riskManTel:'13456789022',
    //负责部门
    riskManDepart: '技术管理部',
    //制定人
    riskDeveloper: nameData(),
    //制定时间
    riskDevTime: '2017-10-14',
    //主管（监管）单位、街道
    riskStreet:`${randomData[10][5]}安监局`,
    //上报单元
    riskReportUnit: `${randomData[10][4]}安监局`,
    //上报人
    riskReporter: nameData(),
    //上报时间
    riskReportTime: '2017-10-16',
  },
  {
    key: '12',
    //风险点序号
    riskID: '12',
    //风险点所在行政区划
    riskDivision: randomData[11][0],
    //风险类别
    riskCategory: '危险化学品',
    //风险点所在单位
    riskCompany: `${randomData[11][0]}生化燃料酒精有限公司`,
    //风险点所在详细位置
    riskAddress: '黑虎山路818号',
    //风险点所在经纬度
    riskLI: randomData[11][3],
    //风险名称
    riskName: '燃料酒精生产储存装置',
    //登记人
    riskRegName: nameData(),
    //登记日期
    riskRegTime: '2017-11-5',
    //风险点所在部门
    riskDepart: '生产管理部',
    //是否重大危险源
    dangerSource: '否',
    //重大危险源级别
    dangerLevel: '',
    //风险特征产生条件
    riskCondition: '易燃、易爆，事故产生条件：泄漏、明火、静电',
    //风险描述
    riskDesc: '',
    //事故发生的可能性
    riskPossible: '可能发生',
    //级别
    riskPossibleLevel: 'III',
    //事故发生的可致后果
    riskResult: '火灾、爆炸',
    //级别
    riskResultLevel: '4',
    //评估人
    riskAssessName: nameData(),
    //评估时间
    riskAssessTime: '2017-11-6',
    //风险分类
    riskGround: '场所',
    //划分依据
    riskCateBasis: '根据安全风险点查找指导手册第XX章第YY节',
    //划分人
    riskCateName: nameData(),
    //划分时间
    riskCateTime: '2017-11-9',
    //风险级别
    riskLevel: 'III',
    //评估人
    riskLevelName: nameData(),
    //评估时间
    riskLevelTime: '2017-11-13',
    //管控措施
    riskMeasure: '设置紧急切断装置，设置可燃气体和有毒有害气体泄漏检测报警装置',
    //负责人
    riskManger: nameData(),
    //负责人联系电话
    riskManTel:'13456789023',
    //负责部门
    riskManDepart: '辅助车间',
    //制定人
    riskDeveloper: nameData(),
    //制定时间
    riskDevTime: '2017-11-14',
    //主管（监管）单位、街道
    riskStreet:`${randomData[11][5]}安监局`,
    //上报单元
    riskReportUnit: `${randomData[11][4]}安监局`,
    //上报人
    riskReporter: nameData(),
    //上报时间
    riskReportTime: '2017-11-16',
  },
  {
    key: '13',
    //风险点序号
    riskID: '13',
    //风险点所在行政区划
    riskDivision: randomData[12][0],
    //风险类别
    riskCategory: '危险化学品',
    //风险点所在单位
    riskCompany: `${randomData[12][0]}八一化工股份有限公司`,
    //风险点所在详细位置
    riskAddress: '涂山路1369号',
    //风险点所在经纬度
    riskLI: randomData[12][3],
    //风险名称
    riskName: '氯碱、硝基氯苯系列产品生产储存装置',
    //登记人
    riskRegName: nameData(),
    //登记日期
    riskRegTime: '2017-12-5',
    //风险点所在部门
    riskDepart: '生产管理部',
    //是否重大危险源
    dangerSource: '是',
    //重大危险源级别
    dangerLevel: '二级',
    //风险特征产生条件
    riskCondition: '易燃易爆、剧毒，事故产生条件：泄漏、明火、静电',
    //风险描述
    riskDesc: '',
    //事故发生的可能性
    riskPossible: '可能发生',
    //级别
    riskPossibleLevel: 'III',
    //事故发生的可致后果
    riskResult: '火灾、爆炸、中毒',
    //级别
    riskResultLevel: '4',
    //评估人
    riskAssessName: nameData(),
    //评估时间
    riskAssessTime: '2017-12-6',
    //风险分类
    riskGround: '场所',
    //划分依据
    riskCateBasis: '根据安全风险点查找指导手册第XX章第YY节',
    //划分人
    riskCateName: nameData(),
    //划分时间
    riskCateTime: '2017-12-9',
    //风险级别
    riskLevel: 'Ⅱ',
    //评估人
    riskLevelName: nameData(),
    //评估时间
    riskLevelTime: '2017-12-13',
    //管控措施
    riskMeasure: '设置紧急切断装置，安装独立仪表系统，设置可燃气体和有毒有害气体泄漏检测报警装置',
    //负责人
    riskManger: nameData(),
    //负责人联系电话
    riskManTel:'13456789024',
    //负责部门
    riskManDepart: '设备管理部',
    //制定人
    riskDeveloper: nameData(),
    //制定时间
    riskDevTime: '2017-12-14',
    //主管（监管）单位、街道
    riskStreet:`${randomData[12][5]}安监局`,
    //上报单元
    riskReportUnit: `${randomData[12][4]}安监局`,
    //上报人
    riskReporter: nameData(),
    //上报时间
    riskReportTime: '2017-12-16',
  },
  {
    key: '14',
    //风险点序号
    riskID: '14',
    //风险点所在行政区划
    riskDivision: randomData[13][0],
    //风险类别
    riskCategory: '危险化学品',
    //风险点所在单位
    riskCompany: `${randomData[13][0]}中粮生物化学股份有限公司`,
    //风险点所在详细位置
    riskAddress: '中粮大道1号',
    //风险点所在经纬度
    riskLI: randomData[13][3],
    //风险名称
    riskName: '10万吨/年乙醇储罐区',
    //登记人
    riskRegName: nameData(),
    //登记日期
    riskRegTime: '2018-1-5',
    //风险点所在部门
    riskDepart: '生产管理部',
    //是否重大危险源
    dangerSource: '否',
    //重大危险源级别
    dangerLevel: '',
    //风险特征产生条件
    riskCondition: '易燃易爆、剧毒，事故产生条件：泄漏、明火、静电',
    //风险描述
    riskDesc: '',
    //事故发生的可能性
    riskPossible: '可能发生',
    //级别
    riskPossibleLevel: 'III',
    //事故发生的可致后果
    riskResult: '火灾、爆炸',
    //级别
    riskResultLevel: '4',
    //评估人
    riskAssessName: nameData(),
    //评估时间
    riskAssessTime: '2018-1-6',
    //风险分类
    riskGround: '场所',
    //划分依据
    riskCateBasis: '根据安全风险点查找指导手册第XX章第YY节',
    //划分人
    riskCateName: nameData(),
    //划分时间
    riskCateTime: '2018-1-9',
    //风险级别
    riskLevel: 'III',
    //评估人
    riskLevelName: nameData(),
    //评估时间
    riskLevelTime: '2018-1-13',
    //管控措施
    riskMeasure: '设置紧急切断装置，设置可燃气体泄漏检测报警装置',
    //负责人
    riskManger: nameData(),
    //负责人联系电话
    riskManTel:'13456789025',
    //负责部门
    riskManDepart: '生产管理部',
    //制定人
    riskDeveloper: nameData(),
    //制定时间
    riskDevTime: '2018-1-14',
    //主管（监管）单位、街道
    riskStreet:`${randomData[13][5]}安监局`,
    //上报单元
    riskReportUnit: `${randomData[13][4]}安监局`,
    //上报人
    riskReporter: nameData(),
    //上报时间
    riskReportTime: '2018-1-16',
  },
  {
    key: '15',
    //风险点序号
    riskID: '15',
    //风险点所在行政区划
    riskDivision: randomData[14][0],
    //风险类别
    riskCategory: '危险化学品',
    //风险点所在单位
    riskCompany: `${randomData[14][0]}石油分公司`,
    //风险点所在详细位置
    riskAddress: '蚌埠市淮上区',
    //风险点所在经纬度
    riskLI: randomData[14][3],
    //风险名称
    riskName: '汽油、乙醇储罐',
    //登记人
    riskRegName: nameData(),
    //登记日期
    riskRegTime: '2018-2-5',
    //风险点所在部门
    riskDepart: '生产管理部',
    //是否重大危险源
    dangerSource: '否',
    //重大危险源级别
    dangerLevel: '',
    //风险特征产生条件
    riskCondition: '易燃易爆、剧毒，事故产生条件：泄漏、明火、静电',
    //风险描述
    riskDesc: '',
    //事故发生的可能性
    riskPossible: '可能发生',
    //级别
    riskPossibleLevel: 'III',
    //事故发生的可致后果
    riskResult: '火灾、爆炸',
    //级别
    riskResultLevel: '4',
    //评估人
    riskAssessName: nameData(),
    //评估时间
    riskAssessTime: '2018-2-6',
    //风险分类
    riskGround: '场所',
    //划分依据
    riskCateBasis: '根据安全风险点查找指导手册第XX章第YY节',
    //划分人
    riskCateName: nameData(),
    //划分时间
    riskCateTime: '2018-2-9',
    //风险级别
    riskLevel: 'III',
    //评估人
    riskLevelName: nameData(),
    //评估时间
    riskLevelTime: '2018-2-13',
    //管控措施
    riskMeasure: '设置紧急切断装置，设置可燃气体泄漏检测报警装置',
    //负责人
    riskManger: nameData(),
    //负责人联系电话
    riskManTel:'13456789026',
    //负责部门
    riskManDepart: '技术管理部',
    //制定人
    riskDeveloper: nameData(),
    //制定时间
    riskDevTime: '2018-2-14',
    //主管（监管）单位、街道
    riskStreet:`${randomData[14][5]}安监局`,
    //上报单元
    riskReportUnit: `${randomData[14][4]}安监局`,
    //上报人
    riskReporter: nameData(),
    //上报时间
    riskReportTime: '2018-2-16',
  },
  {
    key: '16',
    //风险点序号
    riskID: '16',
    //风险点所在行政区划
    riskDivision: randomData[15][0],
    //风险类别
    riskCategory: '危险化学品',
    //风险点所在单位
    riskCompany: `${randomData[15][0]}销售分公司油库`,
    //风险点所在详细位置
    riskAddress: '胜利东路440号',
    //风险点所在经纬度
    riskLI: randomData[15][3],
    //风险名称
    riskName: '油库汽油储罐',
    //登记人
    riskRegName: nameData(),
    //登记日期
    riskRegTime: '2018-3-5',
    //风险点所在部门
    riskDepart: '生产管理部',
    //是否重大危险源
    dangerSource: '否',
    //重大危险源级别
    dangerLevel: '',
    //风险特征产生条件
    riskCondition: '易燃易爆、剧毒，事故产生条件：泄漏、明火、静电',
    //风险描述
    riskDesc: '',
    //事故发生的可能性
    riskPossible: '可能发生',
    //级别
    riskPossibleLevel: 'III',
    //事故发生的可致后果
    riskResult: '火灾、爆炸',
    //级别
    riskResultLevel: '4',
    //评估人
    riskAssessName: nameData(),
    //评估时间
    riskAssessTime: '2018-3-6',
    //风险分类
    riskGround: '场所',
    //划分依据
    riskCateBasis: '根据安全风险点查找指导手册第XX章第YY节',
    //划分人
    riskCateName: nameData(),
    //划分时间
    riskCateTime: '2018-3-9',
    //风险级别
    riskLevel: 'III',
    //评估人
    riskLevelName: nameData(),
    //评估时间
    riskLevelTime: '2018-3-13',
    //管控措施
    riskMeasure: '设置紧急切断装置，设置可燃气体泄漏检测报警装置',
    //负责人
    riskManger: nameData(),
    //负责人联系电话
    riskManTel:'13456789027',
    //负责部门
    riskManDepart: '辅助车间',
    //制定人
    riskDeveloper: nameData(),
    //制定时间
    riskDevTime: '2018-3-14',
    //主管（监管）单位、街道
    riskStreet:`${randomData[15][5]}安监局`,
    //上报单元
    riskReportUnit: `${randomData[15][4]}安监局`,
    //上报人
    riskReporter: nameData(),
    //上报时间
    riskReportTime: '2018-3-16',
  },
  {
    key: '17',
    //风险点序号
    riskID: '17',
    //风险点所在行政区划
    riskDivision: randomData[16][0],
    //风险类别
    riskCategory: '危险化学品',
    //风险点所在单位
    riskCompany: `${randomData[16][0]}油品燃气有限公司`,
    //风险点所在详细位置
    riskAddress: '沫河口工业园区金沱路8号',
    //风险点所在经纬度
    riskLI: randomData[16][3],
    //风险名称
    riskName: '汽油储罐',
    //登记人
    riskRegName: nameData(),
    //登记日期
    riskRegTime: '2018-4-5',
    //风险点所在部门
    riskDepart: '生产管理部',
    //是否重大危险源
    dangerSource: '否',
    //重大危险源级别
    dangerLevel: '',
    //风险特征产生条件
    riskCondition: '易燃易爆、剧毒，事故产生条件：泄漏、明火、静电',
    //风险描述
    riskDesc: '',
    //事故发生的可能性
    riskPossible: '可能发生',
    //级别
    riskPossibleLevel: 'III',
    //事故发生的可致后果
    riskResult: '火灾、爆炸',
    //级别
    riskResultLevel: '4',
    //评估人
    riskAssessName: nameData(),
    //评估时间
    riskAssessTime: '2018-4-6',
    //风险分类
    riskGround: '场所',
    //划分依据
    riskCateBasis: '根据安全风险点查找指导手册第XX章第YY节',
    //划分人
    riskCateName: nameData(),
    //划分时间
    riskCateTime: '2018-4-9',
    //风险级别
    riskLevel: 'III',
    //评估人
    riskLevelName: nameData(),
    //评估时间
    riskLevelTime: '2018-4-13',
    //管控措施
    riskMeasure: '设置紧急切断装置，设置可燃气体泄漏检测报警装置',
    //负责人
    riskManger: nameData(),
    //负责人联系电话
    riskManTel:'13456789028',
    //负责部门
    riskManDepart: '设备管理部',
    //制定人
    riskDeveloper: nameData(),
    //制定时间
    riskDevTime: '2018-4-14',
    //主管（监管）单位、街道
    riskStreet:`${randomData[16][5]}安监局`,
    //上报单元
    riskReportUnit: `${randomData[16][4]}安监局`,
    //上报人
    riskReporter: nameData(),
    //上报时间
    riskReportTime: '2018-4-16',
  },
  {
    key: '18',
    //风险点序号
    riskID: '18',
    //风险点所在行政区划
    riskDivision: randomData[17][0],
    //风险类别
    riskCategory: '危险化学品',
    //风险点所在单位
    riskCompany: `${randomData[17][0]}雪郎生物科技股份有限公司`,
    //风险点所在详细位置
    riskAddress: '沫河口工业园区',
    //风险点所在经纬度
    riskLI: randomData[17][3],
    //风险名称
    riskName: '苯罐区',
    //登记人
    riskRegName: nameData(),
    //登记日期
    riskRegTime: '2018-5-5',
    //风险点所在部门
    riskDepart: '生产管理部',
    //是否重大危险源
    dangerSource: '否',
    //重大危险源级别
    dangerLevel: '',
    //风险特征产生条件
    riskCondition: '有毒，事故产生条件：泄漏',
    //风险描述
    riskDesc: '',
    //事故发生的可能性
    riskPossible: '可能发生',
    //级别
    riskPossibleLevel: 'III',
    //事故发生的可致后果
    riskResult: '中毒',
    //级别
    riskResultLevel: '4',
    //评估人
    riskAssessName: nameData(),
    //评估时间
    riskAssessTime: '2018-5-6',
    //风险分类
    riskGround: '场所',
    //划分依据
    riskCateBasis: '根据安全风险点查找指导手册第XX章第YY节',
    //划分人
    riskCateName: nameData(),
    //划分时间
    riskCateTime: '2018-5-9',
    //风险级别
    riskLevel: 'III',
    //评估人
    riskLevelName: nameData(),
    //评估时间
    riskLevelTime: '2018-5-13',
    //管控措施
    riskMeasure: '设置紧急切断装置，设置有毒有害气体泄漏检测报警装置',
    //负责人
    riskManger: nameData(),
    //负责人联系电话
    riskManTel:'13456789029',
    //负责部门
    riskManDepart: '生产管理部',
    //制定人
    riskDeveloper: nameData(),
    //制定时间
    riskDevTime: '2018-5-14',
    //主管（监管）单位、街道
    riskStreet:`${randomData[17][5]}安监局`,
    //上报单元
    riskReportUnit: `${randomData[17][4]}安监局`,
    //上报人
    riskReporter: nameData(),
    //上报时间
    riskReportTime: '2018-5-16',
  },
  {
    key: '19',
    //风险点序号
    riskID: '19',
    //风险点所在行政区划
    riskDivision: randomData[18][0],
    //风险类别
    riskCategory: '危险化学品',
    //风险点所在单位
    riskCompany: `${randomData[18][0]}天益化工有限公司`,
    //风险点所在详细位置
    riskAddress: '沫河口工业园区',
    //风险点所在经纬度
    riskLI: randomData[18][3],
    //风险名称
    riskName: '液氨、液氯罐区',
    //登记人
    riskRegName: nameData(),
    //登记日期
    riskRegTime: '2018-1-5',
    //风险点所在部门
    riskDepart: '生产管理部',
    //是否重大危险源
    dangerSource: '否',
    //重大危险源级别
    dangerLevel: '',
    //风险特征产生条件
    riskCondition: '剧毒，事故产生条件：泄漏',
    //风险描述
    riskDesc: '',
    //事故发生的可能性
    riskPossible: '可能发生',
    //级别
    riskPossibleLevel: 'III',
    //事故发生的可致后果
    riskResult: '腐蚀、中毒',
    //级别
    riskResultLevel: '4',
    //评估人
    riskAssessName: nameData(),
    //评估时间
    riskAssessTime: '2018-1-6',
    //风险分类
    riskGround: '场所',
    //划分依据
    riskCateBasis: '根据安全风险点查找指导手册第XX章第YY节',
    //划分人
    riskCateName: nameData(),
    //划分时间
    riskCateTime: '2018-1-9',
    //风险级别
    riskLevel: 'III',
    //评估人
    riskLevelName: nameData(),
    //评估时间
    riskLevelTime: '2018-1-13',
    //管控措施
    riskMeasure: '设置紧急切断装置，设置有毒有害气体泄漏检测报警装置',
    //负责人
    riskManger: nameData(),
    //负责人联系电话
    riskManTel:'13456789030',
    //负责部门
    riskManDepart: '辅助车间',
    //制定人
    riskDeveloper: nameData(),
    //制定时间
    riskDevTime: '2018-1-14',
    //主管（监管）单位、街道
    riskStreet:`${randomData[18][5]}安监局`,
    //上报单元
    riskReportUnit: `${randomData[18][4]}安监局`,
    //上报人
    riskReporter: nameData(),
    //上报时间
    riskReportTime: '2018-1-16',
  },
  {
    key: '20',
    //风险点序号
    riskID: '20',
    //风险点所在行政区划
    riskDivision: randomData[19][0],
    //风险类别
    riskCategory: '危险化学品',
    //风险点所在单位
    riskCompany: `${randomData[19][0]}辉隆集团五禾生态肥业有限公司`,
    //风险点所在详细位置
    riskAddress: '五蚌路2号',
    //风险点所在经纬度
    riskLI: randomData[19][3],
    //风险名称
    riskName: '液氯罐区',
    //登记人
    riskRegName: nameData(),
    //登记日期
    riskRegTime: '2018-2-5',
    //风险点所在部门
    riskDepart: '生产管理部',
    //是否重大危险源
    dangerSource: '否',
    //重大危险源级别
    dangerLevel: '',
    //风险特征产生条件
    riskCondition: '有毒，事故产生条件：泄漏',
    //风险描述
    riskDesc: '',
    //事故发生的可能性
    riskPossible: '可能发生',
    //级别
    riskPossibleLevel: 'III',
    //事故发生的可致后果
    riskResult: '腐蚀、中毒',
    //级别
    riskResultLevel: '4',
    //评估人
    riskAssessName: nameData(),
    //评估时间
    riskAssessTime: '2018-2-6',
    //风险分类
    riskGround: '场所',
    //划分依据
    riskCateBasis: '根据安全风险点查找指导手册第XX章第YY节',
    //划分人
    riskCateName: nameData(),
    //划分时间
    riskCateTime: '2018-2-9',
    //风险级别
    riskLevel: 'III',
    //评估人
    riskLevelName: nameData(),
    //评估时间
    riskLevelTime: '2018-2-13',
    //管控措施
    riskMeasure: '设置紧急切断装置，设置有毒有害气体泄漏检测报警装置',
    //负责人
    riskManger: nameData(),
    //负责人联系电话
    riskManTel:'13456789031',
    //负责部门
    riskManDepart: '技术管理部',
    //制定人
    riskDeveloper: nameData(),
    //制定时间
    riskDevTime: '2018-2-14',
    //主管（监管）单位、街道
    riskStreet:`${randomData[19][5]}安监局`,
    //上报单元
    riskReportUnit: `${randomData[19][4]}安监局`,
    //上报人
    riskReporter: nameData(),
    //上报时间
    riskReportTime: '2018-2-16',
  },
  {
    key: '21',
    //风险点序号
    riskID: '21',
    //风险点所在行政区划
    riskDivision: randomData[20][0],
    //风险类别
    riskCategory: '危险化学品',
    //风险点所在单位
    riskCompany: `${randomData[20][0]}泰格维生素实业有限公司`,
    //风险点所在详细位置
    riskAddress: '固镇经济开发区',
    //风险点所在经纬度
    riskLI: randomData[20][3],
    //风险名称
    riskName: '甲醇储罐区',
    //登记人
    riskRegName: nameData(),
    //登记日期
    riskRegTime: '2018-3-5',
    //风险点所在部门
    riskDepart: '生产管理部',
    //是否重大危险源
    dangerSource: '否',
    //重大危险源级别
    dangerLevel: '',
    //风险特征产生条件
    riskCondition: '易燃易爆、剧毒，事故产生条件：泄漏、明火、静电',
    //风险描述
    riskDesc: '',
    //事故发生的可能性
    riskPossible: '可能发生',
    //级别
    riskPossibleLevel: 'III',
    //事故发生的可致后果
    riskResult: '火灾、爆炸、中毒',
    //级别
    riskResultLevel: '4',
    //评估人
    riskAssessName: nameData(),
    //评估时间
    riskAssessTime: '2018-3-6',
    //风险分类
    riskGround: '场所',
    //划分依据
    riskCateBasis: '根据安全风险点查找指导手册第XX章第YY节',
    //划分人
    riskCateName: nameData(),
    //划分时间
    riskCateTime: '2018-3-9',
    //风险级别
    riskLevel: 'III',
    //评估人
    riskLevelName: nameData(),
    //评估时间
    riskLevelTime: '2018-3-13',
    //管控措施
    riskMeasure: '设置紧急切断装置，设置有毒有害气体泄漏检测报警装置',
    //负责人
    riskManger: nameData(),
    //负责人联系电话
    riskManTel:'13456789032',
    //负责部门
    riskManDepart: '设备管理部',
    //制定人
    riskDeveloper: nameData(),
    //制定时间
    riskDevTime: '2018-3-14',
    //主管（监管）单位、街道
    riskStreet:`${randomData[20][5]}安监局`,
    //上报单元
    riskReportUnit: `${randomData[20][4]}安监局`,
    //上报人
    riskReporter: nameData(),
    //上报时间
    riskReportTime: '2018-3-16',
  },
  {
    key: '22',
    //风险点序号
    riskID: '22',
    //风险点所在行政区划
    riskDivision: randomData[21][0],
    //风险类别
    riskCategory: '危险化学品',
    //风险点所在单位
    riskCompany: `${randomData[21][0]}德诺化工有限公司`,
    //风险点所在详细位置
    riskAddress: '沫河口工业园区开源大道',
    //风险点所在经纬度
    riskLI: randomData[21][3],
    //风险名称
    riskName: '液氨、甲醇储存装置',
    //登记人
    riskRegName: nameData(),
    //登记日期
    riskRegTime: '2018-4-5',
    //风险点所在部门
    riskDepart: '生产管理部',
    //是否重大危险源
    dangerSource: '否',
    //重大危险源级别
    dangerLevel: '',
    //风险特征产生条件
    riskCondition: '易燃易爆、剧毒，事故产生条件：泄漏、明火、静电',
    //风险描述
    riskDesc: '',
    //事故发生的可能性
    riskPossible: '可能发生',
    //级别
    riskPossibleLevel: 'III',
    //事故发生的可致后果
    riskResult: '火灾、爆炸、中毒',
    //级别
    riskResultLevel: '4',
    //评估人
    riskAssessName: nameData(),
    //评估时间
    riskAssessTime: '2018-4-6',
    //风险分类
    riskGround: '场所',
    //划分依据
    riskCateBasis: '根据安全风险点查找指导手册第XX章第YY节',
    //划分人
    riskCateName: nameData(),
    //划分时间
    riskCateTime: '2018-4-9',
    //风险级别
    riskLevel: 'III',
    //评估人
    riskLevelName: nameData(),
    //评估时间
    riskLevelTime: '2018-4-13',
    //管控措施
    riskMeasure: '设置紧急切断装置，设置有毒有害气体泄漏检测报警装置',
    //负责人
    riskManger: nameData(),
    //负责人联系电话
    riskManTel:'13456789033',
    //负责部门
    riskManDepart: '生产管理部',
    //制定人
    riskDeveloper: nameData(),
    //制定时间
    riskDevTime: '2018-4-14',
    //主管（监管）单位、街道
    riskStreet:`${randomData[21][5]}安监局`,
    //上报单元
    riskReportUnit: `${randomData[21][4]}安监局`,
    //上报人
    riskReporter: nameData(),
    //上报时间
    riskReportTime: '2018-4-16',
  },
  {
    key: '23',
    //风险点序号
    riskID: '23',
    //风险点所在行政区划
    riskDivision: randomData[22][0],
    //风险类别
    riskCategory: '危险化学品',
    //风险点所在单位
    riskCompany: `${randomData[22][0]}金马橡胶助剂有限公司`,
    //风险点所在详细位置
    riskAddress: '沫河口工业园区开源大道',
    //风险点所在经纬度
    riskLI: randomData[22][3],
    //风险名称
    riskName: '液氯储存',
    //登记人
    riskRegName: nameData(),
    //登记日期
    riskRegTime: '2018-5-5',
    //风险点所在部门
    riskDepart: '生产管理部',
    //是否重大危险源
    dangerSource: '否',
    //重大危险源级别
    dangerLevel: '',
    //风险特征产生条件
    riskCondition: '剧毒，事故产生条件：泄漏',
    //风险描述
    riskDesc: '',
    //事故发生的可能性
    riskPossible: '可能发生',
    //级别
    riskPossibleLevel: 'III',
    //事故发生的可致后果
    riskResult: '中毒',
    //级别
    riskResultLevel: '4',
    //评估人
    riskAssessName: nameData(),
    //评估时间
    riskAssessTime: '2018-5-6',
    //风险分类
    riskGround: '场所',
    //划分依据
    riskCateBasis: '根据安全风险点查找指导手册第XX章第YY节',
    //划分人
    riskCateName: nameData(),
    //划分时间
    riskCateTime: '2018-5-9',
    //风险级别
    riskLevel: 'III',
    //评估人
    riskLevelName: nameData(),
    //评估时间
    riskLevelTime: '2018-5-13',
    //管控措施
    riskMeasure: '设置紧急切断装置，设置有毒有害气体泄漏检测报警装置',
    //负责人
    riskManger: nameData(),
    //负责人联系电话
    riskManTel:'13456789034',
    //负责部门
    riskManDepart: '技术管理部',
    //制定人
    riskDeveloper: nameData(),
    //制定时间
    riskDevTime: '2018-5-14',
    //主管（监管）单位、街道
    riskStreet:`${randomData[22][5]}安监局`,
    //上报单元
    riskReportUnit: `${randomData[22][4]}安监局`,
    //上报人
    riskReporter: nameData(),
    //上报时间
    riskReportTime: '2018-5-16',
  },
  {
    key: '24',
    //风险点序号
    riskID: '24',
    //风险点所在行政区划
    riskDivision: randomData[23][0],
    //风险类别
    riskCategory: '危险化学品',
    //风险点所在单位
    riskCompany: `${randomData[23][0]}海华科技股份有限公司(生产二部)`,
    //风险点所在详细位置
    riskAddress: '沫河口工业园区开源大道',
    //风险点所在经纬度
    riskLI: randomData[23][3],
    //风险名称
    riskName: '危化品罐区',
    //登记人
    riskRegName: nameData(),
    //登记日期
    riskRegTime: '2018-1-5',
    //风险点所在部门
    riskDepart: '生产管理部',
    //是否重大危险源
    dangerSource: '否',
    //重大危险源级别
    dangerLevel: '',
    //风险特征产生条件
    riskCondition: '易燃易爆、有毒，事故产生条件：泄漏、明火、静电',
    //风险描述
    riskDesc: '',
    //事故发生的可能性
    riskPossible: '可能发生',
    //级别
    riskPossibleLevel: 'III',
    //事故发生的可致后果
    riskResult: '火灾、爆炸、腐蚀、中毒',
    //级别
    riskResultLevel: '4',
    //评估人
    riskAssessName: nameData(),
    //评估时间
    riskAssessTime: '2018-1-6',
    //风险分类
    riskGround: '场所',
    //划分依据
    riskCateBasis: '根据安全风险点查找指导手册第XX章第YY节',
    //划分人
    riskCateName: nameData(),
    //划分时间
    riskCateTime: '2018-1-9',
    //风险级别
    riskLevel: 'Ⅱ',
    //评估人
    riskLevelName: nameData(),
    //评估时间
    riskLevelTime: '2018-1-13',
    //管控措施
    riskMeasure: '设置紧急切断装置，设置有毒有害气体泄漏检测报警装置',
    //负责人
    riskManger: nameData(),
    //负责人联系电话
    riskManTel:'13456789035',
    //负责部门
    riskManDepart: '辅助车间',
    //制定人
    riskDeveloper: nameData(),
    //制定时间
    riskDevTime: '2018-1-14',
    //主管（监管）单位、街道
    riskStreet:`${randomData[23][5]}安监局`,
    //上报单元
    riskReportUnit: `${randomData[23][4]}安监局`,
    //上报人
    riskReporter: nameData(),
    //上报时间
    riskReportTime: '2018-1-16',
  },
  {
    key: '25',
    //风险点序号
    riskID: '25',
    //风险点所在行政区划
    riskDivision: randomData[24][0],
    //风险类别
    riskCategory: '危险化学品',
    //风险点所在单位
    riskCompany: `${randomData[24][0]}海华科技股份有限公司(生产一部)`,
    //风险点所在详细位置
    riskAddress: '沫河口工业园区开源大道',
    //风险点所在经纬度
    riskLI: randomData[24][3],
    //风险名称
    riskName: '危化品罐区',
    //登记人
    riskRegName: nameData(),
    //登记日期
    riskRegTime: '2018-2-5',
    //风险点所在部门
    riskDepart: '生产管理部',
    //是否重大危险源
    dangerSource: '否',
    //重大危险源级别
    dangerLevel: '',
    //风险特征产生条件
    riskCondition: '易燃易爆、有毒，事故产生条件：泄漏、明火、静电',
    //风险描述
    riskDesc: '',
    //事故发生的可能性
    riskPossible: '可能发生',
    //级别
    riskPossibleLevel: 'III',
    //事故发生的可致后果
    riskResult: '火灾、爆炸、腐蚀、中毒',
    //级别
    riskResultLevel: '4',
    //评估人
    riskAssessName: nameData(),
    //评估时间
    riskAssessTime: '2018-2-6',
    //风险分类
    riskGround: '场所',
    //划分依据
    riskCateBasis: '根据安全风险点查找指导手册第XX章第YY节',
    //划分人
    riskCateName: nameData(),
    //划分时间
    riskCateTime: '2018-2-9',
    //风险级别
    riskLevel: 'III',
    //评估人
    riskLevelName: nameData(),
    //评估时间
    riskLevelTime: '2018-2-13',
    //管控措施
    riskMeasure: '设置紧急切断装置，设置有毒有害气体泄漏检测报警装置',
    //负责人
    riskManger: nameData(),
    //负责人联系电话
    riskManTel:'13456789036',
    //负责部门
    riskManDepart: '辅助车间',
    //制定人
    riskDeveloper: nameData(),
    //制定时间
    riskDevTime: '2018-2-14',
    //主管（监管）单位、街道
    riskStreet:`${randomData[24][5]}安监局`,
    //上报单元
    riskReportUnit: `${randomData[24][4]}安监局`,
    //上报人
    riskReporter: nameData(),
    //上报时间
    riskReportTime: '2018-2-16',
  },
  {
    key: '26',
    //风险点序号
    riskID: '26',
    //风险点所在行政区划
    riskDivision: randomData[25][0],
    //风险类别
    riskCategory: '危险化学品',
    //风险点所在单位
    riskCompany: `${randomData[25][0]}东方气体有限公司`,
    //风险点所在详细位置
    riskAddress: '小蚌埠镇',
    //风险点所在经纬度
    riskLI: randomData[25][3],
    //风险名称
    riskName: '气体罐区',
    //登记人
    riskRegName: nameData(),
    //登记日期
    riskRegTime: '2018-3-5',
    //风险点所在部门
    riskDepart: '生产管理部',
    //是否重大危险源
    dangerSource: '否',
    //重大危险源级别
    dangerLevel: '',
    //风险特征产生条件
    riskCondition: '易燃易爆、冻伤，事故产生条件：泄漏、明火、静电',
    //风险描述
    riskDesc: '',
    //事故发生的可能性
    riskPossible: '可能发生',
    //级别
    riskPossibleLevel: 'III',
    //事故发生的可致后果
    riskResult: '火灾、爆炸',
    //级别
    riskResultLevel: '4',
    //评估人
    riskAssessName: nameData(),
    //评估时间
    riskAssessTime: '2018-3-6',
    //风险分类
    riskGround: '场所',
    //划分依据
    riskCateBasis: '根据安全风险点查找指导手册第XX章第YY节',
    //划分人
    riskCateName: nameData(),
    //划分时间
    riskCateTime: '2018-3-9',
    //风险级别
    riskLevel: 'III',
    //评估人
    riskLevelName: nameData(),
    //评估时间
    riskLevelTime: '2018-3-13',
    //管控措施
    riskMeasure: '设置紧急切断装置，设置有毒有害气体泄漏检测报警装置',
    //负责人
    riskManger: nameData(),
    //负责人联系电话
    riskManTel:'13456789037',
    //负责部门
    riskManDepart: '设备管理部',
    //制定人
    riskDeveloper: nameData(),
    //制定时间
    riskDevTime: '2018-3-14',
    //主管（监管）单位、街道
    riskStreet:`${randomData[25][5]}安监局`,
    //上报单元
    riskReportUnit: `${randomData[25][4]}安监局`,
    //上报人
    riskReporter: nameData(),
    //上报时间
    riskReportTime: '2018-3-16',
  },
  {
    key: '27',
    //风险点序号
    riskID: '27',
    //风险点所在行政区划
    riskDivision: randomData[26][0],
    //风险类别
    riskCategory: '危险化学品',
    //风险点所在单位
    riskCompany: `${randomData[26][0]}五河春生物科技有限公司`,
    //风险点所在详细位置
    riskAddress: '五河城关镇',
    //风险点所在经纬度
    riskLI: randomData[26][3],
    //风险名称
    riskName: '乙醇罐区',
    //登记人
    riskRegName: nameData(),
    //登记日期
    riskRegTime: '2018-4-5',
    //风险点所在部门
    riskDepart: '生产管理部',
    //是否重大危险源
    dangerSource: '否',
    //重大危险源级别
    dangerLevel: '',
    //风险特征产生条件
    riskCondition: '易燃易爆、冻伤，事故产生条件：泄漏、明火、静电',
    //风险描述
    riskDesc: '',
    //事故发生的可能性
    riskPossible: '可能发生',
    //级别
    riskPossibleLevel: 'III',
    //事故发生的可致后果
    riskResult: '火灾、爆炸',
    //级别
    riskResultLevel: '4',
    //评估人
    riskAssessName: nameData(),
    //评估时间
    riskAssessTime: '2018-4-6',
    //风险分类
    riskGround: '场所',
    //划分依据
    riskCateBasis: '根据安全风险点查找指导手册第XX章第YY节',
    //划分人
    riskCateName: nameData(),
    //划分时间
    riskCateTime: '2018-4-9',
    //风险级别
    riskLevel: 'III',
    //评估人
    riskLevelName: nameData(),
    //评估时间
    riskLevelTime: '2018-4-13',
    //管控措施
    riskMeasure: '设置可燃气体泄漏检测报警装置',
    //负责人
    riskManger: nameData(),
    //负责人联系电话
    riskManTel:'13456789038',
    //负责部门
    riskManDepart: '技术管理部',
    //制定人
    riskDeveloper: nameData(),
    //制定时间
    riskDevTime: '2018-4-14',
    //主管（监管）单位、街道
    riskStreet:`${randomData[26][5]}安监局`,
    //上报单元
    riskReportUnit: `${randomData[26][4]}安监局`,
    //上报人
    riskReporter: nameData(),
    //上报时间
    riskReportTime: '2018-4-16',
  },
  {
    key: '28',
    //风险点序号
    riskID: '28',
    //风险点所在行政区划
    riskDivision: randomData[27][0],
    //风险类别
    riskCategory: '危险化学品',
    //风险点所在单位
    riskCompany: `${randomData[27][0]}新奥燃气有限公司`,
    //风险点所在详细位置
    riskAddress: '柳工大道东侧',
    //风险点所在经纬度
    riskLI: randomData[27][3],
    //风险名称
    riskName: '天然气球罐',
    //登记人
    riskRegName: nameData(),
    //登记日期
    riskRegTime: '2018-5-5',
    //风险点所在部门
    riskDepart: '生产管理部',
    //是否重大危险源
    dangerSource: '是',
    //重大危险源级别
    dangerLevel: '一级',
    //风险特征产生条件
    riskCondition: '球罐超压、安全阀失灵、或阀门等设备损坏造成泄漏。',
    //风险描述
    riskDesc: '',
    //事故发生的可能性
    riskPossible: '可能发生',
    //级别
    riskPossibleLevel: 'III',
    //事故发生的可致后果
    riskResult: '天然气泄漏，达到一定浓度后遇明火或静电火花爆炸起火，造成人员、财产重大损失。',
    //级别
    riskResultLevel: '4',
    //评估人
    riskAssessName: nameData(),
    //评估时间
    riskAssessTime: '2018-5-6',
    //风险分类
    riskGround: '压缩天然气',
    //划分依据
    riskCateBasis: '根据安全风险点查找指导手册第XX章第YY节',
    //划分人
    riskCateName: nameData(),
    //划分时间
    riskCateTime: '2018-5-9',
    //风险级别
    riskLevel: 'I',
    //评估人
    riskLevelName: nameData(),
    //评估时间
    riskLevelTime: '2018-5-13',
    //管控措施
    riskMeasure: '安装有浓度报警器及远程监控、当班人员定期巡视，安全附件、罐体严格按照要求校验。',
    //负责人
    riskManger: nameData(),
    //负责人联系电话
    riskManTel:'13456789039',
    //负责部门
    riskManDepart: '辅助车间',
    //制定人
    riskDeveloper: nameData(),
    //制定时间
    riskDevTime: '2018-5-14',
    //主管（监管）单位、街道
    riskStreet:`${randomData[27][5]}安监局`,
    //上报单元
    riskReportUnit: `${randomData[27][4]}安监局`,
    //上报人
    riskReporter: nameData(),
    //上报时间
    riskReportTime: '2018-5-16',
  },
  {
    key: '29',
    //风险点序号
    riskID: '29',
    //风险点所在行政区划
    riskDivision: randomData[28][0],
    //风险类别
    riskCategory: '危险化学品',
    //风险点所在单位
    riskCompany: `${randomData[28][0]}中环水务有限公司`,
    //风险点所在详细位置
    riskAddress: '黑虎山路55号',
    //风险点所在经纬度
    riskLI: randomData[28][3],
    //风险名称
    riskName: '液氯罐区',
    //登记人
    riskRegName: nameData(),
    //登记日期
    riskRegTime: '2018-1-5',
    //风险点所在部门
    riskDepart: '生产管理部',
    //是否重大危险源
    dangerSource: '是',
    //重大危险源级别
    dangerLevel: '一级',
    //风险特征产生条件
    riskCondition: '剧毒，事故产生条件：泄漏',
    //风险描述
    riskDesc: '',
    //事故发生的可能性
    riskPossible: '可能发生',
    //级别
    riskPossibleLevel: 'III',
    //事故发生的可致后果
    riskResult: '腐蚀、中毒',
    //级别
    riskResultLevel: '4',
    //评估人
    riskAssessName: nameData(),
    //评估时间
    riskAssessTime: '2018-1-6',
    //风险分类
    riskGround: '加氯间',
    //划分依据
    riskCateBasis: '根据安全风险点查找指导手册第XX章第YY节',
    //划分人
    riskCateName: nameData(),
    //划分时间
    riskCateTime: '2018-1-9',
    //风险级别
    riskLevel: 'III',
    //评估人
    riskLevelName: nameData(),
    //评估时间
    riskLevelTime: '2018-1-13',
    //管控措施
    riskMeasure: '设置紧急切断装置，设置氯气泄漏检测报警装置，设置氯气泄露回收装置',
    //负责人
    riskManger: nameData(),
    //负责人联系电话
    riskManTel:'13456789040',
    //负责部门
    riskManDepart: '辅助车间',
    //制定人
    riskDeveloper: nameData(),
    //制定时间
    riskDevTime: '2018-1-14',
    //主管（监管）单位、街道
    riskStreet:`${randomData[28][5]}安监局`,
    //上报单元
    riskReportUnit: `${randomData[28][4]}安监局`,
    //上报人
    riskReporter: nameData(),
    //上报时间
    riskReportTime: '2018-1-16',
  },
];

//表格字段
const formColumn = [
  {
    name: "基本信息",
    type: "title"
  },
  {
    name: "风险名称",
    value: "riskName",
    type: "input",
  },
  {
    name: "风险点序号",
    value: "riskID",
    type: "input",
    span: 12,
  },
  {
    name: "风险描述",
    value: "riskDesc",
    type: "input",
    span: 12,
    style: {"borderLeft": "none", "borderBottom": "none"},
  },
  {
    name: "风险点所在行政区划",
    value: "riskDivision",
    span: 12,
  },
  {
    name: "风险类别",
    value: "riskCategory",
    type: "select",
    option: [],
    span: 12,
    style: {"borderLeft": "none", "borderBottom": "none"},
  },
  {
    name: "风险点所在部门",
    value: "riskDepart",
    type: "input",
    span: 12,
  },
  {
    name: "风险点所在单位",
    value: "riskCompany",
    span: 12,
    style: {"borderLeft": "none", "borderBottom": "none"},
  },
  {
    name: "风险点所在详细位置",
    value: "riskAddress",
    span: 12,
  },
  {
    name: "风险点所在经纬度",
    value: "riskLI",
    span: 12,
    style: {"borderLeft": "none", "borderBottom": "none"},
  },
  {
    name: '是否重大危险源',
    value: 'dangerSource',
    span: 12,
    type: "select",
    option: [
      {
        value: "是"
      },
      {
        value: "否"
      }
    ]
  }, {
    name: '重大危险源级别',
    value: 'dangerLevel',
    span: 12,
    style: {"borderLeft": "none", "borderBottom": "none"},
    type: "select",
    option: [
      {
        value: "一级"
      },
      {
        value: "二级"
      },
      {
        value: "三级"
      },
      {
        value: "四级"
      }
    ]
  },
  {
    name: "登记人",
    value: "riskRegName",
    type: "input",
    span: 12,
  },
  {
    name: "登记日期",
    value: "riskRegTime",
    type: "date",
    span: 12,
    style: {"borderLeft": "none"},
  },
  {
    name: "风险评估",
    type: "title"
  },
  {
    name: "风险特征产生条件",
    value: "riskCondition",
    type: "input",
  },
  {
    name: "事故发生的可能性",
    value: "riskPossible",
    type: "input",
    span: 12,
  },
  {
    name: "级别",
    value: "riskPossibleLevel",
    span: 12,
    style: {"borderLeft": "none", "borderBottom": "none"},
    type: "select",
    option: [
      {
        value: '极有可能发生'
      }, {
        value: '很可能发生'
      }, {
        value: '可能发生'
      }, {
        value: '较不可能发生'
      }, {
        value: '基本不可能发生'
      },
    ]
  }, {
    name: "事故发生的可致后果",
    value: "riskResult",
    type: "input",
    span: 12,
  },
  {
    name: "级别",
    value: "riskResultLevel",
    span: 12,
    style: {"borderLeft": "none", "borderBottom": "none"},
    type: "select",
    option: [
      {
        value: '影响特别重大'
      }, {
        value: '影响重大'
      }, {
        value: '影响较大'
      }, {
        value: '影响一般'
      }, {
        value: '影响很小'
      },
    ]
  },
  {
    name: "评估人",
    value: "riskAssessName",
    type: "input",
    span: 12,
  },
  {
    name: "评估时间",
    value: "riskAssessTime",
    span: 12,
    style: {"borderLeft": "none", "borderBottom": "none"},
    type: "date",
  },
  {
    name: "风险分类",
    type: "title"
  },
  {
    name: "风险分类",
    value: "riskGround",
    type: "select",
    option: [
      {
        value: "安全生产相关证照"
      },
      {
        value: "安全生产管理机构设置情况"
      },
      {
        value: "“三同时”管理"
      },
      {
        value: "安全生产责任制"
      },
      {
        value: "安全培训"
      },
      {
        value: "事故隐患排查"
      },
      {
        value: "应急救援及演练"
      },
      {
        value: "外包单位及管理"
      },
      {
        value: "职业健康防护"
      }
    ]
  }, {
    name: "划分依据",
    value: "riskCateBasis",
    type: "input",
  },
  {
    name: "划分人",
    value: "riskCateName",
    type: "input",
    span: 12,
  },
  {
    name: "划分时间",
    value: "riskCateTime",
    span: 12,
    style: {"borderLeft": "none", "borderBottom": "none"},
    type: "date",
  },
  {
    name: "风险分级",
    type: "title"
  },
  {
    name: "风险级别",
    value: "riskLevel",
    type: "select",
    option: [
      {
        value: '极有可能发生'
      }, {
        value: '很可能发生'
      }, {
        value: '可能发生'
      }, {
        value: '较不可能发生'
      }, {
        value: '基本不可能发生'
      },
    ]
  },
  {
    name: "评估人",
    value: "riskLevelName",
    type: "input",
    span: 12,
  },
  {
    name: "评估时间",
    value: "riskLevelTime",
    span: 12,
    style: {"borderLeft": "none", "borderBottom": "none"},
    type: "date",
  },
  {
    name: "风险防范",
    type: "title"
  },
  {
    name: "管控措施",
    value: "riskMeasure",
    type: "input",
  },
  {
    name: "负责部门",
    value: "riskManDepart",
    type: "input",
  },
  {
    name: "负责人",
    value: "riskManger",
    type: "input",
    span: 12,
  },
  {
    name: "负责人联系电话",
    value: "riskManTel",
    span: 12,
    style: {"borderLeft": "none", "borderBottom": "none"},
    type: "input",
  }, {
    name: "制定人",
    value: "riskDeveloper",
    type: "input",
    span: 12,
  },
  {
    name: "制定时间",
    value: "riskDevTime",
    span: 12,
    style: {"borderLeft": "none"},
    type: "date",
  },
  {
    name: "风险上报",
    type: "title"
  },
  {
    name: "上报单元",
    value: "riskReportUnit",
    type: "input",
    span: 12,
  },
  {
    name: "主管(监管)单位、街道",
    value: "riskStreet",
    type: "input",
    span: 12,
    style: {"borderLeft": "none", "borderBottom": "none"},
  },
  {
    name: "上报人",
    value: "riskReporter",
    type: "input",
    span: 12,
  },
  {
    name: "上报时间",
    value: "riskReportTime",
    type: "date",
    span: 12,
    style: {"borderLeft": "none"},
  },
];

export {formColumn, dataSource};
