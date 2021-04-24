import React from 'react';
import { Table, Badge } from 'reactstrap';
import resume from '../../assets/images/resume.pdf';

const Technologies = (props) => {
  return (
          <div>
          <h1><Badge color='secondary'>Technologies</Badge></h1>
          <a href={resume}>Resume</a>
      
    <Table borderless>
        
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"></th>
          <td>JavaScript</td>
          <td>Node.js</td>
          <td>React</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>MySQL</td>
          <td>MongoDB</td>
          <td>CSS</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>HTML</td>
          <td>Express.js</td>
          <td>APIs</td>
        </tr>
      </tbody>
    </Table>
    </div>

  );
}

export default Technologies;