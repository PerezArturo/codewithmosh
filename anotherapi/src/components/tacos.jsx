import React from 'react';
import 'antd/dist/antd.css';
import './tacos.css'

import {Layout, Typography, Card, Row, Col} from 'antd';

const {Header, Content, Footer} = Layout;
const {Title, Text} = Typography;

const Questions = ({questions}) => {
    return (
        <Layout style={{height:"100vh"}}>
            <Header>
                <div className="logo">
                    <Title level={2} className={"logo-text"}>Trivia</Title>
                </div>
            </Header>
            <Content style={{padding: '50px 50px'}}>
                <div className="site-layout-content">
                    {questions.map((question) => (
                        <div className="site-card-border-less-wrapper">
                            <Card key={question.id} title={"Question #" + question.id} bordered={false}
                                  style={{width: 500}}>
                                <Text className={'question'} >{question.question}</Text>
                                <Footer style={{textAlign: 'center', marginTop:10, marginBottom:10}}>{question.answer}</Footer>
                                <Row justify="center" style={{textAlign: 'center'}}>
                                    <Col span={12}>{"Value: "+ question.value}</Col>
                                    <Col span={12}>{"Category: "+ question.category.title}</Col>
                                </Row>
                            </Card>
                        </div>
                    ))}
                </div>
            </Content>
        </Layout>
    )
}

export default Questions;