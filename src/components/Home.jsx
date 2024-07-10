import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, clearCart } from '../utils/cartSlice'
import store from '../utils/store';
// import userSlice, { fetchUsers } from '../utils/userSlice';
// import { userSlice } from 'module'
// import { fetchUsers } from '../utils/userSlice';
// import { fetchSlice } from "../utils/userSlice"
import { fetchUsers } from "../utils/userSlice"

const Home = () => {

    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const items = useSelector((store) => store.cart.item)
    const users = useSelector((store) => store.users)

    console.log('store:', items)
    console.log('users:', users)

    useEffect(() => {
        if (users.status === 'idle') {
            dispatch(fetchUsers())
        }
    }, [dispatch])

    if (users.status == 'loading') {
        return <h1>Loading Data from Api</h1>
    }
    else if (users.status == 'failed') {
        return <h1>{users.error}</h1>
    }


    return (
        <>
            <div>
                <input type="text" className="border border-black m-4" onChange={(e) => setInput(e.target.value)} />
                <button onClick={() => dispatch(addItem(input))}>Add Item</button>
                <button onClick={() => dispatch(clearCart(input))}>Clear Item</button>
            </div>

            <ul>
                {items.map((val) => {
                    return (
                        <li key={i + 1}>{val}</li>

                    )
                })

                }

            </ul>


            <ul>
                {users.users.map((val) => {
                    return (
                        <>
                        <li>{val.username}</li>
                        <li>{val.name}</li>
                        </>     
                    )
                })}
            </ul>
        </>
    )
}

export default Home
