import React, {Component, Fragment} from 'react';
import SelfBpmn from '../../components/Bpmn/SelfBpmn';
//import QyBpmn from './qysh.bpmn';

const bpmn = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="Definitions_1ia7zor" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="1.14.0">
  <bpmn:process id="Process_1" isExecutable="true">
    <bpmn:startEvent id="StartEvent_1" name="开始">
      <bpmn:outgoing>SequenceFlow_0esqugh</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:endEvent id="EndEvent_15hrz6o" name="结束">
      <bpmn:incoming>SequenceFlow_0wgacc8</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:task id="Task_1i6nve4" name="企业申请">
      <bpmn:incoming>SequenceFlow_0esqugh</bpmn:incoming>
      <bpmn:incoming>SequenceFlow_1q8ktkd</bpmn:incoming>
      <bpmn:incoming>SequenceFlow_1b56jgd</bpmn:incoming>
      <bpmn:incoming>SequenceFlow_0ferkdq</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_1s295al</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="SequenceFlow_0esqugh" sourceRef="StartEvent_1" targetRef="Task_1i6nve4" />
    <bpmn:task id="Task_1kix9zh" name="初审">
      <bpmn:incoming>SequenceFlow_1s295al</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_00o72a6</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="SequenceFlow_1s295al" sourceRef="Task_1i6nve4" targetRef="Task_1kix9zh" />
    <bpmn:exclusiveGateway id="ExclusiveGateway_0bwpr09" name="审核">
      <bpmn:incoming>SequenceFlow_00o72a6</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_1aouwgv</bpmn:outgoing>
      <bpmn:outgoing>SequenceFlow_1q8ktkd</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="SequenceFlow_00o72a6" sourceRef="Task_1kix9zh" targetRef="ExclusiveGateway_0bwpr09" />
    <bpmn:task id="Task_19ultq9" name="复审">
      <bpmn:incoming>SequenceFlow_1aouwgv</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_0wg78fq</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="SequenceFlow_1aouwgv" name="通过" sourceRef="ExclusiveGateway_0bwpr09" targetRef="Task_19ultq9" />
    <bpmn:exclusiveGateway id="ExclusiveGateway_038cup2" name="审核">
      <bpmn:incoming>SequenceFlow_0wg78fq</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_0dd012n</bpmn:outgoing>
      <bpmn:outgoing>SequenceFlow_1b56jgd</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="SequenceFlow_0wg78fq" sourceRef="Task_19ultq9" targetRef="ExclusiveGateway_038cup2" />
    <bpmn:task id="Task_1jlw5lj" name="复核">
      <bpmn:incoming>SequenceFlow_0dd012n</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_1aj3kzh</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="SequenceFlow_0dd012n" name="通过" sourceRef="ExclusiveGateway_038cup2" targetRef="Task_1jlw5lj" />
    <bpmn:exclusiveGateway id="ExclusiveGateway_0ikvtog" name="审核">
      <bpmn:incoming>SequenceFlow_1aj3kzh</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_0wgacc8</bpmn:outgoing>
      <bpmn:outgoing>SequenceFlow_0ferkdq</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="SequenceFlow_1aj3kzh" sourceRef="Task_1jlw5lj" targetRef="ExclusiveGateway_0ikvtog" />
    <bpmn:sequenceFlow id="SequenceFlow_0wgacc8" name="通过" sourceRef="ExclusiveGateway_0ikvtog" targetRef="EndEvent_15hrz6o" />
    <bpmn:sequenceFlow id="SequenceFlow_1q8ktkd" name="不通过" sourceRef="ExclusiveGateway_0bwpr09" targetRef="Task_1i6nve4" />
    <bpmn:sequenceFlow id="SequenceFlow_1b56jgd" sourceRef="ExclusiveGateway_038cup2" targetRef="Task_1i6nve4" />
    <bpmn:sequenceFlow id="SequenceFlow_0ferkdq" name="不通过" sourceRef="ExclusiveGateway_0ikvtog" targetRef="Task_1i6nve4" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="173" y="102" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="180" y="138" width="22" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_15hrz6o_di" bpmnElement="EndEvent_15hrz6o">
        <dc:Bounds x="1172" y="102" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1179" y="141" width="22" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_1i6nve4_di" bpmnElement="Task_1i6nve4">
        <dc:Bounds x="259" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0esqugh_di" bpmnElement="SequenceFlow_0esqugh">
        <di:waypoint x="209" y="120" />
        <di:waypoint x="259" y="120" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="234" y="98" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Task_1kix9zh_di" bpmnElement="Task_1kix9zh">
        <dc:Bounds x="409" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1s295al_di" bpmnElement="SequenceFlow_1s295al">
        <di:waypoint x="359" y="120" />
        <di:waypoint x="409" y="120" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="384" y="98" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="ExclusiveGateway_0bwpr09_di" bpmnElement="ExclusiveGateway_0bwpr09" isMarkerVisible="true">
        <dc:Bounds x="559" y="95" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="574" y="148" width="22" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_00o72a6_di" bpmnElement="SequenceFlow_00o72a6">
        <di:waypoint x="509" y="120" />
        <di:waypoint x="559" y="120" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="534" y="98" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Task_19ultq9_di" bpmnElement="Task_19ultq9">
        <dc:Bounds x="659" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1aouwgv_di" bpmnElement="SequenceFlow_1aouwgv">
        <di:waypoint x="609" y="120" />
        <di:waypoint x="659" y="120" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="623" y="98" width="23" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="ExclusiveGateway_038cup2_di" bpmnElement="ExclusiveGateway_038cup2" isMarkerVisible="true">
        <dc:Bounds x="809" y="95" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="824" y="148" width="22" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0wg78fq_di" bpmnElement="SequenceFlow_0wg78fq">
        <di:waypoint x="759" y="120" />
        <di:waypoint x="809" y="120" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="784" y="98" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Task_1jlw5lj_di" bpmnElement="Task_1jlw5lj">
        <dc:Bounds x="909" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0dd012n_di" bpmnElement="SequenceFlow_0dd012n">
        <di:waypoint x="859" y="120" />
        <di:waypoint x="909" y="120" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="873" y="98" width="23" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="ExclusiveGateway_0ikvtog_di" bpmnElement="ExclusiveGateway_0ikvtog" isMarkerVisible="true">
        <dc:Bounds x="1059" y="95" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1074" y="148" width="22" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1aj3kzh_di" bpmnElement="SequenceFlow_1aj3kzh">
        <di:waypoint x="1009" y="120" />
        <di:waypoint x="1059" y="120" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1034" y="98" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0wgacc8_di" bpmnElement="SequenceFlow_0wgacc8">
        <di:waypoint x="1109" y="120" />
        <di:waypoint x="1172" y="120" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1129" y="98" width="23" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_1q8ktkd_di" bpmnElement="SequenceFlow_1q8ktkd">
        <di:waypoint x="584" y="95" />
        <di:waypoint x="584" y="23" />
        <di:waypoint x="309" y="23" />
        <di:waypoint x="309" y="80" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="430" y="2" width="34" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_1b56jgd_di" bpmnElement="SequenceFlow_1b56jgd">
        <di:waypoint x="834" y="95" />
        <di:waypoint x="834" y="23" />
        <di:waypoint x="309" y="23" />
        <di:waypoint x="309" y="80" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="571.5" y="1.5" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0ferkdq_di" bpmnElement="SequenceFlow_0ferkdq">
        <di:waypoint x="1084" y="95" />
        <di:waypoint x="1084" y="23" />
        <di:waypoint x="309" y="23" />
        <di:waypoint x="309" y="80" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="680" y="2" width="34" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;

export default () => {
  return (
    <SelfBpmn bpmn={bpmn}/>
  )
}
