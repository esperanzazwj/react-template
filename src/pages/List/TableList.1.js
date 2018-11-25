import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Select,
  Icon,
  Button,
  Dropdown,
  Menu,
  InputNumber,
  DatePicker,
  Modal,
  message,
  Badge,
  Divider,
  Steps,
  Radio,
  List,
  Avatar,
} from 'antd';
import StandardTable from '@/components/StandardTable';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import TagSelect from '@/components/TagSelect';
import AvatarList from '@/components/AvatarList';
import Ellipsis from '@/components/Ellipsis';
import StandardFormRow from '@/components/StandardFormRow';

import styles from './TableList.less';

const FormItem = Form.Item;
const { Step } = Steps;
const { TextArea } = Input;
const { Option } = Select;
const RadioGroup = Radio.Group;
const getValue = obj =>
  Object.keys(obj)
    .map(key => obj[key])
    .join(',');
// const statusMap = ['default', 'processing', 'success', 'error'];
// const status = ['关闭', '运行中', '已上线', '异常'];

// const CreateForm = Form.create()(props => {
//   const { modalVisible, form, handleAdd, handleModalVisible } = props;
//   const okHandle = () => {
//     form.validateFields((err, fieldsValue) => {
//       if (err) return;
//       form.resetFields();
//       handleAdd(fieldsValue);
//     });
//   };
//   return (
//     <Modal
//       destroyOnClose
//       title="新建规则"
//       visible={modalVisible}
//       onOk={okHandle}
//       onCancel={() => handleModalVisible()}
//     >
//       <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="描述">
//         {form.getFieldDecorator('desc', {
//           rules: [{ required: true, message: '请输入至少五个字符的规则描述！', min: 5 }],
//         })(<Input placeholder="请输入" />)}
//       </FormItem>
//     </Modal>
//   );
// });

@Form.create()
class UpdateForm extends PureComponent {
  constructor(props) {
    super(props);

    // this.state = {
    //   formVals: {
    //     name: props.values.name,
    //     desc: props.values.desc,
    //     key: props.values.key,
    //     target: '0',
    //     template: '0',
    //     type: '1',
    //     time: '',
    //     frequency: 'month',
    //   },
    //   currentStep: 0,
    // };

    // this.formLayout = {
    //   labelCol: { span: 7 },
    //   wrapperCol: { span: 13 },
    // };
  }

  // handleNext = currentStep => {
  //   const { form, handleUpdate } = this.props;
  //   const { formVals: oldValue } = this.state;
  //   form.validateFields((err, fieldsValue) => {
  //     if (err) return;
  //     const formVals = { ...oldValue, ...fieldsValue };
  //     this.setState(
  //       {
  //         formVals,
  //       },
  //       () => {
  //         if (currentStep < 2) {
  //           this.forward();
  //         } else {
  //           handleUpdate(formVals);
  //         }
  //       }
  //     );
  //   });
  // };

  // backward = () => {
  //   const { currentStep } = this.state;
  //   this.setState({
  //     currentStep: currentStep - 1,
  //   });
  // };

  // forward = () => {
  //   const { currentStep } = this.state;
  //   this.setState({
  //     currentStep: currentStep + 1,
  //   });
  // };

