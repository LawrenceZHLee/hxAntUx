//所有字段
const riskCom = [
  {
    title: "基本信息",
    type: "title"
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
        dataIndex: "是"
      },
      {
        dataIndex: "否"
      }
    ]
  }, {
    title: '重大危险源级别',
    dataIndex: 'dangerLevel',
    option: [
      {
        dataIndex: "一级"
      },
      {
        dataIndex: "二级"
      },
      {
        dataIndex: "三级"
      },
      {
        dataIndex: "四级"
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
    title: "事故发生的可能性",
    dataIndex: "riskPossible",
  },
  {
    title: "级别",
    dataIndex: "riskPossibleLevel",
    option: [
      {
        dataIndex: '极有可能发生'
      }, {
        dataIndex: '很可能发生'
      }, {
        dataIndex: '可能发生'
      }, {
        dataIndex: '较不可能发生'
      }, {
        dataIndex: '基本不可能发生'
      },
    ]
  }, {
    title: "事故发生的可致后果",
    dataIndex: "riskResult",
  },
  {
    title: "级别",
    dataIndex: "riskResultLevel",
    option: [
      {
        dataIndex: '影响特别重大'
      }, {
        dataIndex: '影响重大'
      }, {
        dataIndex: '影响较大'
      }, {
        dataIndex: '影响一般'
      }, {
        dataIndex: '影响很小'
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
        dataIndex: '极有可能发生'
      }, {
        dataIndex: '很可能发生'
      }, {
        dataIndex: '可能发生'
      }, {
        dataIndex: '较不可能发生'
      }, {
        dataIndex: '基本不可能发生'
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
    title: "负责人",
    dataIndex: "riskManger",
  },
  {
    title: "负责部门",
    dataIndex: "riskManDepart",
  }, {
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
    title: "上报人",
    dataIndex: "riskReporter",
  },
  {
    title: "上报时间",
    dataIndex: "riskReportTime",
  },
];
