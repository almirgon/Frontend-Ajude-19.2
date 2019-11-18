async function requestPOST(url, body) {
    try {
        let r = await fetch(url, 
        {
            method: 'POST',
            headers:  {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
            },
            body:JSON.stringify(body),
            mode: "cors"
        });
        if (!r.ok) {
            throw r;
        }
        return r;
    } catch (error) {
        if (!error) throw ErrorEvent("Servidor não disponível");
        let e = await error.json();
        alert(e.message);
    }
}

export {requestPOST};
