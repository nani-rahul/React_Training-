import React, { useState, useEffect } from 'react';
import { Button, Space, Table, Tag, Breadcrumb } from 'antd';
import { useNavigate } from 'react-router-dom';
const columns = [

  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,

  },
  {
    title: 'Release Date',
    dataIndex: 'release_date',
    key: 'release_date',
  },
  {
    title: 'Hit',
    dataIndex: 'hit',
    key: 'hit',
    render: (text, record, index) => {
      if (typeof text === 'boolean') {
        if (text === true) {
          return 'Yes';
        }
        return 'No';
      } else {
        if (text === 'on') {
          return 'Yes';
        }
        return 'No';
      }
    },
  },
];

const Moviestable = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/movies')
      .then((res) => res.json())
      .then((moviesData) => {
        setData(moviesData.items);
      });
  }, []);


  return (

    <Breadcrumb.Item>
      <Button type='primary' htmlType='submit' onClick={() => navigate('/form')}> Add New </Button>
      <Table rowKey={(record) => record.id} columns={columns} dataSource={data} />
    </Breadcrumb.Item>

  )
}

export default Moviestable;
