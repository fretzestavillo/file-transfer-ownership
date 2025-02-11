import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Login() {
  const [accessToken, setAccessToken] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const token = hashParams.get('access_token');
    if (token) {
      setAccessToken(token);
      navigate('/Home', { state: { accessToken: token } }); // ✅ Navigate after login
    }
  }, []);

  async function oauthSignIn() {
    const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

    const params = {
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      redirect_uri: import.meta.env.VITE_REDIRECT_URI,
      response_type: 'token',
      scope:
        'https://www.googleapis.com/auth/docs https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.appdata',
      include_granted_scopes: 'true',
      state: 'pass-through-value',
      prompt: 'consent',
    };

    const urlParams = new URLSearchParams(params).toString();
    const oauthUrl = `${oauth2Endpoint}?${urlParams}`;
    console.log('OAuth URL:', oauthUrl);
    window.location.href = oauthUrl;
  }
  return (
    <>
      <button onClick={oauthSignIn}>Oauth Sign In</button>
    </>
  );
}
