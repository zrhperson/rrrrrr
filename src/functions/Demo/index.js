import React, { Component } from 'react'
import components from './demo.less'
import Button from 'bocomui/Button'
import SearchInput from 'bocomui/SearchInput'
import Input from 'bocomui/Input'
import { Form, FormItem, FormSubmit, FormInput, FormSelect, Option, FormTextarea } from 'bocomui/Form'
import DatePicker from 'bocomui/DatePicker'
import Checkbox, { CheckboxGroup } from 'bocomui/Checkbox'
import message from 'bocomui/message'

class Demo extends Component {






  render() {

    return (
      <div className="demo-center">
      <Form>
        <FormItem label="选择日期" name="date" required>
          <DatePicker className="Demo-input" onSelect={this.handleDateSelect} />
        </FormItem>
        <FormItem label="手机号" name="date" required>
          <Input className="Demo-input" placeholder="13921008888"  />
        </FormItem>
        <div style={{width:300}}>
          <FormItem label="描述" name="desc" >
            <FormTextarea  width={40}/>
          </FormItem>
        </div>
        <div  style={{marginLeft:88}}>
          <Button>确定</Button>
          <Button type="minor">取消</Button>
        </div>
      </Form>
        </div>
    )
  }
}

export default Demo
