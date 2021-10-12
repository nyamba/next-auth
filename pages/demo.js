import {useState} from 'react'
import Layout from '../components/layout'
import FacebookLogin from 'react-facebook-login'


export default function Page () {
  const [email, setEmail] = useState(null)

  
  const responseFacebook = (response) => {
    const {email} = response
    setEmail(email)
    console.log(response)
  }


  return (
    <Layout>
      <h1>Demontsrate Social login</h1>
      Email: {email ? <p>{email}</p>: ''}
      <br/>
      <FacebookLogin
        appId="389804239452408"
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
      />
    </Layout>
  )
}