  // renderContent = (currentStep, formVals) => {
  //   const { form } = this.props;
  //   if (currentStep === 1) {
  //     return [
  //       <FormItem key="target" {...this.formLayout} label="监控对象">
  //         {form.getFieldDecorator('target', {
  //           initialValue: formVals.target,
  //         })(
  //           <Select style={{ width: '100%' }}>
  //             <Option value="0">表一</Option>
  //             <Option value="1">表二</Option>
  //           </Select>
  //         )}
  //       </FormItem>,
  //       <FormItem key="template" {...this.formLayout} label="规则模板">
  //         {form.getFieldDecorator('template', {
  //           initialValue: formVals.template,
  //         })(
  //           <Select style={{ width: '100%' }}>
  //             <Option value="0">规则模板一</Option>
  //             <Option value="1">规则模板二</Option>
  //           </Select>
  //         )}
  //       </FormItem>,
  //       <FormItem key="type" {...this.formLayout} label="规则类型">
  //         {form.getFieldDecorator('type', {
  //           initialValue: formVals.type,
  //         })(
  //           <RadioGroup>
  //             <Radio value="0">强</Radio>
  //             <Radio value="1">弱</Radio>
  //           </RadioGroup>
  //         )}
  //       </FormItem>,
  //     ];
  //   }
  //   if (currentStep === 2) {
  //     return [
  //       <FormItem key="time" {...this.formLayout} label="开始时间">
  //         {form.getFieldDecorator('time', {
  //           rules: [{ required: true, message: '请选择开始时间！' }],
  //         })(
  //           <DatePicker
  //             style={{ width: '100%' }}
  //             showTime
  //             format="YYYY-MM-DD HH:mm:ss"
  //             placeholder="选择开始时间"
  //           />
  //         )}
  //       </FormItem>,
  //       <FormItem key="frequency" {...this.formLayout} label="调度周期">
  //         {form.getFieldDecorator('frequency', {
  //           initialValue: formVals.frequency,
  //         })(
  //           <Select style={{ width: '100%' }}>
  //             <Option value="month">月</Option>
  //             <Option value="week">周</Option>
  //           </Select>
  //         )}
  //       </FormItem>,
  //     ];
  //   }
  //   return [
  //     <FormItem key="name" {...this.formLayout} label="规则名称">
  //       {form.getFieldDecorator('name', {
  //         rules: [{ required: true, message: '请输入规则名称！' }],
  //         initialValue: formVals.name,
  //       })(<Input placeholder="请输入" />)}
  //     </FormItem>,
  //     <FormItem key="desc" {...this.formLayout} label="规则描述">
  //       {form.getFieldDecorator('desc', {
  //         rules: [{ required: true, message: '请输入至少五个字符的规则描述！', min: 5 }],
  //         initialValue: formVals.desc,
  //       })(<TextArea rows={4} placeholder="请输入至少五个字符" />)}
  //     </FormItem>,
  //   ];
  // };

  // renderFooter = currentStep => {
  //   const { handleUpdateModalVisible } = this.props;
  //   if (currentStep === 1) {
  //     return [
  //       <Button key="back" style={{ float: 'left' }} onClick={this.backward}>
  //         上一步
  //       </Button>,
  //       <Button key="cancel" onClick={() => handleUpdateModalVisible()}>
  //         取消
  //       </Button>,
  //       <Button key="forward" type="primary" onClick={() => this.handleNext(currentStep)}>
  //         下一步
  //       </Button>,
  //     ];
  //   }
  //   if (currentStep === 2) {
  //     return [
  //       <Button key="back" style={{ float: 'left' }} onClick={this.backward}>
  //         上一步
  //       </Button>,
  //       <Button key="cancel" onClick={() => handleUpdateModalVisible()}>
  //         取消
  //       </Button>,
  //       <Button key="submit" type="primary" onClick={() => this.handleNext(currentStep)}>
  //         完成
  //       </Button>,
  //     ];
  //   }
  //   return [
  //     <Button key="cancel" onClick={() => handleUpdateModalVisible()}>
  //       取消
  //     </Button>,
  //     <Button key="forward" type="primary" onClick={() => this.handleNext(currentStep)}>
  //       下一步
  //     </Button>,
  //   ];
  // };

  // render() {
  //   const { updateModalVisible, handleUpdateModalVisible } = this.props;
  //   const { currentStep, formVals } = this.state;

  //   return (
  //     <Modal
  //       width={640}
  //       bodyStyle={{ padding: '32px 40px 48px' }}
  //       destroyOnClose
  //       title="规则配置"
  //       visible={updateModalVisible}
  //       footer={this.renderFooter(currentStep)}
  //       onCancel={() => handleUpdateModalVisible()}
  //     >
  //       <Steps style={{ marginBottom: 28 }} size="small" current={currentStep}>
  //         <Step title="基本信息" />
  //         <Step title="配置规则属性" />
  //         <Step title="设定调度周期" />
  //       </Steps>
  //       {this.renderContent(currentStep, formVals)}
  //     </Modal>
  //   );
  // }
}

/* eslint react/no-multi-comp:0 */
@connect(({ list, rule, loading }) => ({
  list,
  rule,
  loading: loading.models.list,
}))

@Form.create()
class TableList extends PureComponent {
  state = {
    // modalVisible: false,
    // updateModalVisible: false,
    expandForm: false,
    roundtrip: false,
    // selectedRows: [],
    // formValues: {},
    // stepFormValues: {},
  };

