import React from "react";

class GoogleAuth extends React.Component {
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '515706222530-d11sh7o5j9pl9bd51s46lcl0rl88f4qh.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }
    render(){
        return <div>Google Auth</div>
    }
}

export default GoogleAuth;