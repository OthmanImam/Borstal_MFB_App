import React, { useEffect, useState } from 'react';  
import axios from 'axios';  
import { Table, Typography, Spin, Alert } from 'antd';  

const { Title } = Typography;  

const CustomerPage = () => {  
    const [customers, setCustomers] = useState([]);  
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState('');  

    const fetchCustomers = async () => {  
        try {  
            const response = await axios.get('https://mocki.io/v1/1a9b21de-9b8a-4f94-b964-da9b25950f49');  
            setCustomers(response.data);  
            setLoading(false);  
        } catch (error) {  
            setError('Error fetching customer data.');  
            setLoading(false);  
        }  
    };  

    useEffect(() => {  
        fetchCustomers();  
    }, []);  

    if (loading) return <Spin size="large" tip="Loading..." style={{ display: 'block', margin: '20px auto' }} />;  
    if (error) return <Alert message={error} type="error" showIcon style={{ margin: '20px' }} />;  

    const columns = [  
        {  
            title: 'Name',  
            dataIndex: 'name',  
            key: 'name',  
        },  
        {  
            title: 'Email',  
            dataIndex: 'email',  
            key: 'email',  
        },  
        {  
            title: 'Phone',  
            dataIndex: 'phone',  
            key: 'phone',  
        },  
        {  
            title: 'Date of Birth',  
            dataIndex: 'date_of_birth',  
            key: 'date_of_birth',  
        },  
        {  
            title: 'Address',  
            dataIndex: 'address',  
            key: 'address',  
        },  
        {  
            title: 'Account Balance',  
            dataIndex: 'account_balance',  
            key: 'account_balance',  
            render: (text) => `$${text}`, // Format account balance as currency  
        },  
        {  
            title: 'Loans',  
            dataIndex: 'loans',  
            key: 'loans',  
            render: (loans) => (  
                loans.length > 0 ? (  
                    loans.map(loan => (  
                        <div key={loan.loan_id}>  
                            <span>Loan ID: {loan.loan_id} (${loan.loan_amount})</span>  
                        </div>  
                    ))  
                ) : (  
                    <span>No loans</span>  
                )  
            ),  
        },  
    ];  

    return (  
        <div className="max-w-6xl mx-auto p-6">  
            <Title level={2}>Customer Information</Title>  
            <Table  
                dataSource={customers}  
                columns={columns}  
                rowKey="id"  
                pagination={{ pageSize: 10 }} // Adjust as needed  
                scroll={{ x: true }} // Enable horizontal scrolling for responsiveness  
                bordered  
            />  
        </div>  
    );  
};  

export default CustomerPage;