  // columns = [
  //   {
  //     title: '规则名称',
  //     dataIndex: 'name',
  //   },
  //   {
  //     title: '描述',
  //     dataIndex: 'desc',
  //   },
  //   {
  //     title: '服务调用次数',
  //     dataIndex: 'callNo',
  //     sorter: true,
  //     align: 'right',
  //     render: val => `${val} 万`,
  //     // mark to display a total number
  //     needTotal: true,
  //   },
  //   {
  //     title: '状态',
  //     dataIndex: 'status',
  //     filters: [
  //       {
  //         text: status[0],
  //         value: 0,
  //       },
  //       {
  //         text: status[1],
  //         value: 1,
  //       },
  //       {
  //         text: status[2],
  //         value: 2,
  //       },
  //       {
  //         text: status[3],
  //         value: 3,
  //       },
  //     ],
  //     render(val) {
  //       return <Badge status={statusMap[val]} text={status[val]} />;
  //     },
  //   },
  //   {
  //     title: '上次调度时间',
  //     dataIndex: 'updatedAt',
  //     sorter: true,
  //     render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
  //   },
  //   {
  //     title: '操作',
  //     render: (text, record) => (
  //       <Fragment>
  //         <a onClick={() => this.handleUpdateModalVisible(true, record)}>Star</a>
  //         <Divider type="vertical" />
  //         <a href="">Details</a>
  //       </Fragment>
  //     ),
  //   },
  // ];

  // componentDidMount() {
  //   const { dispatch } = this.props;
  //   dispatch({
  //     type: 'rule/fetch',
  //   });
  // }

  // handleStandardTableChange = (pagination, filtersArg, sorter) => {
  //   const { dispatch } = this.props;
  //   const { formValues } = this.state;

  //   const filters = Object.keys(filtersArg).reduce((obj, key) => {
  //     const newObj = { ...obj };
  //     newObj[key] = getValue(filtersArg[key]);
  //     return newObj;
  //   }, {});

  //   const params = {
  //     currentPage: pagination.current,
  //     pageSize: pagination.pageSize,
  //     ...formValues,
  //     ...filters,
  //   };
  //   if (sorter.field) {
  //     params.sorter = `${sorter.field}_${sorter.order}`;
  //   }

  //   dispatch({
  //     type: 'rule/fetch',
  //     payload: params,
  //   });
  // };

  handleFormReset = () => {
    const { form, dispatch } = this.props;
    form.resetFields();
    this.setState({
      formValues: {},
    });
    dispatch({
      type: 'rule/fetch',
      payload: {},
    });
  };

  toggleForm = () => {
    const { expandForm } = this.state;
    this.setState({
      expandForm: !expandForm,
    });
  };

  handleRoundtripChange = e => {
    const { roundtrip } = this.state;
    this.setState({
      roundtrip: e,
    });
    // window.alert('chunjie'+ roundtrip + e);
  };

  // handleMenuClick = e => {
  //   const { dispatch } = this.props;
  //   const { selectedRows } = this.state;

  //   if (!selectedRows) return;
  //   switch (e.key) {
  //     case 'remove':
  //       dispatch({
  //         type: 'rule/remove',
  //         payload: {
  //           key: selectedRows.map(row => row.key),
  //         },
  //         callback: () => {
  //           this.setState({
  //             selectedRows: [],
  //           });
  //         },
  //       });
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // handleSelectRows = rows => {
  //   this.setState({
  //     selectedRows: rows,
  //   });
  // };

  handleSearch = e => {
    e.preventDefault();

    const { dispatch, form } = this.props;

    form.validateFields((err, fieldsValue) => {
      if (err) return;

      const values = {
        ...fieldsValue,
        updatedAt: fieldsValue.updatedAt && fieldsValue.updatedAt.valueOf(),
      };

      this.setState({
        formValues: values,
      });

      dispatch({
        type: 'rule/fetch',
        payload: values,
      });
    });
  };

  // handleModalVisible = flag => {
  //   this.setState({
  //     modalVisible: !!flag,
  //   });
  // };

  // handleUpdateModalVisible = (flag, record) => {
  //   this.setState({
  //     updateModalVisible: !!flag,
  //     stepFormValues: record || {},
  //   });
  // };

  // handleAdd = fields => {
  //   const { dispatch } = this.props;
  //   dispatch({
  //     type: 'rule/add',
  //     payload: {
  //       desc: fields.desc,
  //     },
  //   });

  //   message.success('添加成功');
  //   this.handleModalVisible();
  // };

  // handleUpdate = fields => {
  //   const { dispatch } = this.props;
  //   dispatch({
  //     type: 'rule/update',
  //     payload: {
  //       name: fields.name,
  //       desc: fields.desc,
  //       key: fields.key,
  //     },
  //   });

