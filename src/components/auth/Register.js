import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from './firebase';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const imageMimeType = /image\/(png|jpg|jpeg)/i;

  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState('https://deejayfarm.com/wp-content/uploads/2019/10/Profile-pic.jpg');

  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      toast.error('Image mime type is not valid', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }
    setFile(file);
  };
  useEffect(() => {
    let fileReader; let
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  const register = () => {
    if (!name) {
      toast.error('Please enter the name', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate('/dashboard');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);
  return (
    <div className="register">
      <div className="register__container">
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <p>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="image"> Browse images</label>
          <input
            type="file"
            id="image"
            accept=".png, .jpg, .jpeg"
            onChange={changeHandler}
          />
        </p>

        {fileDataURL
          ? (
            <p className="img-preview-wrapper">
              <img src={fileDataURL} className="img_preview" alt="preview" />
            </p>
          ) : null}
        <p>
          <button type="button">Save</button>
        </p>
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="button" className="register__btn" onClick={register}>
          Register
        </button>
        <button
          type="button"
          className="register__btn register__google"
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>
        <div>
          Already have an account?
          {' '}
          <Link to="/">Login</Link>
          {' '}
          now.
        </div>
      </div>
    </div>
  );
}
export default Register;
