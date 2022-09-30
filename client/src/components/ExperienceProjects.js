import React from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
const { TextArea } = Input
function ExperienceProjects() {
    return (
        <div>
            <h5><b>Experience</b></h5>
            <hr />
            <Form.List name="experience">
        {(fields, { add, remove }) => (
          <>
            <div className='row'>
            {fields.map(({ key, name, ...restField }) => (
                <>
                <div className='col-md-3'>
                <Form.Item
                  {...restField}
                  name={[name, 'company']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing company name',
                    },
                  ]}
                >
                  <Input placeholder="Company" />
                </Form.Item>
                </div>

                <div className='col-md-2'>
                <Form.Item
                  {...restField}
                  name={[name, 'years']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing percentage',
                    },
                  ]}
                >
                  <Input placeholder="Years" />
                </Form.Item>
                </div>

                <div className='col-md-3'>
                <Form.Item
                  {...restField}
                  name={[name, 'place']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing place',
                    },
                  ]}
                >
                  <Input placeholder="Place" />
                </Form.Item>
                </div>

                <div className='col-md-2'>
                <MinusCircleOutlined style={{fontSize:25, color:'tomato'}} onClick={() => remove(name)} />
                </div>
              </>
            ))}
            </div>

            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Experience
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      
      <h5><b>Projects</b></h5>
      <hr />
      <Form.List name="projects">
        {(fields, { add, remove }) => (
          <>
            <div className='row'>
            {fields.map(({ key, name, ...restField }) => (
                <>
                <div className='col-md-4'>
                <Form.Item
                  {...restField}
                  name={[name, 'title']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing title',
                    },
                  ]}
                >
                  <Input placeholder="Title" />
                </Form.Item>
                </div>

                <div className='col-md-4'>
                <Form.Item
                  {...restField}
                  name={[name, 'Rating']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing Rating',
                    },
                  ]}
                >
                  <TextArea placeholder="Description" />
                </Form.Item>
                </div>

                <div className='col-md-2'>
                <Form.Item
                  {...restField}
                  name={[name, 'range']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing year range',
                    },
                  ]}
                >
                  <Input placeholder="Year Range" />
                </Form.Item>
                </div>

                <div className='col-md-2'>
                <MinusCircleOutlined style={{fontSize:25, color:'tomato'}} onClick={() => remove(name)} />
                </div>
              </>
            ))}
            </div>

            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Project
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
        </div>
    )
}

export default ExperienceProjects
