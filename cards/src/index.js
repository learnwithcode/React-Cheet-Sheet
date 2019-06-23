import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'; 
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
            <CommentDetail 
                author="Abhiraj" 
                timeAgo="Today at 6:00Pm"
                comment="Nice Post 1"
                image={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail 
                author="Vineet" 
                timeAgo="Today at 7:00Pm"
                comment="Nice Post 2"
                image={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail 
                author="Abhishek" 
                timeAgo="Today at 8:00Pm"
                comment="Nice Post 3"
                image={faker.image.avatar()}/>
            </ApprovalCard>

        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));