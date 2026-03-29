import React, { Suspense } from 'react';
import MyApplicationStat from './MyApplicationStat';
import MyApplicationList from './MyApplicationList';
import useAuth from '../../hooks/useAuth';
const applicationPromise=(email)=>
{
    return fetch(`http://localhost:3000/application?email=${email}`).then(res=>res.json())
}
const Myapplication = () => {
    const {user}=useAuth();
    return (
        <div>
            <MyApplicationStat></MyApplicationStat>
            <Suspense fallback={'loading'}><MyApplicationList applicationPromise={applicationPromise(user.email)}></MyApplicationList></Suspense>
        </div>
    );
};

export default Myapplication;