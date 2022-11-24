import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import {
  auth,
  storage,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from './firebase';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [continent, setContinent] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [postCode, setPostCode] = useState('');
  const [name, setName] = useState('');
  const [user, loading] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const imageMimeType = /image\/(png|jpg|PNG|jpeg)/i;

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

  const handleContinent = (e) => {
    setContinent(e.target.value);
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
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

  const register = async () => {
    const uploadFile = () => {
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setIsLoading(true);
          switch (snapshot.state) {
            case 'paused':
              setIsLoading(true);
              break;
            case 'running':
              setIsLoading(true);
              break;
            default:
              break;
          }
        },
        (error) => {
          setIsLoading(false);
          toast.error(error, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            registerWithEmailAndPassword(name, email, password, downloadURL,
              continent, country, city, postCode);
            setIsLoading(false);
          });
        },
      );
    };
    // eslint-disable-next-line no-unused-expressions
    file && uploadFile();
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
          type="email"
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
            required
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
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <section className="location">
          <p>
            Location and notes
          </p>
          <select id="continent" name="continent" className="register__textBox" onChange={handleContinent}>
            <option value="africa">Africa</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="northamerica">North America</option>
          </select>

          <select id="country" name="country" className="register__textBox" onChange={handleCountry}>
            <option value="rwanda">Rwanda</option>
            <option value="uganda">Uganda</option>
            <option value="drc">DRC</option>
            <option value="kenya">Kenya</option>
          </select>
          <div className="subsection">
            <input
              type="text"
              className="register__textBox"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
            />

            <input
              type="text"
              className="register__textBox"
              value={postCode}
              onChange={(e) => setPostCode(e.target.value)}
              placeholder="Postal code"
            />
          </div>
        </section>
        <button type="button" className="register__btn" onClick={register}>
          {isLoading ? 'Registering ...' : 'Register'}
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
