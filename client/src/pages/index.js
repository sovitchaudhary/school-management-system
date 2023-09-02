import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from './login'
import Dashboard from './Dashboard'
import { UseSelector, useSelector } from 'react-redux'
const inter = Inter({ subsets: ['latin']})

export default function Home() {
  const {isLoggedIn} =useSelector (state=> state.user)
  if(isLoggedIn){
     return <Dashboard/>
  }else{
     return <Login/>
  }
 }
