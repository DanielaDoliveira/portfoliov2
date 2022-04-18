
import {useState} from 'react';
import {Form} from 'react-bootstrap'
export default function Switcher()
{
    const [light,setLight] = useState(true);
    const [id,setId] = useState('light')
  
    function handleChange(...props)
    {
      light = props.light;
      id = props.id;
      light = setLight(false);
      id = setId('darkContainer');
    }
    <Form>
    <Form.Check 
      type="switch"
      id="custom-switch"
      label="Check this switch"
      onChange={handleChange}
    />
    </Form>
}