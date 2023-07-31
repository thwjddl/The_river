import { Unity, useUnityContext } from 'react-unity-webgl';
import React from "react";
import '../css/index_2.css'

function App_2() {
    const loader = "https://megaplantheriverbucket.s3.ap-northeast-2.amazonaws.com/UnityWebGL/TheRiverWebGL_LTS.loader.js"
    const data = "https://megaplantheriverbucket.s3.ap-northeast-2.amazonaws.com/UnityWebGL/TheRiverWebGL_LTS.data"
    const framework = "https://megaplantheriverbucket.s3.ap-northeast-2.amazonaws.com/UnityWebGL/TheRiverWebGL_LTS.framework.js"
    const wasm = "https://megaplantheriverbucket.s3.ap-northeast-2.amazonaws.com/UnityWebGL/TheRiverWebGL_LTS.wasm"

    const { unityProvider } = useUnityContext({
        loaderUrl: loader,
        dataUrl: data,
        frameworkUrl: framework,
        codeUrl: wasm,
    });

    return (
        <div className='App_2'>
            <Unity style={{
                width: '100%',
                height: "100vh"
            }} unityProvider={unityProvider} />
        </div>
    );
}

export default App_2;
