import http from 'k6/http';
import {sleep} from 'k6';


export const options={
    stages:[{
        duration: '10s',
        target: 10
    },{
        duration: '40s',
        target: 10
    },{
        duration: '10',
        target: 0
    }]
};


export default function(){
    let response = http.get('https://reqres.in/api/users?page=2');
    sleep(1); 
}