  //   message.success('配置成功');
  //   this.handleUpdateModalVisible();
  // };

  renderSimpleForm() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={12} sm={24}>
            <FormItem label="Origin">
              {getFieldDecorator('origin')(<Input placeholder="City or airport" />)}
            </FormItem>
          </Col>
          <Col md={12} sm={24}>
            <FormItem label="Destination">
              {getFieldDecorator('destination')(<Input placeholder="City or airport" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="Departing">
              {getFieldDecorator('depart')(
                <DatePicker style={{ width: '100%' }} placeholder="YYYY-MM-DD" />
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="Returning">
              {getFieldDecorator('return')(
                <DatePicker style={{ width: '100%' }} placeholder="YYYY-MM-DD" />
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="Travelers">
              {getFieldDecorator('travelers')(
                <Select placeholder="1" style={{ width: '100%' }}>
                  <Option value="0">0</Option>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <span className={styles.submitButtons}>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                Reset
              </Button>
              <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                Down <Icon type="down" />
              </a>
            </span>
          </Col>
        </Row>
      </Form>
    );
  }
  renderSimpleFormOneWay() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={12} sm={24}>
            <FormItem label="Origin">
              {getFieldDecorator('origin')(<Input placeholder="City or airport" />)}
            </FormItem>
          </Col>
          <Col md={12} sm={24}>
            <FormItem label="Destination">
              {getFieldDecorator('destination')(<Input placeholder="City or airport" />)}
            </FormItem>
          </Col>
          <Col md={12} sm={24}>
            <FormItem label="Departing">
              {getFieldDecorator('depart')(
                <DatePicker style={{ width: '100%' }} placeholder="YYYY-MM-DD" />
              )}
            </FormItem>
          </Col>
          <Col md={12} sm={24}>
            <FormItem label="Travelers">
              {getFieldDecorator('travelers')(
                <Select placeholder="1" style={{ width: '100%' }}>
                  <Option value="0">0</Option>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <span className={styles.submitButtons}>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                Reset
              </Button>
              <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                Down <Icon type="down" />
              </a>
            </span>
          </Col>
        </Row>
      </Form>
    );
  }

  renderAdvancedForm() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={12} sm={24}>
            <FormItem label="Origin">
              {getFieldDecorator('origin')(<Input placeholder="City or airport" />)}
            </FormItem>
          </Col>
          <Col md={12} sm={24}>
            <FormItem label="Destination">
              {getFieldDecorator('destination')(<Input placeholder="City or airport" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="Departing">
              {getFieldDecorator('depart')(
                <DatePicker style={{ width: '100%' }} placeholder="YYYY-MM-DD" />
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="Returning">
              {getFieldDecorator('return')(
                <DatePicker style={{ width: '100%' }} placeholder="YYYY-MM-DD" />
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="Travelers">
              {getFieldDecorator('travelers')(
                <Select placeholder="1" style={{ width: '100%' }}>
                  <Option value="0">0</Option>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                </Select>
              )}
            </FormItem>
          </Col>
        </Row>
        <StandardFormRow block style={{ paddingBottom: 11 }}>
              <FormItem label="Airlines">
                {getFieldDecorator('airlines')(
                  <TagSelect expandable>
                    <TagSelect.Option value="airline1">American Airlines</TagSelect.Option>
                    <TagSelect.Option value="airline2">Alaska Airlines</TagSelect.Option>
                    <TagSelect.Option value="airline3">Virgin America</TagSelect.Option>
                    <TagSelect.Option value="airline4">JetBlue Airways</TagSelect.Option>
                    <TagSelect.Option value="airline5">Delta</TagSelect.Option>
                    <TagSelect.Option value="airline6">United</TagSelect.Option>
                    <TagSelect.Option value="airline7">Sun Country Airlines</TagSelect.Option>
                  </TagSelect>
                )}
              </FormItem>
              <FormItem label="Stops">
                {getFieldDecorator('stops')(
                  <TagSelect>
                    <TagSelect.Option value="stop0">Nonstop</TagSelect.Option>
                    <TagSelect.Option value="stop1">1 Stop</TagSelect.Option>
                    <TagSelect.Option value="stop2">2+ Stops</TagSelect.Option>
                  </TagSelect>
                )}
              </FormItem>
              <FormItem label="Outbound departure time">
                {getFieldDecorator('out_time')(
                  <TagSelect expandable>
                    <TagSelect.Option value="out_time0">Early morning (12:00am-4:59am)</TagSelect.Option>
                    <TagSelect.Option value="out_time1">Morning (5:00am-11:59am)</TagSelect.Option>
                    <TagSelect.Option value="out_time2">Afternoon (12:00pm-5:59pm)</TagSelect.Option>
                    <TagSelect.Option value="out_time3">Evening (6:00pm-11:59pm)</TagSelect.Option>
                  </TagSelect>
                )}
              </FormItem>
              <FormItem label="Inbound departure time">
                {getFieldDecorator('in_time')(
                  <TagSelect expandable>
                    <TagSelect.Option value="in_time0">Early morning (12:00am-4:59am)</TagSelect.Option>
                    <TagSelect.Option value="in_time1">Morning (5:00am-11:59am)</TagSelect.Option>
                    <TagSelect.Option value="in_time2">Afternoon (12:00pm-5:59pm)</TagSelect.Option>
                    <TagSelect.Option value="in_time3">Evening (6:00pm-11:59pm)</TagSelect.Option>
                  </TagSelect>
                )}
              </FormItem>
          </StandardFormRow>
        
        <div style={{ overflow: 'hidden' }}>
          <div style={{ float: 'right', marginBottom: 24 }}>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
              Reset
            </Button>
            <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
              Up <Icon type="up" />
            </a>
          </div>
        </div>
      </Form>
    );
  }
  renderAdvancedFormOneWay() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={12} sm={24}>
            <FormItem label="Origin">
              {getFieldDecorator('origin')(<Input placeholder="City or airport" />)}
            </FormItem>
          </Col>
          <Col md={12} sm={24}>
            <FormItem label="Destination">
              {getFieldDecorator('destination')(<Input placeholder="City or airport" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="Departing">
              {getFieldDecorator('depart')(
                <DatePicker style={{ width: '100%' }} placeholder="YYYY-MM-DD" />
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="Travelers">
              {getFieldDecorator('travelers')(
                <Select placeholder="1" style={{ width: '100%' }}>
                  <Option value="travel0">0</Option>
                  <Option value="travel1">1</Option>
                  <Option value="travel2">2</Option>
                  <Option value="travel3">3</Option>
                  <Option value="travel4">4</Option>
                  <Option value="travel5">5</Option>
                </Select>
              )}
            </FormItem>
          </Col>
        </Row>
        <StandardFormRow block style={{ paddingBottom: 11 }}>
              <FormItem label="Airlines">
                {getFieldDecorator('airlines')(
                  <TagSelect expandable>
                    <TagSelect.Option value="airline1">American Airlines</TagSelect.Option>
                    <TagSelect.Option value="airline2">Alaska Airlines</TagSelect.Option>
                    <TagSelect.Option value="airline3">Virgin America</TagSelect.Option>
                    <TagSelect.Option value="airline4">JetBlue Airways</TagSelect.Option>
                    <TagSelect.Option value="airline5">Delta</TagSelect.Option>
                    <TagSelect.Option value="airline6">United</TagSelect.Option>
                    <TagSelect.Option value="airline7">Sun Country Airlines</TagSelect.Option>
                  </TagSelect>
                )}
              </FormItem>
              <FormItem label="Stops">
                {getFieldDecorator('stops')(
                  <TagSelect>
                    <TagSelect.Option value="stop0">Nonstop</TagSelect.Option>
                    <TagSelect.Option value="stop1">1 Stop</TagSelect.Option>
                    <TagSelect.Option value="stop2">2+ Stops</TagSelect.Option>
                  </TagSelect>
                )}
              </FormItem>
              <FormItem label="Departure time">
                {getFieldDecorator('out_time')(
                  <TagSelect expandable>
                    <TagSelect.Option value="out_time0">Early morning (12:00am-4:59am)</TagSelect.Option>
                    <TagSelect.Option value="out_time1">Morning (5:00am-11:59am)</TagSelect.Option>
                    <TagSelect.Option value="out_time2">Afternoon (12:00pm-5:59pm)</TagSelect.Option>
                    <TagSelect.Option value="out_time3">Evening (6:00pm-11:59pm)</TagSelect.Option>
                  </TagSelect>
                )}
              </FormItem>
          </StandardFormRow>
        
        <div style={{ overflow: 'hidden' }}>
          <div style={{ float: 'right', marginBottom: 24 }}>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
              Reset
            </Button>
            <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
              Up <Icon type="up" />
            </a>
          </div>
        </div>
      </Form>
    );
  }

  renderForm() {
    const { expandForm, roundtrip } = this.state;
    return roundtrip? (expandForm ? this.renderAdvancedForm() : this.renderSimpleForm()) :
            (expandForm ? this.renderAdvancedFormOneWay() : this.renderSimpleFormOneWay());
  }

  // foobar() {
  //   window.alert('in foobar')
  // }

  render() {
    const {
      list: { list = [] },
      rule: { data },
      loading,
      form: { getFieldDecorator },
    } = this.props;
    const { selectedRows, modalVisible, updateModalVisible, stepFormValues } = this.state;
    // const menu = (
    //   <Menu onClick={this.handleMenuClick} selectedKeys={[]}>
    //     <Menu.Item key="remove">删除</Menu.Item>
    //     <Menu.Item key="approval">批量审批</Menu.Item>
    //   </Menu>
    // );

    // const parentMethods = {
    //   handleAdd: this.handleAdd,
    //   handleModalVisible: this.handleModalVisible,
    // };
    // const updateMethods = {
    //   handleUpdateModalVisible: this.handleUpdateModalVisible,
    //   handleUpdate: this.handleUpdate,
    // };

    const cardList = list ? (
      <List
        rowKey="id"
        loading={loading}
        grid={{ gutter: 24, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
        dataSource={list}
        renderItem={item => (
          <List.Item>
            <Card
              className={styles.card}
              hoverable
              // cover={<img alt={item.title} src={item.cover}/>}
            >
              <Card.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a>{item.title}</a>}
                description={<Ellipsis lines={2}>{item.subDescription}</Ellipsis>}
              />
              <div style={{ overflow: 'hidden' }}>
                <div style={{ float: 'right', marginBottom: 24 }}>
                  <span>{"$632"}</span>
                  <Button style={{ marginLeft: 24 }} type="primary" htmlType="submit">
                    Add to wish list
                  </Button>
                  <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                    Details <Icon type="down" />
                  </a>
                </div>
              </div>
              {/* <div className={styles.cardItemContent}>
                <span>{moment(item.updatedAt).fromNow()}</span>
                <div className={styles.avatarList}>
                  <AvatarList size="mini">
                    {item.members.map((member, i) => (
                      <AvatarList.Item
                        key={`${item.id}-avatar-${i}`}
                        src={member.avatar}
                        tips={member.name}
                      />
                    ))}
                  </AvatarList>
                </div>
              </div> */}
            </Card>
          </List.Item>
        )}
      />
    ) : null;

    return (
      <PageHeaderWrapper title="Flight search">
          <Card bordered={true}>
            <div className={styles.tableList}>
            <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
              <Col md={12} sm={24}>
                <FormItem >
                  {getFieldDecorator('roundtrip', {
                      initialValue: '1',
                    })(
                      <Radio.Group>
                        <Radio value="1" onClick={this.handleRoundtripChange.bind(this,false)}>One-way</Radio>
                        <Radio value="2" onClick={this.handleRoundtripChange.bind(this,true)}>Roundtrip</Radio>
                      </Radio.Group>
                    )}
                </FormItem>
              </Col>
            </Row>
            <div className={styles.tableListForm}>{this.renderForm()}</div>
              {/* <div className={styles.tableListOperator}>
                <Button icon="plus" type="primary" onClick={() => this.handleModalVisible(true)}>
                  新建
                </Button>
                {selectedRows.length > 0 && (
                  <span>
                    <Button>批量操作</Button>
                    <Dropdown overlay={menu}>
                      <Button>
                        更多操作 <Icon type="down" />
                      </Button>
                    </Dropdown>
                  </span>
                )}
              </div> */}
              {/* <StandardTable
                selectedRows={selectedRows}
                loading={loading}
                data={data}
                columns={this.columns}
                onSelectRow={this.handleSelectRows}
                onChange={this.handleStandardTableChange}
              /> */}
            </div>
          </Card>
          <div className={styles.cardList}>{cardList}</div>
          {/* <CreateForm {...parentMethods} modalVisible={modalVisible} /> */}
          {/* {stepFormValues && Object.keys(stepFormValues).length ? (
            <UpdateForm
              {...updateMethods}
              updateModalVisible={updateModalVisible}
              values={stepFormValues}
            />
          ) : null} */}
      </PageHeaderWrapper>
    );
  }
}

export default TableList;
