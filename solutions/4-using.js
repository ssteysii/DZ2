// BEGIN
const getDomainInfo = (adress) => {
    const hasHttps = adress.startsWith('https://');
    const hasHttp = adress.startsWith('http://');
  
    const scheme = hasHttps ? 'https' : 'http';
    const name = adress.replace(/^https?:\/\//, '');
  
    return {
      scheme: scheme,
      name: name,
    };
  };
  
  export default getDomainInfo;
// END