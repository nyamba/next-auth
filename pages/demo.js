import Layout from '../components/layout'
import FacebookLogin from 'react-facebook-login'


export default function Page () {
  
  const responseFacebook = (response) => {
    console.log(response);
  }


  return (
    <Layout>
      <h1>Demontsrate Social login</h1>
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
