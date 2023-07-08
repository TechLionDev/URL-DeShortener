import Button from "@/components/Button";
import CHead from "@/components/CHead";
import Footer from "@/components/Footer";
import TextInput from "@/components/TextInput";
import Toast from "@/components/Toast";
import RedirectCard from "@/components/RedirectCard";
import { useState } from "react";

const Home = () => {
  const [url, setURL] = useState('');
  const [finished, setFinished] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(' ');
  const [redirects, setRedirects] = useState([]);

  const handleInputChange = (e) => {
    setURL(e.target.value);
  };

  async function deshorten(e) {
    e.preventDefault();
    setFinished(false);
    let valid = await isRealUrl(url);
    console.log(valid);
    if (valid) {
      let fres = await fetch(`/api/deshorten?shortUrl=${url}`);
      let jres = await fres.json();
      setRedirects(jres.redirects);
      if(jres.redirects.length === 0){
        setError(true);
        setErrorMessage('No redirects found');
        setURL('')
      }
      console.log(redirects);
      setFinished(true);
    } else {
      setFinished(true);
      setError(true);
      setErrorMessage('Please enter a valid URL');
      return;
    }

  }

  async function isRealUrl(str) {
    let regex = new RegExp('^(https?:\\/\\/)' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return regex.test(str);
  }

  return (
    <>
      <CHead title={!redirects.length > 0 ? 'Home' : 'Results'} />
      <main>
        <div className="flex justify-center items-center">
          <Toast type={'error'} show={error} setShow={setError} message={errorMessage} />
        </div>
        <div class="flex flex-col justify-center items-center h-screen">
          {!redirects.length > 0 && <form className="flex justify-center items-center gap-4 flex-col p-6 border-2 border-gray-300 rounded-md" onSubmit={deshorten} onChange={() => { setError(false) }}>
            <TextInput value={url} onChange={handleInputChange} />
            <Button disabled={!finished} variant="primary" type="submit">DeShorten</Button>
          </form>}
          {redirects.length > 0 && <div className="flex flex-col justify-center items-center gap-4 m-1 p-4">
            <h1 className="text-2xl font-bold">Results</h1>
            {redirects.map((redirect) => {
              return <>
                <RedirectCard key={redirects.indexOf(redirect) + 1} redirect={redirect} />
                {!(redirects.indexOf(redirect) + 1 === redirects.length) && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>}
              </>
            })}
            <Button variant="outline" type="submit" onClick={() => { setRedirects([]) }}>DeShorten Another Link</Button>
          </div>}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;