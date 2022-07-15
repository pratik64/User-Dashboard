import {  useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { getUsers } from "../services/user.service";
import { User } from "../types/user.type";


function DashboardComponent() {
    const state = useSelector((state: any) => state.loginReducer)

    const [userList, setUserList] = useState<User[]>([]);

    useEffect(() => {
        getUsers().then((res: any) => setUserList(res.data))
    }, [])

    return (
        <>
            <div className="jumbotron h-100vh">
                <h1 className="display-5 text-center">User Dashboard</h1>
                <p className="text-center"> Welcome <span className="font-weight-bold text-uppercase">{state.username.split('.')[0]}</span> !!</p>
                <hr className="my-4" />
                <div className="row text-center justify-content-center">
                    {
                        userList.map(({id,...user}) => {
                            return (<div className="col-lg-4 border border-secondary m-3" key={id}>
                                <img className="rounded-circle" src={user.avatar} alt="Avatar" width="140" height="140" />
                                <h2>{user.first_name} {user.last_name}</h2>
                                <p>{user.email}</p>
                                
                            </div>)
                        })
                    }
                </div>
            </div>
        </>
    )
}


export default DashboardComponent;